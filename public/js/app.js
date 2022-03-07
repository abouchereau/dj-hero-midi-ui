class App {

    socket = null;
    midiOutIndex = 0;
    data = null;//mirror of socketData

    constructor() {
        this.data = {
            midiOutDevices: null
        };
        this.initSocket();
    }

    initSocket() {
        this.socket = new WebSocket("ws://localhost:" + Const.SOCKET_PORT);
        this.socket.onmessage = (msg) => {
            let data = JSON.parse(msg.data);
            for (let key in data) {
                this.data[key] = data[key];
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