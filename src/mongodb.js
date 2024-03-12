
const mongoose=require("mongoose")

async function connectToMongo() {
    try {
      await mongoose.connect("mongodb://localhost:27017/Loginnnn");
      console.log("MongoDB connected");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }
  
connectToMongo();


const LogInSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection",LogInSchema)

module.exports=collection
