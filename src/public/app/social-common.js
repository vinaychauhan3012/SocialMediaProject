//const { JSON } = require("sequelize/types")

$(()=>{
    $('#navbar').load('/components/navbar.html',loginIfNeeded)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/all-posts.html')

})

function loginIfNeeded(){
    let currentUser = window.localStorage.user? JSON.parse(window.localStorage.user) : null
    if(!currentUser){
        $.post('/api/users',{},(user)=>{
            if(user){
                console.log('logged in as ',user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('.nav-username').text(currentUser.username)
            }
        })
    }else{
        console.log("resuming as ",currentUser.username)
        $('.nav-username').text(currentUser.username)

    }
}