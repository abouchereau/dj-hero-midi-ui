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
                    'mappings': {}
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


/*
const readline = require('readline');
const MidiNode = require("./lib/MidiNode");
const Manager = require("./lib/Manager");
const DeviceDJHeroPS = require("./lib/DeviceDJHeroPS");
const DeviceDJHeroXbox = require("./lib/DeviceDJHeroXbox");
const yargs = require('yargs');
const HID = require('node-hid');

const argv = yargs
    .option("midiOutputName", {
        alias: "o",
        describe: "A name part of the Midi Output",
        type: 'string',
    })
    .option("defaultMidiChannel", {
        alias: "c",
        describe: "Default Midi Channel (0-15). Default : 0",
        type:'number'})
    .argv;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let midiNode = new MidiNode();
midiNode.scanOutput();

if (typeof argv.midiOutputName == "string") {
    midiNode.openFromName(midiOutName);
    start();
}
else {
    rl.question("=> Choose MIDI Output (default: " + midiNode.DEFAULT_MIDI_INDEX + ") : ", paramMidiIndex => {
        if (paramMidiIndex == null || paramMidiIndex == "" || parseInt(paramMidiIndex) > (midiNode.nbMidiDevices - 1)) {
            rl.question("=> Bad index for MIDI Output", process.exit);
        }
        midiNode.openFromIndex(parseInt(paramMidiIndex));
        start();
    });
}

function start() {
    let defaultChannel = 0;
    if (typeof argv.defaultMidiChannel == "number") {
        defaultChannel = argv.defaultMidiChannel;
    }
    let manager = new Manager(midiNode, defaultChannel);

        //automatic detection
        let devices = HID.devices();
        let oneConnected = false;
        for (let device of devices) {
            if (device.vendorId == DeviceDJHeroPS.VENDOR_ID && device.productId == DeviceDJHeroPS.PRODUCT_ID) {
                let deviceDJHeroPS = new DeviceDJHeroPS(manager);
                deviceDJHeroPS.init();
                oneConnected = true;
            }
            if (device.vendorId == DeviceDJHeroXbox.VENDOR_ID && device.productId == DeviceDJHeroXbox.PRODUCT_ID) {

            }
        }
    let deviceDJHeroXbox = new DeviceDJHeroXbox(manager);
    deviceDJHeroXbox.init();
       oneConnected = true;
       if (!oneConnected) {
           console.log("No DJ Hero detected :(");
       }
}

 */