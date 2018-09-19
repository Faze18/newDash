import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";
import MeBox from "../../components/meBox";
import SmallNote from "../../components/smallNote";
import ItemList from "../../components/itemList";
import { listDisplay } from "../Workspace/display functions";
import Col3 from "../../components/colMd3";
import ColMd7 from "../../components/colMd7";
import Col2 from "../../components/ColMd2";
import Title from "../../components/TitleBar";
import API from "../../utils/API";

class Home extends Component {
    state = {
        blog: [],
        blogTitles: [],
        text: "",
        noteTitles: [],
        notes: [],
        newTextTitle: "",
        text: "",
        toDo: [],
        email: JSON.parse( sessionStorage.getItem( 'email' ) ),
        noteTitles: ["note1", "note2", "note3"],
        notes: ['  this is note 1, there are many like it but this one is mine', 'this is note two, less exciting than note 1', 'this is note 3, Nobody likes me'],
        pizza: "yesPlease",
        display: "",
        editTag: "textarea",
        edit: true,
        editorMode: "Edit",
        editorBackground: "#F5F5F5",
        fontWeight: 400,
        text: "",
        aboutMe: "",
        showList1: false,
        showList2: false,
        showList3: false,
        list1class: "w3-hide",
        list2class: "w3-hide",
        list3class: "w3-hide",
        list1: "notes",
        editable: true,
        background: "white",
        scrollHeight: 12,
        saveBlog:"Save Blog",
        saveNote:"Save Note",
        saveToDo:"Save To Do"
    }

    componentDidMount() {
        this.populateNotes();
        this.populateToDo();
        this.populateBlog();
        console.log( "Mounted" );
        console.log( this.state.email );
        let userss = sessionStorage.getItem( "userName" );
        console.log( userss );
        var aboutme = document.getElementById( "aboutMe" );
        var scroll_height = aboutme.scrollHeight;
        console.log( scroll_height )
        this.setState( { scrollHeight: scroll_height } )
        // ('/home/:id', function(request, response){
        //     console.log(request.params.id)
        //       })
    }
    componentDidUpdate() {
        console.log( this.state )
    }
    findNote = ( index ) => {
        console.log( this.state.notes[index] )
        var text = this.state.notes[index];
        this.setState( { text: text } );
        console.log( this.state.text );
    };
    edit = () => {
        if ( this.state.editable == true ) {
            this.setState( { editable: false } )
            this.setState( { background: "#E4EDFF" } )
        }
        else {
            this.setState( { editable: true } )
            this.setState( { background: "#FFFFFF" } )

        }
    }

