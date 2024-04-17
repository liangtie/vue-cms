
<script src="http://localhost:8099/ecad-viewer.js"></script>

<template>
  <div class="flex-container">
    <ecad-viewer>
      <ecad-source src="http://localhost:8099/video/video.kicad_pcb"></ecad-source>
      <ecad-source src="http://localhost:8099/video/bus_pci.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/esvideo.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/graphic.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/modul.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/muxdata.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/pal-ntsc.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/rams.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8099/video/video.kicad_sch"></ecad-source>
      <ecad-3d-source src="http://localhost:8099/video/video.glb.meshopt.glb"></ecad-3d-source>
    </ecad-viewer>
  </div>

</template>

<style>

ecad-viewer {
  width: 100%;
  height: 800px;
}
                        .flex-container {
                          display: flex;
                          margin-top : 60px;
                          margin-left: 10%;
                          margin-right: 10%;
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
