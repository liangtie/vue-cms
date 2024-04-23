import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
/**
 * 引入less后缀的样式文件，方便后续更改主题颜色
 * 如果你要引入使用less文件的话，按照antd-vue的文档
 * 你需要使用 modifyVars 的方式来进行覆盖变量（官方文档中提供了webpack,vue-cli2,vue-cli3的示例代码）
 * vite中类似，主要就是提供一些颜色的变量值
 * 具体看vite.config.ts中的写法
 * -----------
 * Vite 为 Sass 和 Less 改进了 @import 解析，以保证 Vite 别名也能被使用。
 * 另外，url() 中的相对路径引用的，与根文件不同目录中的 Sass/Less 文件会自动变基以保证正确性。
 */
import('ant-design-vue/dist/antd.less')
import('http://localhost:8010/ecad-viewer.js')
import { html } from 'http://localhost:8010/ecad-viewer.js'

const app = createApp(App)
app.use(Antd)
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

          const blob_map = {}
          ;(results as [{ name: string; content: string }]).forEach(
            ({ name, content }) => {
              if (name.endsWith('.kicad_pcb') || name.endsWith('.kicad_sch'))
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
            }
          )

          view_container.appendChild(ecad_view)
          view_container.appendChild(bom_view)
        })
        .catch((error) => {
          console.error('Error reading files:', error)
        })
    }
    readFiles()
  })
