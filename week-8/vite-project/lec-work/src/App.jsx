// import './App.css'

function App(){
  return (
      <div style={{background: "#dfe6e9", height: "100vh"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <div>
              <PostComponent 
                image={"https://imgs.search.brave.com/ejFC42IMOZGFQeZ3QIcoXxMqow_oT-L61P7mhwwkeJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AuYWth/bWFpLm5ldC5pbi9z/dWJqZWN0LzIwMjMt/MDEtMTctMC4xNzA0/NDM2MDEyMDk1MTE4/NS5qcGc"}
                name={"100x devs"}
                subtitles={"23,000 followers"}
                time={"12m"}
              />  
            </div> <br />
            <div>
              <PostComponent
                image={"https://imgs.search.brave.com/ejFC42IMOZGFQeZ3QIcoXxMqow_oT-L61P7mhwwkeJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AuYWth/bWFpLm5ldC5pbi9z/dWJqZWN0LzIwMjMt/MDEtMTctMC4xNzA0/NDM2MDEyMDk1MTE4/NS5qcGc"}
                name={"Only 10x losers here"}
                subtitles={"1,000 followers"}
                time={"11m"}
              />  
            </div> <br />
            <div>
              <PostComponent
                image={"https://imgs.search.brave.com/ejFC42IMOZGFQeZ3QIcoXxMqow_oT-L61P7mhwwkeJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcHB4/LXdzYi1nY3AuYWth/bWFpLm5ldC5pbi9z/dWJqZWN0LzIwMjMt/MDEtMTctMC4xNzA0/NDM2MDEyMDk1MTE4/NS5qcGc"}
                name={"Resume making cohort"}
                subtitles={"Promoted"}
                time={""} 
              />  
            </div> <br />
          </div>
        </div> 
      </div>   
      
  )
} 

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

function PostComponent({image, name, subtitles, time}){
  return (
  <div style={style}> 
    <div style={{display: "flex", }}>
      <img src={image} style={{
          height: 30,
          width: 30,
          borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10,}}>
        <b>
          {name}
        </b>
        <div>
          {subtitles}
        </div>
        {time ? <div style={{display: "flex"}}>
          <div>
            {time}
          </div>
          <img style={{height: 10, width: 15}} src={"https://imgs.search.brave.com/3uYiSzoKJNiEe-AQhex44AWZJpV1gbccLs70MB7Wa2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MzA2MzY0L3Bob3Rv/L3RocmVlLW9jbG9j/ay5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WW9tZF9ESXM1/b0gtcTRhd25YNjJi/WVA5RlBEMzNNNFBR/bDVyOXQtQ1k5Yz0"} />
        </div> : null}
      </div>
    </div>
    <div style={{fontSize: 12  }}>Want to know how to win big!!! Discover how these kids earned $5000 in this hackathon</div>
  </div>
  )
}


// function profileCard(){
//   return <div>

//   </div>
// }

export default App