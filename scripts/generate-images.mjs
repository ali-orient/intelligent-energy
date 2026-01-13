import fs from 'fs'
import path from 'path'

const root = 'c:\\My Web Sites\\intelligentenergy\\public'
const outFile = 'c:\\My Web Sites\\intelligentenergy\\src\\data\\images.json'
const exts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'])

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true })
  let files = []
  for (const it of items) {
    const p = path.join(dir, it.name)
    if (it.isDirectory()) {
      files = files.concat(walk(p))
    } else {
      const ext = path.extname(it.name).toLowerCase()
      if (exts.has(ext)) {
        const rel = '/' + path.relative(root, p).replace(/\\\\/g, '/').replace(/\\/g, '/')
        files.push(rel)
      }
    }
  }
  return files
}

const list = walk(root)
fs.writeFileSync(outFile, JSON.stringify(list, null, 2), 'utf8')
