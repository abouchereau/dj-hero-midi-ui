<template>
  <div>

    <div class="card border-info mb-3">
      <div class="card-header" :key="refreshKey">
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

                  <ul class="pagination" id="knob">
                    <li id="knob1" class="page-item"><a class="page-link" href="#">1</a></li>
                    <li id="knob2" class="page-item"><a class="page-link" href="#">2</a></li>
                    <li id="knob3" class="page-item"><a class="page-link" href="#">3</a></li>
                    <li id="knob4" class="page-item"><a class="page-link" href="#">4</a></li>
                  </ul>

                </div>

                <div class="col-4 text-center offset-sm-2">
                  <input type="range" class="form-range" id="fader" min="0" max="1023">
                </div>
              </div>
            </div>

            <div class="col-4 text-center p-1">

              <div >
                <img src="/icones/tony-b.svg" id="disc"/>
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
  data() {
    return {
      refreshKey: 0,
      degree: 0,
      disc: null
    }
  },
  mounted() {
    this.disc = document.getElementById('disc');
    console.log("CREATED");
    window.emitter.on('socketLoaded',()=> {
      this.refreshKey++;
    });
    window.emitter.on('djheroChange',(a)=>{
      console.log("ON",a)
      if (a[0]=="FADER") {
        document.getElementById('fader').value = a[1];
      }
      if (a[0]=="KNOB") {
        document.querySelectorAll('#knob li').forEach((a)=>a.classList.remove('active'));
        document.querySelector('#knob'+a[1]).classList.add('active');
      }
      if (a[0]=="DISC") {
        this.degree = Math.round(this.degree+(a[1]*0.75));
        this.disc.style.transform = 'rotate(' + this.degree  + 'deg)';
      }
    });
  }
}
</script>
<style>
#disc {
  transition:  transform 0.1s;
}
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