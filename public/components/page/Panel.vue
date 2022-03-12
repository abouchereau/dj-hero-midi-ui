<template>
  <div>
    <h5>Panel</h5>
    <dj-hero-viewer></dj-hero-viewer>
    <log-midi-out></log-midi-out>
  </div>
</template>

<script>
export default {
  name: 'panel',
  components: {
    'dj-hero-viewer': Vue.defineAsyncComponent( ()=>loadModule('./components/block/DjHeroViewer.vue', Utils.loadModuleOptions())),
    'log-midi-out': Vue.defineAsyncComponent( ()=>loadModule('./components/block/LogMidiOut.vue', Utils.loadModuleOptions())),
  }
}
</script>