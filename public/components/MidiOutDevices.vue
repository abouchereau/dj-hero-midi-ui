<template>
  <div>
    <h5>Midi Out Device</h5>
    <div class="bs-component" v-if="list!=null">
      <ul class="nav nav-pills flex-column">
        <li v-for="(item, index) in list" class="nav-item">
          <a :class="{ 'active': index==midiOutIndex, 'nav-link': true}" href="#" @click="setMidiOutIndex(index)">{{ item }}</a>
        </li>
      </ul>
    </div>

    <div class="alert alert-dismissible alert-warning" v-if="list!=null && list.length==0">
      <p class="mb-0">No Midi Devices Connected</p>
    </div>

    <div class="alert" v-if="list==null">
      <p class="mb-0"><i class="icon-spinner icon-2x icon-spin"></i> Scanning MIDI outputs</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'midi-out-devices',
  props: {
    list: Array
  },
  data() {
    return {
      midiOutIndex: 0
    }
  },
  methods: {
    setMidiOutIndex(index) {
      this.midiOutIndex = index;
      this.$emit('midiOutIndex', index);
    }
  }

}
</script>
<style>

</style>