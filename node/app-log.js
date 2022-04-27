const log = require('./logger')
const http = require('http')


const server = http.createServer((req,res)=>{
    log('Server Crated successfully')
})

server.listen(8000)