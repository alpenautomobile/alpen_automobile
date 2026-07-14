const sharp = require('sharp')
const glob = require('glob')
const fs = require('fs')
const path = require('path')

const inputGlob = path.join(__dirname, '..', 'public', '*.{jpg,png,JPG,PNG,jpeg}')
const outDir = path.join(__dirname, '..', 'public', 'optimized')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

console.log('Optimizing images...')

const sizes = [1920, 1200, 800, 400]

glob(inputGlob, {}, (err, files) => {
  if (err) throw err
  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase()
    const name = path.basename(file, ext)
    sizes.forEach((w) => {
      const outFile = path.join(outDir, `${name}-${w}.jpg`)
      sharp(file)
        .resize({ width: w })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(outFile)
        .then(() => console.log('Written', outFile))
        .catch((e) => console.error('Error', e))
    })
  })
})
