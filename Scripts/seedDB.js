const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/homePage"
);

const userSeed = [
  {
    user: "Nathan F",
    email:"n@f.com",
    toDo:[{toDoItem:"eat"},{toDoItem:"sleep"}],
    notes:[{title: "todo", body: "todobody"},{title: "todo2", body: "todobody2"}],
    date: new Date(Date.now()),
    calendarData:[{ monthYear: "1999",
      Note: [{day:"32-12-1999", dayNote:"this is a daynote"},{day:"32-122-1999", dayNote:"this is a daynote2"}],
    },{monthYear:"2000",
    Note:[{day:"2-2-2222", dayNote:"this is note for 2222"}, {day:"11-11-1111", dayNote:"this is 1111"}]}],
 
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
