
<script src="http://localhost:8010/ecad-viewer.js"></script>

<template>
  <div class="flex-container">
    <ecad-viewer-embedded url="http://localhost:8010/video/video.kicad_pcb">
    </ecad-viewer-embedded>
    <ecad-viewer-embedded url="http://localhost:8010/video/video.glb.meshopt.glb">
    </ecad-viewer-embedded>
    <ecad-viewer-embedded url="http://localhost:8010/video/video.kicad_sch;
      http://localhost:8010/video/bus_pci.kicad_sch;
      http://localhost:8010/video/esvideo.kicad_sch;
      http://localhost:8010/video/graphic.kicad_sch;
      http://localhost:8010/video/modul.kicad_sch;
      http://localhost:8010/video/muxdata.kicad_sch;
      http://localhost:8010/video/pal-ntsc.kicad_sch;
      http://localhost:8010/video/rams.kicad_sch">
    </ecad-viewer-embedded>
    <ecad-viewer-embedded is_bom="true" url="http://localhost:8010/video/video.kicad_sch;
      http://localhost:8010/video/bus_pci.kicad_sch;
      http://localhost:8010/video/esvideo.kicad_sch;
      http://localhost:8010/video/graphic.kicad_sch;
      http://localhost:8010/video/modul.kicad_sch;
      http://localhost:8010/video/muxdata.kicad_sch;
      http://localhost:8010/video/pal-ntsc.kicad_sch;
      http://localhost:8010/video/rams.kicad_sch">
    </ecad-viewer-embedded>
      <ecad-viewer>
      <ecad-source src="http://localhost:8010/video/video.kicad_pcb"></ecad-source>
      <ecad-source src="http://localhost:8010/video/bus_pci.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/esvideo.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/graphic.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/modul.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/muxdata.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/pal-ntsc.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/rams.kicad_sch"></ecad-source>
      <ecad-source src="http://localhost:8010/video/video.kicad_sch"></ecad-source>
      <ecad-3d-source src="http://localhost:8010/video/video.glb.meshopt.glb"></ecad-3d-source>
    </ecad-viewer>
  </div>

</template>

<style>

ecad-viewer ,
ecad-viewer-embedded {
  width: 100%;
  height: 800px;
  border : 1px solid cyan;
  margin : 5px;
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
