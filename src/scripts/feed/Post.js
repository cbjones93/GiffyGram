// ------------------------timestamp-----------------///
import { getLoggedInUser,getLikes } from "../data/DataManager.js"

const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}

export const Post = (postObject) => {
  let postTimestamp = postObject.timestamp;
  const date = new Date(postTimestamp);
  if(postObject.user.id === getLoggedInUser().id) {
  return `
    <section class="post">
      <header>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <img class="post__image" src="${postObject.imageURL}" />
      <div> User: ${postObject.user.name}
      <div> Date: ${date} </div>
      <div> <p>${postObject.description}</p></div>
      <div><button id="edit--${postObject.id}">Edit</button></div>
      <button id="delete__${postObject.id}">Delete</button>
      <button id="like__${postObject.id}">Like</button>
      <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
    </section>
  `
  } else {
    return  `<section class="post">
    <header>
        <h2 class="post__title">${postObject.title}</h2>
    </header>
    <img class="post__image" src="${postObject.imageURL}" />
    <div> User: ${postObject.user.name}
    <div> Date: ${date} </div>
    <div> <p>${postObject.description}</p></div>
    <button id="like__${postObject.id}">Like</button>
    <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
    </section>`
  }
}


