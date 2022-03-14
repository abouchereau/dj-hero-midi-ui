const fs = require('fs');

module.exports = class Manager {

    currentMIDIChannel = 0;
    mappings = [];
    mappingKey = 0;
    midiNode = null;
    socketConnection = null;

    constructor(a, b, c) {
        this.midiNode = a;
        this.socketConnection = b;
        this.currentMIDIChannel = c;
        this.loadMappings();
    }


    get curMapping() {
        return this.mappings[this.mappingKey];
    }
    
    sendChange(btn, val) {
        this.socketConnection.send(JSON.stringify({"djheroChange":[btn,val]}));
    }

    //Json object from mappings.json to midi message
    sendMidi(cmd) {
        let channel = this.currentMIDIChannel;
        if (cmd["channel"] != null) {
            channel = cmd["channel"];
        }
        let midiMsg = [cmd.message * 16 + channel, cmd.param1, cmd.param2]
        this.midiNode.send(midiMsg);
        this.socketConnection.send(JSON.stringify({"midiOut":midiMsg}));
    }

    loadMappings() {
        try {
            this.mappings = JSON.parse(fs.readFileSync(__dirname+'/../mappings.json', 'utf8'));
        } catch (err) {
            console.error(err);
            process.exit();
        }
    }

}