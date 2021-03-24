// ------------------------timestamp-----------------///
import { getLoggedInUser } from "../data/DataManager.js"

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
    </section>`
  }
}


