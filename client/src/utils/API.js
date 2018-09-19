import axios from "axios";

export default {
  // Gets articles from the NYT API
  getUsers: function(params) {
    return axios.get("/users/users");
  },
  getUserData:function(id){
    console.log("**************************ID")
    console.log(id)
    return axios.get("/users/data/"+ id);
  },
  createUser: function(newUser){
    console.log("createUser"+newUser.name);
    return axios.post("/users/users", newUser);
  },
  checkForUser: function(id) {
    console.log("13 api :"+ id.name);
    return axios.post("/users/users/" + id);
  },
  updateCalendar: function(data){
    console.dir(data);
    return axios.patch("users/users", { monthYear: "09-2005", Note: { day: 2, dayNote: "hello" } })
  },
  updateChildSchema: function(data){
    // console.dir(data);
    return axios.patch("users/users", data)
  }
//   },
//   // Gets all saved articles
//   getSavedArticles: function() {
//     return axios.get("/api/articles");
//   },
//   // Deletes the saved article with the given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
//   // Saves an article to the database
//   saveArticle: function(articleData) {
//     return axios.post("/api/articles", articleData);
//   }
};