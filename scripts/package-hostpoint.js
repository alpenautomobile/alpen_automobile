const archiver = require('archiver')
const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '..', 'dist')
const outFile = path.join(__dirname, '..', 'hostpoint.zip')

function build() {
  return new Promise((res, rej) => {
    console.log('Running build...')
    const p = exec('npm run build', { cwd: path.join(__dirname, '..') }, (err, stdout, stderr) => {
      if (err) return rej(err)
      console.log(stdout)
      res()
    })
  })
}

function zip() {
  return new Promise((res, rej) => {
    const output = fs.createWriteStream(outFile)
    const archive = archiver('zip', { zlib: { level: 9 } })
    output.on('close', () => {
      console.log('Zipped', archive.pointer(), 'total bytes')
      res()
    })
    archive.on('error', (err) => rej(err))
    archive.pipe(output)
    archive.directory(distDir, false)
    archive.finalize()
  })
}

async function main(){
  try{
    await build()
    await zip()
    console.log('hostpoint.zip created at project root. Upload this to Hostpoint webspace.')
  }catch(e){
    console.error(e)
    process.exit(1)
  }
}

main()
