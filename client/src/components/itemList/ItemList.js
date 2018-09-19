import React from "react";
// import "../../vendor/notes.css";
// changed curly braces to parenthesis for stateless, change back when adding stateful values
const ItemList = ( props ) => (
    <div>

        { props.breaks ?  props.breaks(): null}
        <div id="box2" className="w3-card w3-round " style={{boxShadow:"none"}}>
            <div>
                <div className="w3-white" style={{boxShadow: 0}}>
                    <button onClick={() => { props.listDisplay( props.list1, "showList1" ) }} className="w3-button w3-hover-black w3-block w3-left-align">
                        <i className="fa fa-sticky-note w3-margin-right "> notes</i>
                        {/* FIRST ITEM */}
                        {/* FIRST ITEM */}
                        {props.list1}
                    </button>
                    <div id="Demo1" className={props.hidden1 + " w3-container"}>
                        {props.noteTitles.map( function ( i, index ) {
                            return <p style={{textIndent: 3+"%", color:"grey"}} onClick={() => { props.findNote( index ) }}>{i}</p>
                        } )}
                    </div>
                    <button onClick={() => { props.listDisplay( props.list2, "showList2" ) }} className="w3-button  w3-hover-black w3-block  w3-left-align">
                        <i className="fa fa-calendar-check-o fa-fw w3-margin-right">  To Do</i>
                        {/* 2ND ITEM */}
                        {/* 2ND ITEM */}
                        {props.list2}
                    </button>
                    <div id="Demo2" className={props.hidden2 + " w3-container"} >
                    {props.toDo.map( function ( i, index ) {
                            return <p style={{textIndent: 3+"%", color:"grey"}} onClick={() => { props.findToDo( index ) }}>{i}</p>
                        } )}                    
                        </div>
                    <button onClick={() => { props.listDisplay( props.list3, "showList3" ) }} className="w3-button  w3-hover-black w3-block  w3-left-align">
                        <i className="fa fa-users fa-fw w3-margin-right">  Blogs</i>
                        {/* 3rd ITEM */}
                        {/* 3rd ITEM */}
                        {props.list3}

                    </button>
                    <div id="Demo3" className={props.hidden3 + " w3-container"} >
                    {props.blog.map( function ( i, index ) {
                            return <p style={{textIndent: 3+"%", color:"grey"}} onClick={() => { props.findBlog( index ) }}>{i}</p>
                        } )}
                        <div className="w3-row-padding">

             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default ItemList;