

<script  setup >
// variable
const msg = 'Hello!'


import  ecad from "http://localhost:8099/ecad-viewer.js"

const urls = [
  "http://localhost:8099/video/video.kicad_sch",
  "http://localhost:8099/video/bus_pci.kicad_sch",
  "http://localhost:8099/video/esvideo.kicad_sch",
  "http://localhost:8099/video/graphic.kicad_sch",
  "http://localhost:8099/video/modul.kicad_sch",
  "http://localhost:8099/video/muxdata.kicad_sch",
  "http://localhost:8099/video/pal-ntsc.kicad_sch",
  "http://localhost:8099/video/rams.kicad_sch"
]


function log() {
  console.log(msg)
  alert("Button clicked!");
  console.log(typeof ecad.find_root_sch_by_urls)
  ecad.find_root_sch_by_urls(urls).then((e) => { alert(`the root sch is ${e}`) })

}


</script>

<template>
  <div class="flex-container">
    <button id="myButton" @click="log">find root sch</button>
  </div>

</template>

<style>

ecad-viewer ,
ecad-viewer-embedded {
  width: 100%;
  height: 800px;
}
                        .flex-container {
                          display: flex;
                          margin-top : 60px;
                          margin-left: 10%;
                          margin-right: 10%;
                                                    flex-direction: column;
                        }

                        .col-flex-container {
                          display: flex;
                          flex-direction: column;
                        }

                        .canvas-container {
                          margin: 10px;
                          padding: 1px;
                        }
</style>
