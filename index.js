

// import json-server
const jsonServer=require('json-server')

//create json-server app
const server=jsonServer.create()

//setup router for data.json
const router=jsonServer.router("data.json")

//return a middleware used by json server
const middleware=jsonServer.defaults()

//setup port number for server
const port=process.env.PORT || 3000

//use router and middleware in server app
server.use(middleware)
server.use(router)


//to listen server app in port

server.listen(port,()=>{
    console.log(`hostel management server started at port ${port}`);
})