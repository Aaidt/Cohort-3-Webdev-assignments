import { useState, useEffect } from "react";


export function usePostTitle(){
    const [post, setPost] = useState({});

    async function getPosts(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
      const json = await response.json();
      setPost(json);
    }
  
    useEffect(() => {
      getPosts();
    }, [])

    return post.title;
}