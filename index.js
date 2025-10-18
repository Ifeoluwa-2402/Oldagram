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
            <img class="post-img" id="${posts[i].id}" src="${posts[i].post}" alt="Post Image">
            <div class="icons">
                <i class="bi bi-heart" data-like-icon='${posts[i].id}'></i>
                <i class="bi bi-chat" data-comment='${posts[i].id}'></i>
                <i class="bi bi-send" data-send='${posts[i].id}'></i>
            </div>
            <p class="likes">${posts[i].likes} likes</p>
            <p class="comment"><span id="my-likes">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    `  
    container.innerHTML += post
}

document.addEventListener('click', function(e) {
    if (e.target.dataset.likeIcon) {
        handleLikeClick(e.target.dataset.likeIcon)
    }
    // if (e.target.dataset.comment) {
    //     handleLikeClick(e.target.dataset.comment);
    // }
    // if (e.target.dataset.send) {
    //     handleLikeClick(e.target.dataset.send);
    // }
})

function handleLikeClick(tweetId) {
    posts.forEach(function(post) {
        //  post.likes++
         console.log(post.likes++)
    })
}