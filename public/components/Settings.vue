<template>
  <div>
    <h5>Settings</h5>
   <!-- <midi-out-devices :list="socketData.midiOutDevices" v-on:midiOutIndex="sendMidiOutIndex"></midi-out-devices>-->
    <midi-out-devices></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'settings',
  props: {
    socketData: Object
  },
  components: {
    'midi-out-devices ': Vue.defineAsyncComponent( ()=>loadModule('./components/MidiOutDevices.vue', Utils.loadModuleOptions()))
  }
}
</script>