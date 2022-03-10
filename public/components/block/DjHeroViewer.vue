<template>
  <div>

    <div class="card border-info mb-3">
      <div class="card-header">
        <i class="icon icon-off text-dark" v-if="!$main.djheroConnected"></i>
        <i class="icon icon-off text-success" v-if="$main.djheroConnected"></i>
        DJ Hero
      </div>
      <div class="card-body">
        <div class="card-text" >

          <div class="row">
            <div class="col-8">

              <div class="row">

                <div class="col text-center">
                  <div class="joy-container">
                    <button class="btn btn-outline-info" disabled id="btn-up" ref="btn-up"><i class="icon-arrow-up"></i></button>
                    <button class="btn btn-outline-info" disabled id="btn-down" ref="btn-down"><i class="icon-arrow-down"></i></button>
                    <button class="btn btn-outline-info" disabled id="btn-left" ref="btn-left"><i class="icon-arrow-left"></i></button>
                    <button class="btn btn-info" id="btn-right" ref="btn-right"><i class="icon-arrow-right"></i></button>
                  </div>
                </div>

                <div class="col text-center">
                  <div class="joy-container">
                    <button class="btn btn-outline-info btn-lg" disabled id="btn-home" ref="btn-up"><i class="icon-home"></i></button>
                    <button class="btn btn-outline-info btn-sm" disabled id="btn-select" ref="btn-down">SELECT</button>
                    <button class="btn btn-outline-info btn-sm" disabled id="btn-start" ref="btn-left">START</button>
                  </div>
                </div>


                <div class="col text-center">
                  <div class="joy-container">
                    <button class="btn btn-outline-info btn-ps" disabled id="btn-triangle" ref="btn-triangle"><img src="/icones/triangle.svg" style="bottom:3px"/></button>
                    <button class="btn btn-outline-info btn-ps" disabled id="btn-cross" ref="btn-cross"><img src="/icones/cross.svg" /></button>
                    <button class="btn btn-outline-info btn-ps" disabled id="btn-square" ref="btn-square"><img src="/icones/square.svg" /></button>
                    <button class="btn btn-info btn-ps" id="btn-circle" ref="btn-circle"><img src="/icones/circle.svg" /></button>
                  </div>
                </div>
              </div>
              <div class="row mt-3">

                <div class="col-4 text-center">

                  <div class="btn-group me-2" role="group">
                    <button type="button" class="btn btn-info">1</button>
                    <button type="button" class="btn btn-info" disabled>2</button>
                    <button type="button" class="btn btn-info" disabled>3</button>
                    <button type="button" class="btn btn-info" disabled>4</button>
                  </div>
                </div>

                <div class="col-8 text-center">
                  <input type="range" class="form-range" id="fader">
                </div>
              </div>
            </div>

            <div class="col-4 text-center p-1">

              <div id="disc">
                <img src="/icones/tony-b.svg" />
              </div>
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

}
</script>
<style>
.joy-container {
  position: relative;
  width:130px;
  height:130px;
  display: inline-block;
}
.joy-container .btn{
  position: absolute;
}

#btn-up, #btn-triangle {top:10px;left:45px;}
#btn-down, #btn-cross  {top:83px;left:45px;}
#btn-left, #btn-square {top:47px;left:6px;}
#btn-right, #btn-circle {top:47px;left:85px;}
#btn-home {top:10px;left:42px;border-radius:100px;}
#btn-select {top:80px;left:10px;font-size:65%;}
#btn-start {top:80px;left:75px;font-size:65%;}
.btn-ps {
  padding:7px !important;
  border-radius:100px !important;
}
.btn {
}
.btn-ps img {
  width:25px;
  position:relative;
}
input[type=range]::-webkit-slider-thumb, input[type=range]::-moz-range-thumb {
  width: 2em;
  height: 2em;              /* s'adapte à la hauteur de l'input */
}
#fader {
  max-width:400px;
}
#disc {
  display:inline-block;
  width:180px;
  height:180px;
  border-radius:100%;
  border:3px solid var(--bs-primary);
}
</style>