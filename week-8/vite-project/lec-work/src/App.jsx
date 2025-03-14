// import './App.css'
import { useState, useEffect } from "react";
import { PostComponent } from "./post";

// function App(){
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

  // const [count, setCount] = useState (0);


  // useEffect(function (){
  //   console.log("This will run only on mount");
  //   setInterval(increaseCount, 1000); 
  // }, []); 

  // useEffect(function (){
  //   console.log("This will run on mount and also every time the count changes as it is the dependency.");
  //   console.log("The count has been updated to: " + count);
  // }, [count]); //

  // function increaseCount(){
  //   setCount(count => count + 1);
  // }


  // return <div>
  //   {count}
  // </div>


//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function (){
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       })

//       // return () =>{
//       //   // cleanup func
//       // }
//   }, [currentTab])

//   return (
//     <div>
//       <button onClick={() => setCurrentTab(1)} style={{margin: 5, color: currentTab == 1 ? "red":"black"}}>Feed</button>
//       <button onClick={() => setCurrentTab(2)} style={{margin: 5, color: currentTab == 2 ? "red":"black"}}>Jobs</button>
//       <button onClick={() => setCurrentTab(3)} style={{margin: 5, color: currentTab == 3 ? "red":"black"}}>Notifications</button><br />


//       {loading ? "Loading..." : tabData.title}
//     </div>

//   )

// } 

// function profileCard(){
//   return <div>

//   </div>
// }

  // const Card = ({ children }) => {
  //   return (
  //   <div style={{
  //     borderRadius: 10,
  //     padding: 20,
  //     margin: 10,
  //     backgroundColor: "black",
  //     color: "white"
  //   }}>
  //     {children}
  //   </div>
  //   )  
  // }


  // const App = () => {
  //   return <div>
  //     <Card>
  //       <h1>This is the first modal.</h1>
  //       <p>HEy</p>
  //     </Card>
  //     <Card>
  //       <h1>This is the second modal.</h1>
  //       <p>HEy</p>
  //     </Card>
  //   </div>
  // }


  const App = () => {
    // const todos = [{
    //   title: "Go to the gym.",
    //   done: true
    // }, {
    //   title: "Go for a swim",
    //   done: false
    // }]
    // const todoComponents = todos.map(todo => <Todo 
    //   title= {todo.title} done= {todo.done} />)

    return <div>
      {[
        <Todo key={1} title={"Go to the gym"} done={true} />,
        <Todo key={2} title={"Eat food"} done={false} />  
      ]}
    </div>
  }

  function Todo({title, done}){
    return <div>
      {title}:
      {done ? "done" : "Not done yet"}
    </div>
  }


export default App