import { getPosts, getDadJoke, getUsers,usePostCollection} from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./NavBar.js"
import { Footer } from "./Footer.js"
/**
* Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display
let postElement = document.querySelector(".postList");
let navElement = document.querySelector("nav");
let entryElement = document.querySelector(".entryForm")

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
// const startGiffyGram = () => {
//     getUsers()
//     .then(data=>{
//         console.log("User Date", data)
//     })
// 	postElement.innerHTML = "Hello Cohort 47"
// }
// Are you defining the function here or invoking it?

const showPostList = () => {
    const postElement = document.querySelector(".postList");
      getPosts().then((allPosts) => {
          postElement.innerHTML = PostList(allPosts);
      })
  }
  
  const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () =>{
    const footerElement = document.querySelector(".footerSection");
    footerElement.innerHTML =
    Footer(); 
}
  
  const startGiffyGram = () => {
      showPostList();
        showNavBar();
        showFooter();
  }
  
  getDadJoke().then(jokeResponse => {
      console.log(jokeResponse);
    })
    
    getUsers()
    .then(data => {
        console.log("User Data", data)
    })
    startGiffyGram();
//--------------------- EVENT LISTENERS-------------------------------
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})
applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      showFilteredPosts(yearAsNumber);
    }
  })
  const showFilteredPosts= (year) => {
      //get a copy of the post collection
  const epoch = Date.parse(`01/01/${year}`);
  //filter the data
  const filteredData = usePostCollection().filter(singlePost => {
    if (singlePost.timestamp >= epoch) {
      return singlePost
    }
  })
  const postElement = document.querySelector(".postList");
  postElement.innerHTML = PostList(filteredData);
}
  

  applicationElement.addEventListener('click', event => { 
      if (event.target.id ==="directMessageIcon"){
          alert(`Slide into those DMs!`)
      }
  })
  applicationElement.addEventListener('click', event => { 
    if (event.target.id ==="homePage"){
        alert(`Going Home!`)
    }
})
applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})