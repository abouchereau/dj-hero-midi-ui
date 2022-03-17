<template>
  <div class="card border-info mb-3">
    <div class="card-header">
      Mapping
    </div>
    <div class="card-body">
      <div class="card-text">
        <table class="table">
          <tr>
            <td rowspan="2" class="align-middle">START</td><td>Press</td><td class="align-middle"><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">SELECT</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">HOME + KNOB 1</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">HOME + KNOB 2</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">HOME + KNOB 3</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">HOME + KNOB 4</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">CROSS</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">TRIANGLE</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">SQUARE</td><td>Press</td><td><mapping-form></mapping-form></td>
          </tr>
          <tr>
            <td>Release</td><td>...</td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">CIRCLE</td><td>Press</td><td>...</td>
          </tr>
          <tr>
            <td>Release</td><td>...</td>
          </tr>
          <tr>
            <td class="align-middle">FADER</td><td colspan="2">...</td>
          </tr>
          <tr>
            <td class="align-middle">DISC ONLY</td><td colspan="2">...</td>
          </tr>
          <tr>
            <td class="align-middle">DISC + BLUE</td><td colspan="2">...</td>
          </tr>
          <tr>
            <td class="align-middle">DISC + GREEN</td><td colspan="2">...</td>
          </tr>
          <tr>
            <td class="align-middle">DISC + RED</td><td colspan="2">...</td>
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

  },
  data() {
    return {

    }
  },
  methods: {

  }


}
</script>
<style>

</style>