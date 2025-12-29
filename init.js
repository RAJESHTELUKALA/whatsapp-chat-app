const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
 .then(() =>{
    console.log("connection successful");
 })
. catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let allChats =[
  {
    from :"neha",
    to:"deepak",
    msg:"send me your exam", 
    created_at :new Date()
},
{
   from :"asahe",
    to:"priya",
    msg:"send me your exam", 
    created_at :new Date()
},
{
  from :"ramesh",
    to:"sandee",
    msg:"send me your exam", 
    created_at :new Date()
},
];
 Chat.insertMany(allChats);