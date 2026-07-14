import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const templatePath = path.join(distDir, 'index.html')

const template = fs.readFileSync(templatePath, 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const appHtml = render()
const html = template.replace('<!--app-html-->', appHtml)

fs.writeFileSync(templatePath, html)
fs.rmSync(path.join(distDir, 'server'), { recursive: true, force: true })

console.log('✓ Prerendered dist/index.html')
