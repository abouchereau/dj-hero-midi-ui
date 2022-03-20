const server = require('websocket').server;
const http   = require('http');
const Const = require("./../public/js/const");
const MidiNode = require("./../lib/MidiNode");
const DeviceDJHeroPS = require("./../lib/DeviceDJHeroPS");
const Manager = require("./../lib/Manager");
const HID = require('node-hid');

let midiNode = new MidiNode();
const socket = new server({httpServer: http.createServer().listen(Const.SOCKET_PORT, ()=>{})});
let connection = null;
let manager = new Manager(midiNode);
let djHeroPSInitialized = false;
let deviceDJHeroPS = null;

midiNode.scanOutput(manager.midiIndex, ()=>{
    initSocket();
    setInterval(()=>{
        initDJHeroPs();
    },1000);
});

function initSocket() {
    socket.on('error', (err) => console.error("Error: " + err.message));
    socket.on('request', (request) => {
        connection = request.accept(null, request.origin);
        manager.setSocketConnection(connection);
        console.log("Socket connected through port " + Const.SOCKET_PORT);
        connection.on('message', (msg) => {
            if (msg.utf8Data == "INIT") {
                let json = {
                    'midiOutDevices': midiNode.devices,
                    'currentMIDIChannel': manager.currentMIDIChannel,
                    'mappings': manager.mappings,
                    'mappingKey': manager.mappingKey
                };
                connection.send(JSON.stringify(json));
            } else {
                let json = JSON.parse(msg.utf8Data);
                for (let key in json) {
                    let value = json[key];
                    if (key == "midiOutIndex") {
                        midiNode.openFromIndex(value);
                        manager.setMidiIndex(value);
                    }
                    if (key == "currentMIDIChannel" && Number.isInteger(value) && value >= 0 && value <= 15) {
                        manager.setCurrentMIDIChannel(value);
                    }
                }
            }
        });
    });
}

function checkDeviceConnected(vendorId, productId) {
    let devices = HID.devices();
    let isConnected = false;
    for (let device of devices) {
        if (device.vendorId == vendorId && device.productId == productId) {
            isConnected = true;
        }
    }
    return isConnected;
}

function initDJHeroPs() {
    let checkConnected = checkDeviceConnected(DeviceDJHeroPS.VENDOR_ID, DeviceDJHeroPS.PRODUCT_ID);
    let sendSocket = false;
    if (checkConnected && !djHeroPSInitialized) {
        deviceDJHeroPS = new DeviceDJHeroPS(manager);
        deviceDJHeroPS.init();
        djHeroPSInitialized = true;
        sendSocket = true;
    }


    if (sendSocket && connection != null) {
        let json = {'djheroConnected':djHeroPSInitialized};
        connection.send(JSON.stringify(json));
    }


}

