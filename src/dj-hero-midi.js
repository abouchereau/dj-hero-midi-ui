const server = require('websocket').server;
const http   = require('http');
const Const = require("./../public/js/const");


const socket = new server({httpServer: http.createServer().listen(Const.SOCKET_PORT, ()=>{})});
let connection = null;
socket.on('error', (err)=>console.error("Error: " + err.message));
socket.on('request', (request) => {
    connection = request.accept(null, request.origin);
    console.log("Socket connected through port " + Const.SOCKET_PORT);
    connection.on('message', (msg) => {
        initSendData();
       /* let trucs = [
            {"name": "Yop", "age": 25},
            {"name": "Yip", "age": 52},
            {"name": "Yup", "age": 15},
            {"name": "Yap", "age": 1}
        ];
        connection.send(JSON.stringify(trucs));*/
    });
});

function initSendData() {
    let midiNode = new MidiNode();
    midiNode.scanOutput();
    let json = {'midiOutDevices': midiNode.devices};
    console.log("sending "+JSON.stringify(json));
    connection.send(JSON.stringify(json));
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