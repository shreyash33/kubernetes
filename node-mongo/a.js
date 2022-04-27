const { set } = require("express/lib/application")

function a(){
    new Promise(resolve,reject){
        setTimeout((err)=>{
            console.log("Anything")
        },5000)
        if (err){
            reject("Not Done")
        }
        resolve("done")
    }
    new Promise(resplve,reject){
        setInterval((err)=>{
            console.log("SetInterval")
        })
        if(err){
            reject(err)
        }
        resolve("Done")
    }
}

a().then(console.log("done set timeout")).then("done set interval").catch("Not done")



function a1(){
    setTimeout(err, callback){
        setInterval((err,call){

        })
    },500)
}