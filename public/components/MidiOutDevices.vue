<template>
  <div>
    <h2>Midi Out Devices</h2>

    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">Device Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list">
        <td>{{ item }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'midi-out-devices',
  props: {
    list: Object
  },
  data() {
    return {
      socket: null,
    }
  },

}
</script>