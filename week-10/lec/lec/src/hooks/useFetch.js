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

export function useFetch (url, retryTime){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getData() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url])

    useEffect(() => {
        setInterval(getData, retryTime*1000)
    }, [])

    return {
        finalData,
        loading
    }
}