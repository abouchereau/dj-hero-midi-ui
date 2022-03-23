<template>
  <div class="p-0">
    <div class="row">


      <div class="col py-1">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Ch.</span>
          </div>
          <select class="custom-select text-small" v-model="obj.channel">
            <option value="">Default</option>
            <option v-for="i in 16" :value="i">{{ i }}</option>
          </select>
        </div>
      </div>


      <div class="col py-1">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Type</span>
          </div>
          <select class="custom-select text-small" v-model="obj.message">
            <option v-for="(val, index) in cmdList" :selected="index == obj.message" :value="index+8">{{ val }}</option>
          </select>
        </div>
      </div>


      <div class="col py-1">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Param 1</span>
          </div>
          <select v-if="(obj.message==8 || obj.message==9) && obj.channel!=10" class="custom-select text-small" v-model="obj.param1">
            <option v-for="(val, index) in noteList" :selected="index == obj.param1" :value="index">{{ val }}</option>
          </select>
          <select v-else-if="(obj.message==8 || obj.message==9) && obj.channel==10" class="custom-select text-small" v-model="obj.param1">
            <option v-for="(val, index) in drumList" :selected="index == obj.param1" :value="index" v-if="val!=''">{{ val }}</option>
          </select>
          <select v-else-if="obj.message==11" class="custom-select text-small" v-model="obj.param1">
            <option v-for="(val, index) in ccList" :selected="index == obj.param1" :value="index">{{ val }}</option>
          </select>
          <select v-else-if="obj.message==12" class="custom-select text-small" v-model="obj.param1">
            <option v-for="(val, index) in insList" :selected="index == obj.param1" :value="index">{{ val }}</option>
          </select>
          <select v-else class="custom-select text-small" v-model="obj.param1">
            <option v-for="val in 128" :selected="val == obj.param1" :value="val">{{ val }}</option>
          </select>
        </div>
      </div>


      <div class="col py-1" v-if="obj.param2min == null">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Param 2</span>
          </div>
          <input type="number" min="1" max="128" v-model="obj.param2" class="custom-select text-small">
        </div>
      </div>


      <div class="col py-1" v-if="obj.param2min != null">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Min</span>
          </div>
          <input type="number" min="1" max="128" v-model="obj.param2min" class="custom-select text-small">
        </div>
      </div>


      <div class="col py-1" v-if="obj.param2max != null">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text text-small">Max</span>
          </div>
          <input type="number" min="1" max="128" v-model="obj.param2max" class="custom-select text-small">
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
    name: 'mapping-form',
    props: {
      obj: Object
    },
    data() {
      return {
        cmdList: [],
        ccList: [],
        insList: [],
        drumList: [],
        noteList: [],
      }
    },
   created() {
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
     for (let i = 0;i<128;i++) {//-35
       this.drumList[i] = i+". "+ (i<35 || this.midiMsg.drums[i-35] == null?"----":this.midiMsg.drums[i-35]);
     }
     if (this.obj['channel'] == null) {
       this.obj.channel = "";
     }
   },
  watch: {
      obj(newObj, oldObj) {
        if (this.obj['channel'] == null) {
          this.obj.channel = "";
        }
      }
  }

}
</script>
<style scoped>
.text-small {
  font-size:75%;
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