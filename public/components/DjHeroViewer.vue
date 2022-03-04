<template>
  <div>

    <div class="card border-primary mb-3" style="max-width: 30rem;">
      <div class="card-header">DJ Hero</div>
      <div class="card-body">
        <div class="card-text" >
          <div class="row">

            <div class="col">
              <div class="relative" id="joypad-content">
                <button class="btn btn-outline-success" disabled id="btn-up" ref="btn-up"><i class="icon-arrow-up"></i></button>
                <button class="btn btn-outline-success" disabled id="btn-down" ref="btn-down"><i class="icon-arrow-down"></i></button>
                <button class="btn btn-outline-success" disabled id="btn-left" ref="btn-left"><i class="icon-arrow-left"></i></button>
                <button class="btn btn-success" id="btn-right" ref="btn-right"><i class="icon-arrow-right"></i></button>
              </div>
            </div>

            <div class="col">
              <div class="relative">
                <button class="btn btn-outline-success" disabled id="btn-home" ref="btn-up"><i class="icon-home"></i></button>
                <button class="btn btn-outline-success btn-sm" disabled id="btn-select" ref="btn-down">SELECT</button>
                <button class="btn btn-outline-success btn-sm" disabled id="btn-start" ref="btn-left">START</button>
              </div>
            </div>

            "TRIANGLE","CROSS","SQUARE","CIRCLE",

            <div class="col">
              <div class="relative">
                <button class="btn btn-outline-success btn-ps" disabled id="btn-triangle" ref="btn-triangle"><img src="/icones/triangle.svg" /></button>
               <!-- <button class="btn btn-outline-success" disabled id="btn-cross" ref="btn-cross"><i class="icon-arrow-down"></i></button>
                <button class="btn btn-outline-success" disabled id="btn-square" ref="btn-square"><i class="icon-arrow-left"></i></button>
                <button class="btn btn-success" id="btn-circle" ref="btn-circle"><i class="icon-arrow-right"></i></button>-->
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col">
              KNOB
            </div>
          </div>

          <div class="row">
            <div class="col">
              FADER
            </div>
          </div>

          <div class="row">
            <div class="col">
              DISC
            </div>
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
  #joypad-content {
    height:130px;
  }
  #btn-up {top:10px;left:45px;}
  #btn-down {top:80px;left:45px;}
  #btn-left {top:45px;left:10px;}
  #btn-right {top:45px;left:80px;}
  #btn-home {top:10px;left:60px;}
  #btn-select {top:80px;left:10px;}
  #btn-start {top:80px;left:100px;}
  .btn-ps {
    padding:7px !important;
  }
  .btn {
    border-radius:100px !important;
  }
  .btn-ps img {
    width:25px;
    position:relative;
    bottom:3px;
  }
</style>