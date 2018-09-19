import React from "react";

const ButtonBox =(props)=>(
    <div id="box1" style={{ position:"relative", right: 50, textAlign:"left", boxShadow: "0px 0px 0px 0px" }} className="w3-card w3-round w3-white">
        <hr></hr>

    <h4>Save to computer:</h4>
    <hr></hr>
    <p>Filename to Save As:</p>
  
    <input style={{width:100+"%", position:'relative', right:5}} id="inputFileNameToSaveAs"></input>
    <br/>

    <p><button onClick={props.button1} className="w3-btn w3-round w3-black w3-hover-white" style={{ width:100+"%"}} >Save Text to File</button></p>
<hr/>
    <p style={{textAlign:"justify"}}>Select a File to Load:</p>
    <br/>   
   

    <input  style={{overflow: "hidden", width:100+"%", position:'relative', right:12}} type="file" id="fileToLoad" />

    <br/><br/>

    <button onClick={props.button2} style={{overflow: "hidden", width:100+"%"}} className="w3-btn w3-round w3-black w3-hover-white" >Load Selected File</button>
    <br/>

    <div id="optionalText"></div>
    
    </div>

)
export default ButtonBox;