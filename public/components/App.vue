<template>
  <div>
    <router-view class="mt-2" :socketData="socketData" @sendSocket="sendSocket"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
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
    setTimeout(() => {
      console.log("hey");
      this.$emitter.emit("yop");
    }, 2000);
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
    sendSocket(obj) {
      this.socket.send(JSON.stringify(obj));
    },
    sendMidiOutIndex(index) {
      this.socket.send(JSON.stringify({"midiOutIndex": index}));
    }
  }
}
</script>
<style>
  @font-face {
    font-family: "Audiowide";
    font-display: swap;/*attends que la font soit chargée */
    src: url(/fonts/Audiowide-Regular.eot) format('eot');
    src: url(/fonts/Audiowide-Regular.eot?) format('eot'),
    url(/fonts/Audiowide-Regular.woff2) format('woff2'),
    url(/fonts/Audiowide-Regular.woff) format('woff'),
    url(/fonts/Audiowide-Regular.ttf) format('ttf');
  }
  h1, h2, h3, h4, h5, h6, .card-header {
    font-family: Audiowide !important;
  }
  h2 {
    text-align: center;
  }
</style>
