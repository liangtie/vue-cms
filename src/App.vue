
<template>
  <div class="flex-container" id="viewer-container">
    <input type="file" id="fileInput" name="fileInput" multiple>
  </div>

</template>

<style>

ecad-standalone-bom,
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
