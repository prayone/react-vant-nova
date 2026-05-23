const fs = require('fs')
const path = require('path')

const parserDir = path.resolve(__dirname, '../node_modules/@rcdoc/parser/dist')

const files = ['index.mjs', 'index.js']

files.forEach(file => {
  const filePath = path.join(parserDir, file)

  if (!fs.existsSync(filePath)) {
    return
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const patched = source.replace(
    /children: filterValidChildren\(node\.children\),\n\s+value: node\.value/g,
    'type: "root",\n          children: filterValidChildren(node.children)'
  )

  if (patched !== source) {
    fs.writeFileSync(filePath, patched)
  }
})
