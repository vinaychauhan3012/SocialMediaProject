const {Users} = require('../db/models')
const {genRandomUsername} = require('../utils/username')

async function getUserById(id){
    return await Users.findOne({ where: {id} })
}
async function getUserByUsername(username){
    return await Users.findOne({ where: {username} })
}

async function createAnonUser(){

    const user= await Users.create({
        username: genRandomUsername()
    })
    console.log(createAnonUser())
    return user
}



module.exports={
    createAnonUser,
    getUserById,
    getUserByUsername
}