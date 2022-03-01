const Utils = require("./Utils");
const midi = require('midi');
const NanoTimer = require('nanotimer');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = class MidiNode {
    static get NOTE_OFF() {return 8;}
    static get NOTE_ON() {return 9;}
    static get CC() {return 11;}
    static get PC() {return 12;}

    MIDI_MSG_GAP = "3500u";//cf NanoTimer /

    DEFAULT_MIDI_INDEX = 0;
    midiOutIndex = -1;
    nbMidiDevices = -1;
    midiOutput = null;
    midiCmdStack = [];
    stackIsEmpty = true;
    timer = null;
    lastCmd = null;
    devices = [];


    constructor() {
        this.timer = new NanoTimer();
        this.timer.setInterval(() => {
            if (!this.stackIsEmpty) {
                let midiCmd = this.midiCmdStack.shift();
                this.midiOutput.send(midiCmd);
                if (this.midiCmdStack.length == 0) {
                    this.stackIsEmpty = true;
                }
            }
        }, '', this.MIDI_MSG_GAP);

    }

    scanOutput(callback) {
        this.midiOutput = new midi.Output();
        setInterval(()=> {//process.onNextTick ?
            if (this.midiOutput.getPortCount() != this.nbMidiDevices) {
                this.nbMidiDevices = this.midiOutput.getPortCount();
                if ((this.nbMidiDevices > 0 && this.midiOutIndex == null) || (this.midiOutIndex > this.nbMidiDevices.length-1)) {
                    this.openFromIndex(0);//default
                }
                this.devices = [];
                for (let i=0;i<this.nbMidiDevices;i++) {
                    this.devices[i] = this.midiOutput.getPortName(i);
                }
                callback();
            }
        },500);
    }

    openFromIndex(index) {
        this.midiOutput.closePort(this.midiOutIndex );
        this.midiOutIndex = index;
        this.openOutput();
    }

    openFromName(namePart) {
        let found = false;
        for (let i in this.devices) {
            if (this.devices[i].indexOf(namePart)>-1) {
                this.midiOutIndex = parseInt(i);
                found = true;
                break;
            }
        }
        if (found) {
            this.openOutput();
        }
    }

    openOutput() {
        this.midiOutput.openPort(this.midiOutIndex);
        console.log("Open MIDI Output : "+this.midiOutput.getPortName(this.midiOutIndex));
    }

    send(cmd) {
        this.midiCmdStack.push(cmd);
        this.stackIsEmpty = false;
        this.lastCmd = Utils.cloneArray(cmd);
    }

}
