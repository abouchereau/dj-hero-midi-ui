<template>
  <div>
    <h5>Panel</h5>
    <dj-hero-viewer></dj-hero-viewer>
    <midi-out-devices></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    socketData: Object
  },
  components: {
    'dj-hero-viewer': Vue.defineAsyncComponent( ()=>loadModule('./components/DjHeroViewer.vue', Utils.loadModuleOptions())),
    'midi-out-devices': Vue.defineAsyncComponent( ()=>loadModule('./components/MidiOutDevices.vue', Utils.loadModuleOptions()))
  },
}
</script>