<template>
  <div>
    <h1>{{ appName }}</h1>
    <midi-out-devices :list="socketData.midiOutDevices" v-on:midiOutIndex="sendMidiOutIndex"></midi-out-devices>
    <dj-hero-viewer></dj-hero-viewer>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    'midi-out-devices': Vue.defineAsyncComponent(() => loadModule('./components/MidiOutDevices.vue', Utils.loadModuleOptions())),
    'dj-hero-viewer': Vue.defineAsyncComponent(() => loadModule('./components/DjHeroViewer.vue', Utils.loadModuleOptions()))
  },
  data() {
    return {
      appName: Const.APP_NAME,
      socketData: {
        'midiOutDevices': null
      }
    }
  },
  mounted() {
    this.initSocket();
  },
  methods: {
    initSocket() {
      this.socket = new WebSocket("ws://localhost:" + Const.SOCKET_PORT);
      this.socket.onmessage = (msg) => {
        let data = JSON.parse(msg.data);
        for (let key in data) {
          this.socketData[key] = data[key];
        }
      };
      setTimeout(()=> {
        this.socket.send("INIT");
      },500);
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
