// import './App.css'
import { PostComponent } from "./post";

function App(){

  const post = [{
    name: "100x devs",
    subtitle: "23,000 followers",
    time: "12m",
    image: "https://imgs.search.brave.com/ejFC42IMOZGFQeZ3QIcoXxMqow_oT-L61P7mhwwkeJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AuYWth/bWFpLm5ldC5pbi9z/dWJqZWN0LzIwMjMt/MDEtMTctMC4xNzA0/NDM2MDEyMDk1MTE4/NS5qcGc",
    description: "Get rich coding!!!"
  }];

  const postComponents = post.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  )


  function addPost(){
    
  }

  return (
      <div style={{background: "#dfe6e9", height: "100vh"}}>
        <button onClick={addPost()}>Post something...</button>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <div> 
                {postComponents} 
            </div> <br />
          </div>
        </div> 
      </div>   
      
  )
} 

// function profileCard(){
//   return <div>

//   </div>
// }

export default App