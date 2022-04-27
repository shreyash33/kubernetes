const http = require('http')

const server = http.createServer((request,response)=>{
    if(request.url === '/'){
        response.write("<h1>Welcome to home page</h1>")
        response.end()
    }
    else if(request.url === '/about'){
        response.write(
            `<h1>Welcome to about page</h1>
            <p><a href="/">Home</a></p>`
            )
    }
    else{
        response.write(
            `<h1>Page does not exist here</h1>
            <p><a href="/">Home</a></p>`
        )
        response.end()
    }
})

server.listen(3000)