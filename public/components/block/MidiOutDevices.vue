<template>
  <div>

    <div class="card border-primary mb-3" style="max-width: 30rem;">
      <div class="card-header">Select MIDI Output</div>
      <div class="card-body">
        <div class="card-text">
          <div class="bs-component" v-if="app.data.midiDevicesList!=null">
            <ul class="list-group">
              <li v-for="(item, index) in app.data.midiDevicesList" @click="app.setMidiOutIndex(index)" :class="{ 'active': index==app.midiOutIndex, 'list-group-item' : true, 'list-group-item-action':true}" >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="alert alert-dismissible alert-warning" v-if="app.data.midiDevicesList!=null && app.data.midiDevicesList.length==0">
            <p class="mb-0">No Midi Devices Connected</p>
          </div>
          <div class="alert" v-if="app.data.midiDevicesList==null">
            <p class="text-center"><i class="icon-spinner icon-2x icon-spin"></i><br />Scanning MIDI outputs</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'midi-out-devices',
  props: {
    app: Array
  },
  watch: {//TODO remettre la logique app.js
    list(newList, oldList) {
      if(newList.length-1 < this.app.midiOutIndex) {
          this.app.midiOutIndex = 0;
      }
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
  .list-group-item {
    cursor:pointer;
  }
</style>