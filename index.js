// Import express
const express = require("express");

// Create express app
const app = express();

// Define port
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

const users=[
    {
        "id": "1",
        "firstName": "Anshika",
        "lastName": "Agarwal",
        "hobby": "Teaching"
    }
]

//listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

//Middleware to parse into json
app.use(express.json())


//Middleware- log the details of each request
app.use((req,res,next)=>{
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);

  // Listen when response finishes
  res.on("finish", () => {
    console.log(`Status Code: ${res.statusCode}`);
  })
  next()
})


//Checks required fields for POST & PUT
function validateUser(req,res,next){
    const {firstName,lastName,hobby}=req.body;
    if(!firstName || !lastName || !hobby){
        return res.status(400).json({message:"firstName,lastName and hobby are required"})
    }
    next()
}

//Fetch the list of all users
app.get("/users",(req,res)=>{
    res.send(users)
})


//Fetch details of a specific user by ID
app.get("/users/:id",(req,res)=>{
    const userId=req.params.id
    const user=users.find((book)=>book.id==userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    res.send(user)
})


//Add a new user
app.post("/user",validateUser,(req,res)=>{
    
    const newUser={
        ...req.body
    }
    users.push(newUser)
    res.send(users)
})


//Update details of an existing user
app.put("/user/:id",validateUser,(req,res)=>{
    const userId=req.params.id;
    const user=users.find((user)=>userId==user.id)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const keys=Object.keys(req.body)
    keys.forEach((key)=>{
        user[key]=req.body[key]
    })
    res.send(users)
})


//Delete a user by ID
app.delete("/user/:id",(req,res)=>{
    const userId=req.params.id
    const user=users.find(user=>user.id==userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const filteredUsers=users.filter(user=>userId!=user.id)
    res.send(filteredUsers)
})

//Error level middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
  });
});
