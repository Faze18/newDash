var mongoose = require( "mongoose" );
var Schema = mongoose.Schema;

var notes = new Schema( {
    title: { type: String, default: "0" },
    body: { type: String, default: "0" }
} );

var MonthNotes = new Schema( {
    day: { type: String, default: "11" },
    dayNote: { type: String, default: "11" }
} );

var Calendar = new Schema( {
    monthYear: { type: String, default: "111" },
    data: [MonthNotes]
} );

var toDoList = new Schema( {
    toDoItem: { type: String, default: "0" }
} );

var Blog = new Schema({
    blogTitle: { type: String, default: "11" },
    blogText: { type: String, default: "11" }
})

var userSchema = new Schema( {
    logedIn: Boolean,
    aboutMe: String,
    user: { type: String, default: "0" },
    email: { type: String, default: "0" },
    picture: { type: String, default: "picture" },
    toDo: [toDoList],
    notes: [notes],
    blogs:[Blog],
    links:[{
        name:{ type: String, default: "11" },
        link:{ type: String, default: "11" },
    }],
    date: { type: Date, default: Date.now },
    calendarData: [Calendar],
    // calendarData: [{
    //     monthYear:  {type:String, default:"0"},
    //     data: [{
    //         day:  {type:String, default:"0"},
    //         note:  {type:String, default:"0"}
    //     }]
    // }],
    // array:[{toDoItem: String, toDoList: String}]
    metaData: {
        votes: { type: Number, default: 1 },
        favs: { type: Number, default: 1 },
    }
} );
const User = mongoose.model( "User", userSchema );
module.exports = User;