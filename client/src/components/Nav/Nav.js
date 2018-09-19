import React from "react";

const Nav =(props)=> (
  <div className="w3-bar w3-black" style={{position:"fixed"}}>
<div>
    <span style = {{position:"absolute", left:18+"%"}} className="w3-bar-item w3-large">Welcome</span>
<div  style={{position:"relative", right:16+"%"}}>
<a href = "/" onClick={props.logout} className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Log in</a>

<a href = "/logout" onClick={props.logout} className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Logout</a>

<a href="/blog" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Blog</a>

<a href="/workspace" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">WorkSpace</a>

    {/* <a href="/home/name" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">home/:id</a> */}

    <a href="/contacts" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Contacts</a>

    <a href="/calendar" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Calendar</a>

    <a href="/news" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">News</a>

    <a href="/home" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Home</a>

    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" >&#9776;</a>
  </div></div>
  </div>
);

export default Nav;
