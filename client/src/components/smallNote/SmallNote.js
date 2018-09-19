import React from "react";
import "../../vendor/notes.css";
const SmallNote = (props) => (
    <div>
      <textarea onChange={props.handleChange.bind( this )} id="note" name="subject" placeholder="Write something.." style={{height:200,width:80+"%", position:"inherit"}}>{props.text}</textarea>
    </div>
)
export default SmallNote;