    findToDo = ( index ) => {
        console.log( this.state.toDo[index] )
        var text = this.state.toDo[index];
        this.setState( { text: text } );
        console.log( this.state.text );
    };
    populateNotes = () => {
        var notes = [];
        var noteTitles = [];
        API.getUserData( this.state.email )
            .then( res => {
                if ( res.data ) {
                    for ( var n = 0; n < res.data.notes.length; n++ ) {
                        noteTitles.push( res.data.notes[n].title );
                        notes.push( res.data.notes[n].body );
                    }
                    this.setState( { noteTitles: noteTitles } );
                    this.setState( { notes: notes } );

                }
            } )

    }
    populateBlog = () => {
        var blog = [];
        var blogTitles = [];
        API.getUserData( this.state.email )
            .then( res => {
                if ( res.data ) {
                    for ( var n = 0; n < res.data.blogs.length; n++ ) {
                        blogTitles.push( res.data.blogs[n].blogTitle );
                        blog.push( res.data.blogs[n].blogText );
                    }
                    this.setState( { blogTitles: blogTitles } );
                    this.setState( { blog: blog } );

                }
            } )
    }
    findBlog = ( index ) => {
        console.log( this.state.blog[index] )
        var text = this.state.blog[index];
        this.setState( { text: text } );
        console.log( this.state.text );
    };
    populateToDo = () => {
        var toDo = [];

        API.getUserData( this.state.email )
            .then( res => {
                if ( res.data ) {

                    for ( var n = 0; n < res.data.toDo.length; n++ ) {
                        toDo.push( res.data.toDo[n].toDoItem );
                    }
                }
            }
            )
        setTimeout( this.setState( { toDo: toDo } ), 1400 );
    }
    handleChange = ( event ) => {
        this.setState( { text: event.target.value } );
        console.log( this.state.text );
    }
    aboutMe = ( event ) => {
        this.setState( { aboutMe: event.target.value } );
        console.log( this.state.text );
        var aboutme = document.getElementById( "aboutMe" );
        var scroll_height = aboutme.scrollHeight-4;
        console.log( scroll_height )
        this.setState( { scrollHeight: scroll_height } )
    }
    saveNote = ( event ) => {
        event.preventDefault();

        var data = {

            email: this.state.email,
            method: "saveNote",
            noteTitle: this.state.newTextTitle,
            notes: this.state.text
        }
        if (this.state.newTextTitle===""){
            this.setState({saveNote: "Pleast give your note a title"});

        }else{
        API.updateChildSchema( data );
        this.populateNotes();   
        }


    }
    saveTodo = ( event ) => {
        event.preventDefault();

        var data = {
            email: this.state.email,
            method: "toDo",
            toDo: this.state.text
        }
        API.updateChildSchema( data );
        this.populateToDo();
    }
    saveBlog = ( event ) => {
        event.preventDefault();
        var data = {
            email: this.state.email,
            method: "blog",
            blog: this.state.text,
            blogTitle: this.state.newTextTitle
        }
        if (this.state.newTextTitle ===""){
            this.setState({saveBlog: "Pleast give your Blog a title"});
        }else{
        API.updateChildSchema( data );
        this.populateToDo();
        this.setState({saveBlog: "Blog Saved"});

        }

    }
    setTextTitle = event => {
        this.setState({saveNote: "Save Note"});
        this.setState({saveBlog: "Save Blog"});
        this.setState({saveToDo: "Save To Do"});

        this.setState( { newTextTitle: event.target.value } );
    }
    render() {
        return (
            <Container fluid>
                <br></br>

                <Col2>
                </Col2>
                <Col3

                    childComponent2={<MeBox
                        scrollHeight={this.state.scrollHeight}
                        name={JSON.parse( sessionStorage.getItem( 'userName' ) )}
                        editable={this.state.editable}
                        editFunct={this.edit}
                        background={this.state.background}
                        aboutMeText={this.aboutMe}
                    />}
                    childComponent1={<ItemList
                        blog={this.state.blogTitles}
                        toDo={this.state.toDo}
                        findNote={this.findNote}
                        findToDo={this.findToDo}
                        list1Title={"notes"}
                        noteTitles={this.state.noteTitles}
                        findNote={this.findNote}
                        findToDo={this.findToDo}
                        findBlog={this.findBlog}

                        list1={this.state.showList1}
                        list2={this.state.showList2}
                        list3={this.state.showList3}
                        hidden1={this.state.list1class}
                        hidden2={this.state.list2class}
                        hidden3={this.state.list3class}
                        listDisplay={listDisplay.bind( this )}
                        breaks={this.breaks}
                    />}
                    childComponent3={<Links />}
                />

                <ColMd7
                    text={this.state.text}
                    childComponent1={<div><br /> <h4 style={{ textAlign: "bottom" }}>Home Page</h4><hr></hr></div>}
                    childComponent2={<Title
                    setTitle ={this.setTextTitle}
                    ></Title>}
                    childComponent3={<SmallNote
                        handleChange={this.handleChange}
                        text={this.state.text}


                    />}
                    childComponent4={<button onClick={this.saveNote} className="w3-btn w3-round w3-black w3-hover-white">{this.state.saveNote}</button>}
                    childComponent5={<button onClick={this.saveTodo} className="w3-btn w3-round  w3-black w3-hover-white">{this.state.saveToDo}</button>}
                    childComponent6={<button onClick={this.saveBlog} className="w3-btn w3-round w3-black w3-hover-white">{this.state.saveBlog}</button>}
                    
                    childComponent8={<br></br>}
                    childComponent9={<h4>Viewer</h4>}

                    childComponent10={<div style={{whiteSpace: "pre-wrap"}}>{this.state.text}</div>}
                >
                </ColMd7>

            </Container>
        )
    }
}

export default Home;