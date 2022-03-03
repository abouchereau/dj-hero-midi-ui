<template>
  <div>

    <div class="card border-primary mb-3" style="max-width: 30rem;">
      <div class="card-header">DJ Hero</div>
      <div class="card-body">
        <div class="card-text">
          <div class="relative">
            <button class="btn btn-outline-success" disabled id="btn-up" ref="btn-up"><i class="icon-arrow-up"></i></button>
            <button class="btn btn-outline-success" disabled id="btn-down" ref="btn-down"><i class="icon-arrow-down"></i></button>
            <button class="btn btn-outline-success" disabled id="btn-left" ref="btn-left"><i class="icon-arrow-left"></i></button>
            <button class="btn btn-success" id="btn-right" ref="btn-right"><i class="icon-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'dj-hero-viewer',
  props: {
  },
  data() {
    return {
    }
  },
  watch: {

  },
  methods: {

  }

}
</script>
<style>
  .relative {
     position: relative;
   }
  .relative .btn{
    position: absolute;
  }
  .btn {
    border-radius:100px !important;
  }
</style>