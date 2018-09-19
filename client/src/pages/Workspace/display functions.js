
export function  listDisplay ( event, item )  {
    console.log( "clicked" );
    console.log( "event" + event );
    console.log( item );
    if ( event === false ) {
      if ( item === "showList1" ) {
        this.setState( { showList1: true } );
        this.setState( { list1class: "w3-show" } );

        console.log( this.state.showList1 );
      }
      if ( item === "showList2" ) {
        this.setState( { showList2: true } );
        this.setState( { list2class: "w3-show" } );

        console.log( this.state.showList2 );
      }
      if ( item === "showList3" ) {
        this.setState( { showList3: true } );
        this.setState( { list3class: "w3-show" } );

        console.log( this.state.showList3 );
      }
    }
    else {
      if ( item === "showList1" ) {
        this.setState( { showList1: false } );
        this.setState( { list1class: "w3-hide" } );

        console.log( this.state.showList1 );
      }
      if ( item === "showList2" ) {
        this.setState( { showList2: false } );
        this.setState( { list2class: "w3-hide" } );

        console.log( this.state.showList2 );
      }
      if ( item === "showList3" ) {
        this.setState( { showList3: false } );
        this.setState( { list3class: "w3-hide" } );

        console.log( this.state.showList3 );
      }

    }
  };
