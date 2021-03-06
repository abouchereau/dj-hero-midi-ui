const express = require('express');
const app = express();
const fs = require('fs');
const childProcess = require('child_process');
const packageJson = require('./package.json');
const Const = require("./public/js/const");

const getFiles = path => {
    const files = []
    for (const file of fs.readdirSync(path)) {
        const fullPath = path + '/' + file
        if(fs.lstatSync(fullPath).isDirectory())
            getFiles(fullPath).forEach(x => files.push(file + '/' + x))
        else files.push(file)
    }
    return files
}
//express.static.mime.define({'application/javascript;': ['vue']});
app.use(express.static('public'));

app.get('/', (req, res)=>res.sendFile(__dirname +'/public/index.html'));

//add dynamically all ressources for pkg
let publicPath = __dirname+'/public';
let files = getFiles(publicPath);
for (let file of files) {
    app.get("/"+file, (req, res) =>{
        res.sendFile(publicPath+"/"+file);
    });
}


childProcess.fork(__dirname + "/src/dj-hero-midi.js");

app.listen(Const.APP_PORT, ()=>{
    console.log("Welcome to "+Const.APP_NAME+" - by "+Const.AUTHOR+" - "+Const.YEAR);
    console.log("");
    console.log(`Now you can open your favorite browser and go the URL : http://localhost:${Const.APP_PORT}`)
})




