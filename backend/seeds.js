
require("dotenv").config();
var mongoose = require("mongoose");


if (!process.env.MONGODB_URI) {
    console.warn("Missing MONGODB_URI in env, please add it to your .env file");
  }
mongoose.connect(process.env.MONGODB_URI);
require("./models/User");
require("./models/Item");
require("./models/Comment");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");


const seedItems = new Array(100).fill({title: ""});
const seedComments = new Array(100).fill({});
const seedUsers = new Array(100).fill().map((_, i) => {return {username: `idan${i}`, email: `idan${i}@walla.com`}});

const seedDB = async () => {
    await Item.deleteMany({})
    await Item.insertMany(seedItems)
    await Comment.deleteMany({})
    await Comment.insertMany(seedComments)
    await User.deleteMany({})
    await User.insertMany(seedUsers)
}

seedDB().then(()=> mongoose.connection.close())
