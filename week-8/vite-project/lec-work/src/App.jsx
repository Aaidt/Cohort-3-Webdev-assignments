// import './App.css'
import { useState, useEffect } from "react";
import { PostComponent } from "./post";

function App(){
  // const [post, setPost] = useState([]);

  // const postComponents = post.map(post => <PostComponent
  //   name={post.name}
  //   subtitle={post.subtitle}
  //   time={post.time}
  //   image={post.image}
  //   description={post.description}
  //   /> 
  // )

  // function addPost(){
  //   setPost([...post, {
  //     name: "100x devs",
  //     subtitle: "23,000 followers",
  //     time: "12m",
  //     image: "https://imgs.search.brave.com/ejFC42IMOZGFQeZ3QIcoXxMqow_oT-L61P7mhwwkeJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AuYWth/bWFpLm5ldC5pbi9z/dWJqZWN0LzIwMjMt/MDEtMTctMC4xNzA0/NDM2MDEyMDk1MTE4/NS5qcGc",
  //     description: "Get rich coding!!!"
  //   }]);    
  // }

  // return (
  //     <div style={{background: "#dfe6e9", height: "100vh"}}>
  //       <button onClick={addPost}>Post something...</button>
  //       <div style={{display: "flex", justifyContent: "center"}}>
  //         <div>
  //           <div> 
  //               {postComponents} 
  //           </div> <br />
  //         </div>
  //       </div> 
  //     </div>   
      
  // )

  const [count, setCount] = useState (0);


  useEffect(function (){
    console.log("This will run only on mount");
    setInterval(increaseCount, 1000); 
  }, []); 

  useEffect(function (){
    console.log("This will run on mount and also every time the count changes as it is the dependency.");
    console.log("The count has been updated to: " + count);
  }, [count]); //

  function increaseCount(){
    setCount(count => count + 1);
  }


  return <div>
    {count}
  </div>


} 

// function profileCard(){
//   return <div>

//   </div>
// }

export default App