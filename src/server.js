/*
Materlise css
bulma css
semantic /fomantic css
*/
const express = require('express')
const app = express()

const{db}=require('./db/models')
const {usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/', express.static(__dirname + '/public'))


db.sync()   
    .then(()=>{
        app.listen(3550,()=>{
            console.log('Server Started at Port 3550')
        })
    })
    .catch((err)=>{
        console.error(new Error("Could not start Database"))
        console.error(err)
    })


