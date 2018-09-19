import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from 'react-router-dom';

// import db from "../../../../controllers/";
import API from "../../utils/API";
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";

export default class Facebook extends Component {
  state = {
    loggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
componentDidMoun(){

}
  //un comment this console log to see all the data returned from facebook on login
  responseFacebook = response => {
    console.log(response.name);
    // populate users api
    API.getUsers()
    .then( res =>
        console.log( "23 facebook" )
    )
    .catch( err => console.log( err ) );

    // set state for the  user
    this.setState({
      isLoggedIn: true,
      user: response.name,
      email: response.email,
      picture: response.picture.data.url,
      user: response
    },()=>{
      const user = [{
        user: response.name
      }];
    // set session storage
    console.log("::::")
       sessionStorage.setItem("userName", JSON.stringify(response.name));
       sessionStorage.setItem("email", JSON.stringify(response.email));

       //check for user
       console.log("42")
      API.checkForUser(response);
      console.log(response)
      // create user
      API.createUser(response);
    // console.log(user)
    console.log(response)
    });
    API.getUsers()
    .then( res =>
        console.log( '49 facebook' )
    )
    .catch( err => console.log( "err" ) );


  };

  componentClicked = () => console.log("clicked");
 
  render() {
    let fbContent;

    if (this.state.isLoggedIn || sessionStorage.getItem('userName')) {
      
        return (<Redirect to={'/home'}/>)
      
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );

    } else {
      fbContent = (
        <FacebookLogin
          appId="298031900976142"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}