<template>
  <div>
    <h5>Settings</h5>
   <midi-out-devices :app="app"></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'settings',
  props: {
    app: Object
  }
 /* methods: {
    sendMidiOutIndex(index) {
      this.$emit("sendSocket",{"midiOutIndex": index});
    }
  }*/

}
</script>