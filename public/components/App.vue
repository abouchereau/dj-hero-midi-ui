<template>
  <div>
    <h1>{{ appName }}</h1>
    <midi-out-devices :list="socketData.midiOutDevices" v-on:midiOutIndex="sendMidiOutIndex"></midi-out-devices>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    'midi-out-devices': Vue.defineAsyncComponent(() => loadModule('./components/MidiOutDevices.vue', Utils.loadModuleOptions()))
  },
  data() {
    return {
      appName: Const.APP_NAME,
      socketData: {
        'midiOutDevices': []
      }
    }
  },
  mounted() {
    this.initSocket();
  },
  methods: {
    initSocket() {
      console.log("initSocket");
      this.socket = new WebSocket("ws://localhost:" + Const.SOCKET_PORT);
      this.socket.onmessage = (msg) => {
        console.log("onmessage", msg);
        let data = JSON.parse(msg.data);
        console.log("DATA IN ",data);
        for (let key in data) {
          this.socketData[key] = data[key];
        }
      };
      console.log("socketData",this.socketData, this.socketData.midiOutDevices);
      setTimeout(()=> {
        this.socket.send("INIT");
      },100);
    },
    sendMidiOutIndex(index) {
      this.socket.send(JSON.stringify({"midiOutIndex": index}));
    }
  }
}
</script>
<style>
  h1 {
    text-align:center;
  }
</style>
