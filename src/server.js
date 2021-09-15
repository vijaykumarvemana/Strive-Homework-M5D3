import express from 'express'
import cors from 'cors'
import blogPostRoute from './blogPosts/index.js'


const server = express()
server.use(cors())
server.use(express.json())

const PORT = 3001
server.use("/blogPosts",blogPostRoute)

server.listen(PORT, () => {
    console.log(`server running on this port: ${PORT}`)
})
server.on("error",(error)=>{
    console.log(`Server is crushed due to :  ${error.message}`)
})