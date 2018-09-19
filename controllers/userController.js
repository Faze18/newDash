const db = require( "../models" );

// Defining methods for the booksController
module.exports = {
  findAll: function ( req, res ) {
    db.User
      .find( req.query )
      .sort( { date: -1 } )
      .then( dbModel => { console.log( "Create:  " + dbModel ); res.json( dbModel ) } )
      .catch( err => res.status( 422 ).json( err ) );
  },
  findById: function ( req, res ) {
    console.log( req.params.id )
    const email = {
      "email": req.params.id
    }
    db.User
      .findOne( email )
      .then( dbModel => { console.dir( req.params.id ); res.json( dbModel ) } )
      .catch( err => res.status( 422 ).json( err ) );
  },
  findUserData: function ( req, res ) {
    console.log( "RPID" )
    // console.log(req)
    console.log( req.params.id )

    db.User
      .findOne( { email: req.params.id } )
      .then( dbModel => { console.dir( req.params.id ); res.json( dbModel ) } )
      .catch( err => res.status( 422 ).json( err ) );
  },
  create: function ( req, res ) {
    const newUser = {
      user: req.body.name,
      email: req.body.email
    };
    db.User
      .findOne( { email: req.body.email }, function ( err, existingUser ) {
        if ( existingUser == null ) {
          db.User
            .create( newUser )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
        }
        else {
          res.json( null )
        }
      } )

  },
  updateCalendar: function ( req, res ) {
    db.User
      .findOne( { email: "nathan.fazzio@g.austincc.edu" }, function ( err, record ) {
        console.log( record )
        console.log( "calendarData" )
        record.calendarData.push( { monthYear: "11-2003" }, function ( err, monthExists ) {
          console.log( "Thismonth" )
          console.log( monthExists )
          if ( monthExists == null ) {
            record.calendarData.create( { monthYear: "09-2005", Note: { day: 2, dayNote: "hello" } } )
              .then( dbModel => res.json( dbModel ) )
              .catch( err => res.status( 422 ).json( err ) );
          }
          else {
            console.log( "no month exists" )
            monthExists.Note.remove
            monthExists.Note.create( { day: 3, dayNote: "goodbye" } )
            record.save()
          }

        } )
        console.log( "end of function" )

      } )

      //

      .then( dbModel => res.json( dbModel ) )
      .catch( err => console.log( "Error" ) )
  },

  // create: function(req, res) {
  //   const newUser = {
  //     user:req.body.name,
  //     email:req.body.email
  //   };
  //   db.User
  //     .create(newUser)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  updateTopLevel: function ( req, res ) {
    db.User
      .findOneAndUpdate( { email: req.body.email }, req.body )
      .then( dbModel => { console.dir( req.body.email ); res.json( dbModel ) } )
      .catch( err => res.status( 422 ).json( err ) );
  },
  updateChildSchema: function ( req, res ) {

    var method = req.body.method;
    // To Update ToDo
    console.log( "save note" )
    console.dir( req.body )
    if ( method === "saveNote" ) {
      db.User
        .findOne( { email: req.body.email } )
        .then( function ( record ) {
          record.notes.push( { title: req.body.noteTitle, body: req.body.notes } );
          record.save().then( function () {
            db.User
              .findOne( { email: req.body.email } ).then( function ( result ) {
                console.log( "record written" );
              } );
          } );

        } )
        .catch( e => res.status( 400 ).send( e ) ); console.log( "BAD" );
    }
    // To Update ToDo
    if ( method == "toDo" ) {
      db.User
        .findOne( { email: req.body.email } )
        .then( function ( record ) {
          record.toDo.push( { toDoItem: req.body.toDo } );
          record.save().then( function () {
            db.User
              .findOne( { email: req.body.email } ).then( function ( result ) {
                console.log( "record written" );
              } );
          } );

        } )
        .catch( e => res.status( 400 ).send( e ) ); console.log( "BAD" );
    }
    if ( method === "blog" ) {
      console.log(req.body.blogTitle)
      db.User
        .findOne( { email: req.body.email } )
        .then( function ( record ) {
          record.blogs.push( { blogText: req.body.blog, blogTitle: req.body.blogTitle } );
          record.save().then( function () {
            db.User
              .findOne( { email: req.body.email } ).then( function ( result ) {
                console.log( "record written" );
              } );
          } );

        } )
        .catch( e => res.status( 400 ).send( e ) ); console.log( "BAD" );
    }
    // To update Notes
    if ( method == "note" ) {
      db.User
        .findOne( { email: req.body.email } )
        .then( function ( record ) {
          record.notes.push( { title: "note title", body: "note text" } );
          record.save().then( function () {
            db.User
              .findOne( { email: req.body.email } ).then( function ( result ) {
                console.log( "record written" );
              } );
          } );

        } )
        .catch( e => res.status( 400 ).send( e ) ); console.log( "BAD" );
    }
    // To Update Calendar
    if ( method == "calendar" ) {
      console.log( "calendar req body" )
      console.dir( req.body )
      db.User
        .findOne( { email: req.body.email }, function ( err, result ) {
          // result.calendarData.push( { monthYear: "note 1", data:{day:1, note:"is ths working?"}} );
          // result.calendarData.push( { monthYear: "note 2", data:{day:1, note:"is ths working?"}} );

          // find and remove old month record to push in new one
          var length;
          if ( result.calendarData ) {
            length = result.calendarData.length;
          }
          if ( length ) {

            var found = false;
            console.log( "length: " + length )
            for ( var i = 0; i < length; i++ ) {

              console.log( "monthyear in loop: " + result.calendarData[i].monthYear )
              if ( result.calendarData[i].monthYear == req.body.monthYear ) {
                console.log( "loop: " + i );
                result.calendarData[i].remove();
                found = true;
              }
              if ( found ) {
                break;
              }
              console.log( "run: " + i )
            }
          }
          // push in new monthYear
          console.log( req.body.dayNotes )
          result.calendarData.push( { monthYear: req.body.monthYear } )
          // push in the month data
          length = 0;
          if ( result.calendarData ) {
            length = result.calendarData.length;
          }
          console.log( "length" + length )
          found = false;
          for ( var i = 0; i < length; i++ ) {
            console.log( "monthyear in loop: " + result.calendarData[i].monthYear )
            console.log( "DAY NOTES" )
            console.dir( req.body.dayNotes )
            if ( result.calendarData[i].monthYear == req.body.monthYear ) {
              req.body.dayNotes.forEach( function ( dn ) {
                // result.calendarData[i].push(  { day: 1, note: "WHAAA" }  )
                console.log( dn.day )
                result.calendarData[i].data.push( { day: dn.day, dayNote: dn.note } )
              }
              )
              found = true;

              if ( found ) {
                break;
              }
              // req.body.data.dayNotes.forEach( function ( dn ) {
            }
          } result.save();
          console.log( "saved" )

        }
        )
    }


    // result.calendarData[1].remove();
    // console.log( result.calendarData[1].monthYear )
    // console.log( result.calendarData.length )
    //   result.update({ monthYear : "this month" },function(found){

    //   }
    //  { $pull : {'calendarData.$.monthYear' : { 'monthYear' : 'thisMonth' } } });   
    //  } )

    //   .findOne( { email: req.body.email } )
    //   .then( function ( record ) {
    //     console.log("STEP1")

    // record.calendarData.push( { monthYear: "note title", data:{day:1, note:"is ths working?"}} );
    //     console.log("STEP2")

    //     record.save().then( function () {
    //       db.User
    //         .findOne( { email: req.body.email } ).then( function ( result ) {
    //           console.log( "record written" );
    //         } );
    //     } );

    //   } )
    //   .catch( e => res.status( 400 ).send( e ) ); console.log( "BAD" );
    // }

    // .findOne({email:req.body.email}, function(err, existingUser){
    //   console.log("___######*******________")
    //   console.dir(existingUser._doc);
    // existingUser._doc
    //   .toDo.push(req.body)
    //   // .create(req.body)
    //   // .then(dbModel => {console.dir(req.body); res.json(dbModel)})
    //   // .catch(err => res.status(422).json(err));

    // })
    //   // .findOneAndUpdate({ email: req.body.email }, req.body)
    //   .then(dbModel =>res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  update: function ( req, res ) {
    db.User
      .findOneAndUpdate( { email: req.params.email }, req.body )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  },
  remove: function ( req, res ) {
    db.User
      .findById( { _id: req.params.id } )
      .then( dbModel => dbModel.remove() )
      .then( dbModel => res.json( dbModel ) )
      .catch( err => res.status( 422 ).json( err ) );
  }
};
