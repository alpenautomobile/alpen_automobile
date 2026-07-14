const Client = require('ssh2-sftp-client')
const path = require('path')
const fs = require('fs')

const sftp = new Client()

const host = process.env.SFTP_HOST
const port = process.env.SFTP_PORT || 22
const username = process.env.SFTP_USER
const password = process.env.SFTP_PASS
const remotePath = process.env.SFTP_REMOTE_PATH || '/www'
const localFile = path.join(__dirname, '..', 'hostpoint.zip')

if (!host || !username || !password) {
  console.error('Missing SFTP credentials. Set SFTP_HOST, SFTP_USER, SFTP_PASS environment variables.')
  process.exit(1)
}

async function main(){
  try{
    await sftp.connect({ host, port, username, password })
    console.log('Connected. Uploading', localFile, 'to', `${host}:${remotePath}`)
    await sftp.put(localFile, path.posix.join(remotePath, 'hostpoint.zip'))
    console.log('Upload complete.')
    await sftp.end()
  }catch(e){
    console.error('Upload failed:', e.message || e)
    process.exit(1)
  }
}

main()
