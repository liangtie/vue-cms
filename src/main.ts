import { createApp } from 'vue'
import App from './App.vue'

// Simply import it if no need to use the funcs shipped with it
// import('http://localhost:8010/ecad-viewer.js')
import {
  html,
  find_root_sch_from_content,
  is_sch,
  is_pcb
} from 'http://localhost:8010/ecad-viewer.js'

const app = createApp(App)
app.mount('#app')

const btn = document.getElementById('fileInput')
if (btn)
  btn.addEventListener('change', (e) => {
    const readFiles = () => {
      const readFile = (file: any) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()

          reader.onload = function (e) {
            const content = e.target!.result
            resolve({
              name: file.name,
              content: content
            })
          }

          reader.onerror = function (error) {
            reject(error)
          }

          reader.readAsText(file)
        })
      }
      const files = (e.target! as any).files
      // Create an array of promises for each file reading operation
      const promises = Array.from(files).map((file) => readFile(file))

      // Use Promise.all to wait for all promises to resolve
      Promise.all(promises)
        .then((results) => {
          const view_container = document.getElementById('viewer-container')

          const ecad_view = html`<ecad-viewer-embedded> </ecad-viewer-embedded>`
          const bom_view = html`<ecad-standalone-bom> </ecad-standalone-bom>`

          const sch_content_map = {}
          ;(results as [{ name: string; content: string }]).forEach(
            ({ name, content }) => {
              if (is_sch(name) || is_pcb(name)) {
                ecad_view.appendChild(
                  html`<ecad-blob
                    filename="${name}"
                    content="${content}"
                  ></ecad-blob>`
                )
                bom_view.appendChild(
                  html`<ecad-blob
                    filename="${name}"
                    content="${content}"
                  ></ecad-blob>`
                )

                if (is_sch(name)) {
                  sch_content_map[name] = content
                }
              }
            }
          )
          // Find the root sch
          const root_sch = find_root_sch_from_content(sch_content_map)
          console.log(`The root sch is ${root_sch}`)
          view_container.appendChild(ecad_view)
          view_container.appendChild(bom_view)
        })
        .catch((error) => {
          console.error('Error reading files:', error)
        })
    }
    readFiles()
  })
