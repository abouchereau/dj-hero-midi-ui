<template>
  <div>
    <div class="row">

      <div class="col">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Channel</span>
          </div>
          <select class="custom-select" v-model="curChannel">
            <option value="" :selected="curChannel == ''">Default</option>
            <option v-for="i in 16" :selected="curChannel == i">{{ i }}</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Channel</span>
          </div>
          <select class="custom-select" v-model="curChannel">
            <option value="" :selected="curChannel == ''">Default</option>
            <option v-for="i in 16" :selected="curChannel == i">{{ i }}</option>
          </select>
        </div>
      </div>

    </div>


    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Channel</span>
      </div>
      <select class="custom-select" v-model="curChannel">
        <option value="" :selected="curChannel == ''">Default</option>
        <option v-for="i in 16" :selected="curChannel == i">{{ i }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
    name: 'mapping-form',
    data() {
      return {curChannel: ""}
    }
}
</script>
<style>
.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: .375rem 1.75rem .375rem .75rem;
  line-height: 1.5;
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
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}
</style>