// import './App.css'

function App(){
  return (
      <div>
        <PostComponent /> 
      </div>   
      
  )
} 

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex"}

function PostComponent(){
  return (
  <div> 
    <div style={style}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
          height: 20,
          width: 20,
          borderRadius: 20
      }} />
      <div style={{fontSize: 10}}>
        <b>100x devs</b>
        <div>23,000 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div style={{fontSize: 12  }}>Want to know how to win big!!!</div>
  </div>
  )
}


export default App