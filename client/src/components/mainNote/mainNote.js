import React from 'react';
import ColMd7 from "../colMd7";
import Title from "../TitleBar";
const MainNote = ( props ) => (


    <div>

        <h4 style={{ width: 100 + "%", textAlign: "center" }}>Write a blog, a note, or something to do: </h4>
        <br></br>
        <input id="note" name="subject" onChange={props.setTextTitle} placeholder="title" value={props.noteTitle} style={{height:20,width:100+"%", position:"relative", bottom:-20}}></input>
        <textarea className="scroll" onChange={props.handleChange.bind( this )} id="inputTextToSave" rows="25" value={props.text} style={{ whiteSpace: "pre", fontFamily: "helvetica", fontWeight: props.fontWeight, color: "black", width: 100 + "%", backgroundColor: props.editorBackground }}>{props.text}</textarea>
        {/* <div id ="readOnlyText" style={{position:"relative",left:15,width:100+"%", display:props.displayText, backgroundColor:"beige"}}></div> */}
        {/* <td>Filename to Save As:</td> */}
        {/*             
                <td><input id="inputFileNameToSaveAs"></input></td>
                <td><button onClick={props.saveTextAsFile}>Save Text to File</button></td>

                <td>Select a File to Load:</td>
                <td><input type="file" id="fileToLoad" /></td>
                <td><button onClick={props.loadFileAsText}>Load Selected File</button></td> */}
    </div>
)

export default MainNote;