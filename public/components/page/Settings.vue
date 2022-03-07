<template>
  <div>
    <h5>Settings</h5>
   <midi-out-devices :app="app" :key="app.key"></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'settings',
  props: {
    app: Object
  },
  data() {
    return {
      key: 0
    }
  },
  mounted() {
    /*setInterval(()=> {
      /this.key++;
    },200);*/

  }
 /* methods: {
    sendMidiOutIndex(index) {
      this.$emit("sendSocket",{"midiOutIndex": index});
    }
  }*/

}
</script>