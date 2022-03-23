<template>
  <div class="card border-info mb-3">
    <div class="card-header">
      Mapping <span class="badge bg-primary">{{ mappingKey }}</span>
    </div>
    <div class="card-body">
      <div class="card-text">

        <table class="table" :key="refreshKey">
          <tbody>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-left"><i class="icon-arrow-left"></i></button>
            </td><td colspan="3">Default Channel -1</td>
          </tr>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-right"><i class="icon-arrow-right"></i></button>
            </td><td colspan="3">Default Channel +1</td>
          </tr>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-down"><i class="icon-arrow-down"></i></button></td>
            <td colspan="3">Current Mapping -1</td>
          </tr>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-up"><i class="icon-arrow-up"></i></button>
            </td><td colspan="3">Current Mapping +1</td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-sm" ref="btn-left">START</button>
            </td><td>Press</td><td class="align-middle"><mapping-form v-for="obj in mapping['START_PRESS']" :obj="obj"></mapping-form></td>
            <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('START_PRESS')"><i class="icon-plus"></i></button></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form v-for="obj in mapping['START_RELEASE']" :obj="obj"></mapping-form></td>
            <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('START_RELEASE')"><i class="icon-plus"></i></button></td>
          </tr>
          <tr>
              <td rowspan="2" class="align-middle">
                <button class="btn btn-outline-info btn-sm">SELECT</button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['SELECT_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('SELECT_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['SELECT_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('SELECT_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle nobr">
                <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">1</button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['HOME1_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME1_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['HOME1_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME1_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle nobr">
                <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">2</button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['HOME2_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME2_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['HOME2_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME2_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle nobr">
                <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">3</button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['HOME3_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME3_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['HOME3_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME3_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle nobr">
                <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">4</button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['HOME4_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME4_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['HOME4_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('HOME4_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle">
                <button class="btn btn-outline-info btn-ps"><img src="/icones/cross.svg" /></button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['CROSS_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('CROSS_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['CROSS_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('CROSS_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle">
                <button class="btn btn-outline-info btn-ps"><img src="/icones/triangle.svg" /></button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['TRIANGLE_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('TRIANGLE_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['TRIANGLE_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('TRIANGLE_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle">
                <button class="btn btn-outline-info btn-ps"><img src="/icones/square.svg" /></button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['SQUARE_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('SQUARE_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['SQUARE_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('SQUARE_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td rowspan="2" class="align-middle">
                <button class="btn btn-outline-info btn-ps"><img src="/icones/circle.svg" /></button>
              </td><td>Press</td><td><mapping-form v-for="obj in mapping['CIRCLE_PRESS']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('CIRCLE_PRESS')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td>Release</td><td><mapping-form v-for="obj in mapping['CIRCLE_RELEASE']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('CIRCLE_RELEASE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td class="align-middle" style="padding:15px 0;"><input type="range" class="form-range" style="max-width:100px;"></td>
              <td colspan="2"><mapping-form v-for="obj in mapping['FADER']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('FADER')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td class="align-middle nobr"><img src="/icones/tony-b.svg" style="max-width:60px;"/></td>
              <td colspan="2"><mapping-form v-for="obj in mapping['DISC_ONLY']" :obj="obj"><></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('DISC_ONLY')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td class="align-middle nobr"><img src="/icones/tony-b.svg" style="max-width:60px;"/><div class="disc-btn disc-btn-blue"></div></td>
              <td colspan="2"><mapping-form v-for="obj in mapping['DISC_BLUE']" :obj="obj"><></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('DISC_BLUE')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td class="align-middle nobr"><img src="/icones/tony-b.svg" style="max-width:60px;"/><div class="disc-btn disc-btn-green"></div></td>
              <td colspan="2"><mapping-form v-for="obj in mapping['DISC_GREEN']" :obj="obj"><></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('DISC_GREEN')"><i class="icon-plus"></i></button></td>
            </tr>
            <tr>
              <td class="align-middle nobr"><img src="/icones/tony-b.svg" style="max-width:60px;"/><div class="disc-btn disc-btn-red"></div></td>
              <td colspan="2"><mapping-form v-for="obj in mapping['DISC_RED']" :obj="obj"></mapping-form></td>
              <td class="align-bottom"><button class="btn btn-primary btn-sm" @click="addMapping('DISC_RED')"><i class="icon-plus"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapping',
  components: {
    'mapping-form': Vue.defineAsyncComponent(() => loadModule('./components/block/MappingForm.vue', Utils.loadModuleOptions()))
  },
  mounted() {
    window.emitter.on('mappingKey',(a)=>{
      this.mappingKey = this.$main.mappingKey;
      if (this.$main.mappings[this.mappingKey] != null) {
        this.mapping = this.$main.mappings[this.mappingKey];
      }
    });
    window.emitter.on('mappings',(a)=>{
      this.mappingKey = this.$main.mappingKey;
      if (this.$main.mappings[this.mappingKey] != null) {
        this.mapping = this.$main.mappings[this.mappingKey];
      }
    });
  },
  data() {
    return {
      mappingKey: 0,
      mapping: {},
      refreshKey:0
    }
  },
  methods: {
    addMapping(key) {
      let emptyObj = {"channel":"","message":"","param1":"","param2": ""};
      if (key.indexOf("DISC")===0 || key == "FADER") {
        delete emptyObj["param2"];
        emptyObj["param2min"] = "";
        emptyObj["param2max"] = "";
      }
      this.$main.mappings[this.$main.mappingKey][key].push(emptyObj);
      this.refreshKey++;
    }
  }

}
</script>
<style>
.disc-btn {
  display:inline-block;
  background-color: #000 !important;
  width:30px;
  height:40px;
  border-radius: 18px;
  border: 3px solid #FFF;
}
.disc-btn-red {
  border-color: red;
}
.disc-btn-green {
   border-color: green;
 }
.disc-btn-blue {
    border-color: blue;
}
.nobr {
  white-space: nowrap;
}

</style>