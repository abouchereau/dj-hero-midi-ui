<template>
  <div>
    by Anthony BOUCHEREAU
    <midi-out-devices></midi-out-devices>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {
    'midi-out-devices ': Vue.defineAsyncComponent( ()=>loadModule('./components/MidiOutDevices.vue', Utils.loadModuleOptions()))
  }
}
</script>