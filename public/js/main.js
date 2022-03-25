class Main {

    socket = null;    
    currentMIDIChannel = 0;
    midiOutDevices = null;
    midiOutIndex = 0;
    djheroConnected = false;
    mappingKey = 0;
    mappings = [];

    constructor() {
        //this.initSocket();
    }

    initSocket() {
        console.log("INIT SOCKET");
        this.socket = new WebSocket("ws://localhost:" + Const.SOCKET_PORT);
        this.socket.onmessage = (msg) => {
            let data = JSON.parse(msg.data);
            //console.log("SOCKET", JSON.stringify(data, null, 4));
            for (let key in data) {
                if (key == "midiOutDevices") {
                    this.midiOutDevices = data[key];
                    window.emitter.emit('socketLoaded');
                }
                else if (key == "djheroConnected") {
                    this.djheroConnected = data[key];
                    window.emitter.emit('socketLoaded');
                }
                else if (key == "djheroChange") {
                    this.djheroConnected = data[key];
                    window.emitter.emit('djheroChange',data[key]);
                }
                else if (key == "currentMIDIChannel") {
                    this.currentMIDIChannel = data[key]+1;
                    window.emitter.emit('currentMIDIChannel');
                }
                else if (key == "mappingKey") {
                    this.mappingKey = data[key];
                    window.emitter.emit('mappingKey');
                }
                else if (key == "midiOut") {
                    window.emitter.emit('midiOut',data[key]);
                }
                else if (key == "mappings") {
                    this.mappings = data[key];
                    console.log("MAPPING", this.mappings);
                    window.emitter.emit('mappings',data[key]);
                }
            }
        };
        setTimeout(()=> {
            console.log("INIT");
            this.socket.send("INIT");
        },500);
    }

    sendSocket(obj) {
        this.socket.send(JSON.stringify(obj));
    }

    sendMidiOutIndex(index) {
        this.socket.send(JSON.stringify({"midiOutIndex": index}));
    }

    setCurrentMIDIChannel(channel) {
        this.currentMIDIChannel = channel;
        this.socket.send(JSON.stringify({"currentMIDIChannel": this.currentMIDIChannel-1 }));

    }

    get currentMapping() {
        return this.mappings[this.mappingKey];
    }

    removeItem(item, index) {
        console.log("BEFORE", JSON.stringify(this.mappings[this.mappingKey][item]));
        this.mappings[this.mappingKey][item].splice(index,1);
        console.log("AFTER", JSON.stringify(this.mappings[this.mappingKey][item]));
        window.emitter.emit('mappings');
    }
}