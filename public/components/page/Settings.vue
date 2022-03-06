<template>
  <div>
    <h5>Settings</h5>
   <midi-out-devices :list="socketData['midiOutDevices']" @midiOutIndex="sendMidiOutIndex"></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'settings',
  props: {
    socketData: Object
  },
  methods: {
    sendMidiOutIndex(index) {
      this.$emit("sendSocket",{"midiOutIndex": index});
    }
  }

}
</script>