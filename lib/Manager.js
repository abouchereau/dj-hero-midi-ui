const fs = require('fs');
const LocalStorage = require('node-localstorage').LocalStorage;

module.exports = class Manager {

    currentMIDIChannel = 0;
    mappings = [];
    mappingKey = 0;
    midiNode = null;
    socketConnection = null;
    localStorage = null;
    midiIndex = 0;

    constructor(a,) {
        this.midiNode = a;
        this.localStorage = new LocalStorage('./localStorage');
        //this.socketConnection = b;
        //this.currentMIDIChannel = c;
        this.loadMappings();
    }
    

    setSocketConnection(a) {
        this.socketConnection = a;
    }

    setCurrentMIDIChannel(a) {
        this.currentMIDIChannel = a;
        this.localStorage.setItem('currentMIDIChannel', a);
    }

    setMidiIndex(a) {
        this.midiIndex = a;
        this.localStorage.setItem('midiIndex', a);
    }


    get curMapping() {
        return this.mappings[this.mappingKey];
    }
    
    sendChange(btn, val) {
        if (this.socketConnection != null) {
            this.socketConnection.send(JSON.stringify({"djheroChange":[btn,val]}));
        }
    }

    //Json object from mappings.json to midi message
    sendMidi(cmd) {
        let channel = this.currentMIDIChannel;
        if (cmd["channel"] != null) {
            channel = cmd["channel"];
        }
        let midiMsg = [cmd.message * 16 + channel, cmd.param1, cmd.param2]
        console.log("send MIDI", midiMsg);
        this.midiNode.send(midiMsg);
        if (this.socketConnection != null) {
            this.socketConnection.send(JSON.stringify({"midiOut": midiMsg}));
        }
    }

    loadMappings() {
        if (this.localStorage.getItem('currentMIDIChannel') != null) {
            this.currentMIDIChannel = parseInt(localStorage.getItem('currentMIDIChannel'));
        }
        if (this.localStorage.getItem('midiIndex') != null) {
            this.midiIndex = parseInt(localStorage.getItem('midiIndex'));
        }
        if (this.localStorage.getItem('mappings') != null) {
            this.mappings = parseInt(localStorage.getItem('mappings'));
        }
        else {
            try {
                this.mappings = JSON.parse(fs.readFileSync(__dirname+'/../mappings.json', 'utf8'));
            } catch (err) {
                console.error(err);
            }
        }
    }

}