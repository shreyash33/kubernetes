const fs = require('fs')

function log(msg){
    fs.appendFile('log.txt',msg,(err)=>{
        if(err)
            console.log(err)
    })
}

module.exports = log