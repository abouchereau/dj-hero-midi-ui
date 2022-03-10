<template>
  <div>
    <h5>Panel</h5>
    <dj-hero-viewer :key="refKey"></dj-hero-viewer>
  </div>
</template>

<script>
export default {
  name: 'panel',
  components: {
    'dj-hero-viewer': Vue.defineAsyncComponent( ()=>loadModule('./components/block/DjHeroViewer.vue', Utils.loadModuleOptions()))
  },
  data() {
    return {
      refKey: 0
    }
  },
  mounted() {
    window.emitter.on('socketLoaded',()=> {
      this.refKey++;
    });
  }
}
</script>