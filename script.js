const username = document.querySelector("#search");
const btn = document.querySelector("#btn");

const userName = document.querySelector("#name");
const bio = document.querySelector("#bio");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    getContent(username.value);
})

/*function getUser(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(resp => resp.json())
    .then(resp => console.log(resp.login))
}*/

async function getContent(username){
    try{
        const resp = await fetch(`https://api.github.com/users/${username}`)
        const response = await resp.json()
        console.log(response)
        sendData(response);
    }catch(e){
        console.log(`error: `+e)
    }
}

function sendData(user){
    if(user.login != undefined){
    userName.innerHTML = user.login;
    bio.innerHTML = user.bio;
    repos.innerHTML = user.public_repos;   
    followers.innerHTML = user.followers;
    following.innerHTML = user.following;
         
    }else{
        console.log("undefined")
    }
}
