import { posts } from './data.js'
for (let i = 0; i < posts.length; i++) {
    const container = document.getElementById('container')
    const post = `
        <div class="main-container">
            <div class="container-1">
                <img src="${posts[i].avatar}" class="post-avatar">
                <div class="container-2">
                    <h1 class="name">${posts[i].name}</h1>
                    <p class="location">${posts[i].location}</p>   
                </div>
            </div>
            <img class="post-img" src="${posts[i].post}" alt="Post Image">
            <div class="icons">
                <i class="bi bi-heart"></i>
                <i class="bi bi-chat"></i>
                <i class="bi bi-send"></i>
            </div>
            <p class="likes">${posts[i].likes} likes</p>
            <p class="comment"><span id="my-likes">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    `  
    container.innerHTML += post
}
let usrLike = document.getElementsByClassName('bi bi-heart')
const myLikes = document.getElementById('my-likes')


// usrLike = addEventListener('click', function() {
//     let increment = ""
//     increment.textContent = usrLike++
// })