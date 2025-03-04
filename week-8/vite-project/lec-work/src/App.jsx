// import './App.css'
import { PostComponent } from "./post";

function App(){
  return (
      <div style={{background: "#dfe6e9", height: "100vh"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <div>
              <PostComponent 
                name={"100x devs"}
                subtitle={"23,000 followers"}
                time={"12m"}
                image={"https://imgs.search.brave.com/ejFC42IMOZGFQeZ3QIcoXxMqow_oT-L61P7mhwwkeJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AuYWth/bWFpLm5ldC5pbi9z/dWJqZWN0LzIwMjMt/MDEtMTctMC4xNzA0/NDM2MDEyMDk1MTE4/NS5qcGc"}
                description={"Get rich coding!!!"}
              />  
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