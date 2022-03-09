<template>
  <div>
    <h5>Settings</h5>
   <midi-out-devices :key="key"></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data() {
    return {
      key:0
    }
  },

  mounted() {
   /* setInterval(()=> {
      this.key++;
    },200);*/

  },
  watch: {
    $main: {
      handler(newQuestion) {
        console.log("WAOUH");
      },
      // force eager callback execution
      deep: true
    }
    }
  }
 /* methods: {
    sendMidiOutIndex(index) {
      this.$emit("sendSocket",{"midiOutIndex": index});
    }
  }*/

}
</script>