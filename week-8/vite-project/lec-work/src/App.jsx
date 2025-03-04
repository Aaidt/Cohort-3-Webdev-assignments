// import './App.css'

function App(){
  return (
      <div style={{background: "#dfe6e9", height: "100vh"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <div>
              <PostComponent />  
            </div> <br />
            <div>
              <PostComponent />  
            </div> <br />
            <div>
              <PostComponent />  
            </div> <br />
          </div>
        </div> 
      </div>   
      
  )
} 

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

function PostComponent(){
  return (
  <div style={style}> 
    <div style={{display: "flex", }}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
          height: 30,
          width: 30,
          borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10,}}>
        <b>100x devs</b>
        <div>23,000 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div style={{fontSize: 12  }}>Want to know how to win big!!! Discover how these kids earned $5000 in this hackathon</div>
  </div>
  )
}


export default App