class Main {

    socket = null;
    midiOutIndex = 0;
    midiOutDevices = null;

    constructor() {
        this.initSocket();
    }

    initSocket() {
        this.socket = new WebSocket("ws://localhost:" + Const.SOCKET_PORT);
        this.socket.onmessage = (msg) => {
            console.log("SOCKET", msg);
            let data = JSON.parse(msg.data);
            for (let key in data) {
                if (key == "midiOutDevices") {
                    this.midiOutDevices = data[key];
                }
            }
        };
        setTimeout(()=> {
            this.socket.send("INIT");
        },500);
    }

    sendSocket(obj) {
        this.socket.send(JSON.stringify(obj));
    }

    sendMidiOutIndex(index) {
        this.socket.send(JSON.stringify({"midiOutIndex": index}));
    }
}