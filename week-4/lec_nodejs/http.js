const express = require("express");

const app = express();
const port = 3000;

const users=[{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    let numberOfUnhealthyKidneys = 0;
    for (let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1; 
        }
        numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    }
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
})
app.use(express.json());
app.post("/", function (req, res) {
    // add a new unhealthy kidney
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
})
})

app.put("/", function (req, res) {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//remove unhealthy kidneys
// give 411 error if there are no unhealthy kidneys
function checkForUnhealthyKidneys(){
    let unhealthyKidneys = false;
    for(let i=0; i< users[0].kidneys.length; i++){
        if(!users[0].kidneys.healthy){
            unhealthyKidneys = true;
        }
    }
    return unhealthyKidneys;
}
app.delete("/", function (req, res) {
    if(checkForUnhealthyKidneys()){
        const newKidneys = [];
        for(let i = 0; i< users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done."});
    }else{
        res.status(411).json({
            msg: "you have no unhealthy kidneys."
        })
    }
})


app.listen(port, function(err) {
    if(err){
        console.log(err);
    }
    console.log("Server listening on port: ", port);
});