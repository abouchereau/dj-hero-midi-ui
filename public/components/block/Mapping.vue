<template>
  <div class="card border-info mb-3">
    <div class="card-header">
      Mapping <span class="badge bg-primary">{{ mappingKey }}</span>
    </div>
    <div class="card-body">
      <div class="card-text">

        <table class="table">
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-left"><i class="icon-arrow-left"></i></button>
            </td><td colspan="2">Default Channel -1</td>
          </tr>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-right"><i class="icon-arrow-right"></i></button>
            </td><td colspan="2">Default Channel +1</td>
          </tr>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-down"><i class="icon-arrow-down"></i></button></td><td colspan="2">Current Mapping -1</td>
          </tr>
          <tr>
            <td class="align-middle">
              <button class="btn btn-outline-info" ref="btn-up"><i class="icon-arrow-up"></i></button>
            </td><td colspan="2">Current Mapping +1</td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-sm" ref="btn-left">START</button>
            </td><td>Press</td><td class="align-middle"><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-sm">SELECT</button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">1</button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">2</button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">3</button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-lg"><i class="icon-home"></i></button> + <button class="btn btn-outline-info btn-sm">4</button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-ps"><img src="/icones/cross.svg" /></button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-ps"><img src="/icones/triangle.svg" /></button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-ps"><img src="/icones/square.svg" /></button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td>...</td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">
              <button class="btn btn-outline-info btn-ps"><img src="/icones/circle.svg" /></button>
            </td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td class="align-middle" style="padding:15px 0;"><input type="range" class="form-range" style="max-width:100px;"></td><td colspan="2"><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="/icones/tony-b.svg" style="max-width:70px;"/></td><td colspan="2"><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="/icones/tony-b.svg" style="max-width:70px;"/> + BLUE</td><td colspan="2"><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="/icones/tony-b.svg" style="max-width:70px;"/> + GREEN</td><td colspan="2"><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="/icones/tony-b.svg" style="max-width:70px;"/> + RED</td><td colspan="2"><mapping-form></mapping-form></td>
          </tr>
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
    });
  },
  data() {
    return {
      mappingKey: 0
    }
  },


}
</script>
<style>
.table > :not(caption) > * > * {
  padding: 0.375rem 0.75rem;
}
</style>