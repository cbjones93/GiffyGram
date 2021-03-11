let postCollection = [];

export const usePostCollection = () => {
    let postCollectionCopy = [...postCollection]
    return postCollectionCopy;
}

export const getPosts = () =>{

    return fetch ("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        postCollection = parsedResponse
        return parsedResponse;
    })
}


export const getUsers = () => {

    return fetch("http://localhost:8088/users")
    .then(response => response.json())
}


const loggedInUser= {
    id:1,
    name:"bryan",
    email:"bryan@home",
}

export const getLoggedInUser=()=>{
    return {...loggedInUser};
}
export const getDadJoke = () =>{
    return fetch ("https://icanhazdadjoke.com",{
        method:"GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    }
    export const createPost = postObj => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
            .then(response => response.json())
      }