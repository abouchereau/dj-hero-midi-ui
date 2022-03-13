<template>
  <div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <dj-hero-viewer></dj-hero-viewer>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <log-midi-out></log-midi-out>
      </div>
    </div>
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
