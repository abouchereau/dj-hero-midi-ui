<template>
  <div class="p-0">
    <div class="row">


      <div class="col py-1">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Ch.</span>
          </div>
          <select class="custom-select text-small" v-model="curChannel">
            <option value="" :selected="curChannel == ''">Default</option>
            <option v-for="i in 16" :selected="curChannel == i" :value="i">{{ i }}</option>
          </select>
        </div>
      </div>


      <div class="col py-1">

        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Type</span>
          </div>
          <select class="custom-select text-small" v-model="curCmd">
            <option v-for="(val, index) in cmdList" :selected="index == curCmd" :value="index+8">{{ val }}</option>
          </select>
        </div>

      </div>

      <div class="col py-1">

        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Param 1</span>
          </div>
          <select v-if="(curCmd==8 || curCmd==9) && curChannel!=10" class="custom-select text-small" v-model="param1">
            <option v-for="(val, index) in noteList" :selected="index == param1" :value="index">{{ val }}</option>
          </select>
          <select v-else-if="(curCmd==8 || curCmd==9) && curChannel==10" class="custom-select text-small" v-model="param1">
            <option v-for="(val, index) in drumList" :selected="index == param1" :value="index">{{ val }}</option>
          </select>
          <select v-else-if="curCmd==11" class="custom-select text-small" v-model="param1">
            <option v-for="(val, index) in ccList" :selected="index == param1" :value="index">{{ val }}</option>
          </select>
          <select v-else-if="curCmd==12" class="custom-select text-small" v-model="param1">
            <option v-for="(val, index) in insList" :selected="index == param1" :value="index">{{ val }}</option>
          </select>
          <select v-else class="custom-select text-small" v-model="param1">
            <option v-for="val in 128" :selected="val == param1" :value="val">{{ val }}</option>
          </select>

        </div>

      </div>

      <div class="col py-1">

        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Param 2</span>
          </div>
          <input type="number" min="1" max="128" v-model="param2" class="custom-select">
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'mapping-form',
    data() {
      return {
        curChannel: "",
        curCmd: 8,
        cmdList: [],
        ccList: [],
        insList: [],
        drumList: [],
        noteList: [],
        param1: null,
        param2: null
      }
    },
   mounted() {
      this.midiMsg = new MidiMsg();
      this.cmdList = this.midiMsg.cmds.slice(8);
      for (let i = 0;i<128;i++) {
        this.noteList[i] = i+". "+this.midiMsg.midiNote(i);
      }
     for (let i = 0;i<128;i++) {
       this.ccList[i] = i+ (this.midiMsg.ccs[i] ==""?"":". " + this.midiMsg.ccs[i]);
     }
     for (let i = 0;i<128;i++) {
       this.insList[i] = i+ (this.midiMsg.ins[i] ==""?"":". " + this.midiMsg.ins[i]);
     }
     for (let i = 35;i<82;i++) {
       this.drumList[i] = i+ (this.midiMsg.drums[i] ==""?"":". " + this.midiMsg.drums[i]);
     }
   }

}
</script>
<style scoped>
.text-small {
  font-size:70%;
}
.custom-select {
  display: inline-block;
  width: 100%;
  height: 1.8rem;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;
  background-size: auto;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;


  position: relative;
  top:1px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}
</style>