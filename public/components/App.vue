<template>
  <div>
    <h1>{{ appName }}</h1>
    <midi-out-devices :list="socketData.midiOutDevices"></midi-out-devices>
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
        for (let key in data) {
          this.socketData[key] = data;
        }
      };
    }
  }
}
</script>
<style>
  h1 {
    text-align:center;
  }
</style>
