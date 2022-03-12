<template>
  <div class="card border-info mb-3">
    <div class="card-header">
      MIDI Out Messages
    </div>
    <div class="card-body">
      <div class="card-text" >
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Channel</th>
            <th scope="col">Command</th>
            <th scope="col">Param 1</th>
            <th scope="col">Param 2</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="log in logs">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'log-midi-out',
  props: {
    logIn: Array
  },
  mounted() {
    window.emitter.on("midiOut", (a)=>{
       console.log("midiOut",a);
     });
  },
  data() {
    return {
      logs: []
    }
  }

}
</script>
<style>

</style>