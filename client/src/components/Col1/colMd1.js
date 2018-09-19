import React from "react";
const Col1 = (props)=>(
    <div className="w3-col m1" style={{padding: 10}}> 
    <br></br>
    {props.childComponent1}
    {props.childComponent2}
    {props.childComponent3}
    {props.childComponent4}
    {props.childComponent5}
    {props.childComponent6}

    </div>

)

export default Col1;