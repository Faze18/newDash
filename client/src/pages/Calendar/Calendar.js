import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Calendar from "../../components/calendar";
import moment from 'moment';
import "../../vendor/calendar.css";
import WorkSpace from "../Workspace";
import API from "../../utils/API";


class CalendarPage extends Component {
    state = {
        thisMonth: 4,
        thisYear: 2017,
        monthVariable: '',
        monthStart: moment().startOf( 'month' ).format( "dddd" ),
        thisMonthDays: moment( moment().format( "YYYY" + "-" + "MM" ), "YYYY-MM" ).daysInMonth(),
        email : JSON.parse(sessionStorage.getItem('email')),
        newMonthDays: 0,
        weekDayCalendar: moment.weekdays(),
        weekDays: moment.weekdays().toString().split( "," ),
        calendar: [],
        startDay: moment().clone().startOf( 'month' ).startOf( 'week' ),
        endDay: moment().clone().endOf( 'month' ).endOf( 'week' ),
        days: [],
        emptyarr: [],
        dates: [],
        // text area variables
        day1: ' ',
        day2: ' ',
        day3: ' ',
        day4: ' ',
        day5: ' ',
        day6: ' ',
        day7: ' ',
        day8: ' ',
        day9: ' ',
        day10: ' ',
        day11: ' ',
        day12: ' ',
        day13: ' ',
        day14: ' ',
        day15: ' ',
        day16: ' ',
        day17: ' ',
        day18: ' ',
        day19: ' ',
        day20: ' ',
        day21: ' ',
        day22: ' ',
        day23: ' ',
        day24: ' ',
        day25: ' ',
        day26: ' ',
        day27: ' ',
        day28: ' ',
        day29: ' ',
        day30: ' ',
        day31: ' '
    };
    //set the text areas to text

    componentDidMount() {
        // debugger;
        // this.setState( { thisMonth: moment().format( "MM" ) } );
        // this.setState( { thisYear: moment().format( "YYYY" ) } )
        // console.log( this.state.thisMonth )
        // var daysarr = Array.apply( null, Array( this.state.thisMonthDays ) ).map( function ( x, i ) { return i + 1 } );
        // this.setState( {
        //     days: daysarr
        // } )
        // this.setState( { days: daysarr } ) //set the new state
        // console.log( ':::did mount-CALENDAR:::' );
        // console.log( 'thismonth' + this.state.thisMonth );
        // console.log( ( this.state.monthStart.format( 'dddd' ) ) )
        // // console.log( moment( this.state.dates[1] ).format( "dddd" ).toString() )
        // // console.log( "first day" + moment( this.state.dates[1] ).format( "dddd" ).toString() )
        // var pos = this.state.weekDays.indexOf( moment( this.state.dates[1] ).format( "dddd" ).toString() );
        // console.log( "position" + pos );
        // console.log( this.state.weekDays )
        // console.log( "days" + this.state.days );
        this.setInitialStates();
    }


    setInitialStates = () => {
        //set the month and delete the initial 0 if a single digit month
        var month = parseInt( moment().format( "MM" ) ).toString();
        this.setState( { thisMonth: month } );
        this.setState( { thisYear: moment().format( "YYYY" ) } )
        var daysarr = Array.apply( null, Array( this.state.thisMonthDays ) ).map( function ( x, i ) { return i + 1 } );
        this.setState( {
            days: daysarr
        } )
        this.setState( { days: daysarr } ) //set the new state
        var pos = this.state.weekDays.indexOf( moment( this.state.dates[1] ).format( "dddd" ).toString() );
        console.log( "position" + pos );
        console.log( this.state.weekDays );
        this.emptyMaker();
        this.getNewMonthNotes();
    }
    componentDidUpdate() {
        console.log( this.state )
    }

    // called when you change month
    daySetter = () => {
        var month = this.state.thisMonth.toString();
        var year = this.state.thisYear.toString();
        console.log( month + "/" + year );
        this.setState( { newMonthDays: moment( moment().format( year + "-" + month ), "YYYY-MM" ).daysInMonth() }, () => {
            var daysarr = Array.apply( null, Array( this.state.newMonthDays ) ).map( function ( x, i ) { return i + 1 } );
            console.log( daysarr );
            console.log( this.state.newMonthDays )
            this.setState( {
                days: daysarr
            } )
            console.log( daysarr );

        } );
    }

    getMonthStart = () => {
        // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
        // array is 'year', 'month', 'day', etc
        var startDate = moment( [this.state.thisYear, this.state.thisMonth - 1] ).format( "dddd" );
        this.setState( { monthStart: startDate } );
        // Clone the value before .endOf()
        console.log( startDate )
        // just for demonstration:
        // console.log(startDate.toDate());
        // startDate = startDate.format("dddd")
        console.log( startDate )
        // make sure to call toDate() for plain JavaScript date type
        // return { start: startDate, end: endDate };
    }

    // change month button functions
    prevMonth = (event) => {
        this.calendarSave();
        if ( this.state.thisMonth === "1" ) {
            this.setState( { thisMonth: "12" } );
            this.setState( { thisYear: ( Number.parseInt( this.state.thisYear, 10 ) - 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();
                } )
            } );
        }
        else {
            this.setState( { thisMonth: ( Number.parseInt( this.state.thisMonth, 10 ) - 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();

                } )
            } );
        }
        console.log( this.state.thisYear );
        console.log( this.state.thisMonth );
        // this.daySetter();
        this.getNewMonthNotes();

    }
    nextMonth = (event) => {
        this.calendarSave();

        if ( this.state.thisMonth === "12" ) {
            this.setState( { thisMonth: "1" } );
            this.setState( { thisYear: ( Number.parseInt( this.state.thisYear, 10 ) + 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();
                } )
            } );
            console.log( "newYear: " + this.state.thisYear );
        }
        else {
            // var month = this.state.thisMonth;
            // month = Number.parseInt( month, 10 );
            this.setState( { thisMonth: ( Number.parseInt( this.state.thisMonth, 10 ) + 1 ).toString() }, () => {
                this.setState( { monthStart: moment().startOf( this.state.thisMonth ) }, () => {
                    this.getMonthStart();
                    this.daySetter();
                } )
            } );
            console.log( "newMonth:" + this.state.thisMonth );
            this.getNewMonthNotes();
        }
    }

    getNewMonthNotes = () => {
        var id = {
            email: this.state.email
        }
        API.getUserData( this.state.email )
            .then( res => {
                if(res.data) {
                var thisDate = this.state.thisMonth + "-" + this.state.thisYear;
                console.log( thisDate );
                this.clearDayStates();
                for ( var n = 0; n < res.data.calendarData.length; n++ ) {
                    if ( res.data.calendarData[n].monthYear === thisDate ) {
                        this.setState( { day1: res.data.calendarData[n].data[0].dayNote } );
                        this.setState( { day2: res.data.calendarData[n].data[1].dayNote } );
                        this.setState( { day3: res.data.calendarData[n].data[2].dayNote } );
                        this.setState( { day4: res.data.calendarData[n].data[3].dayNote } );
                        this.setState( { day5: res.data.calendarData[n].data[4].dayNote } );
                        this.setState( { day6: res.data.calendarData[n].data[5].dayNote } );
                        this.setState( { day7: res.data.calendarData[n].data[6].dayNote } );
                        this.setState( { day8: res.data.calendarData[n].data[7].dayNote } );
                        this.setState( { day9: res.data.calendarData[n].data[8].dayNote } );
                        this.setState( { day10: res.data.calendarData[n].data[9].dayNote } );
                        this.setState( { day11: res.data.calendarData[n].data[10].dayNote } );
                        this.setState( { day12: res.data.calendarData[n].data[11].dayNote } );
                        this.setState( { day13: res.data.calendarData[n].data[12].dayNote } );
                        this.setState( { day14: res.data.calendarData[n].data[13].dayNote } );
                        this.setState( { day15: res.data.calendarData[n].data[14].dayNote } );
                        this.setState( { day16: res.data.calendarData[n].data[15].dayNote } );
                        this.setState( { day17: res.data.calendarData[n].data[16].dayNote } );
                        this.setState( { day18: res.data.calendarData[n].data[17].dayNote } );
                        this.setState( { day19: res.data.calendarData[n].data[18].dayNote } );
                        this.setState( { day20: res.data.calendarData[n].data[19].dayNote } );
                        this.setState( { day21: res.data.calendarData[n].data[20].dayNote } );
                        this.setState( { day22: res.data.calendarData[n].data[21].dayNote } );
                        this.setState( { day23: res.data.calendarData[n].data[22].dayNote } );
                        this.setState( { day24: res.data.calendarData[n].data[23].dayNote } );
                        this.setState( { day25: res.data.calendarData[n].data[24].dayNote } );
                        this.setState( { day26: res.data.calendarData[n].data[25].dayNote } );
                        this.setState( { day27: res.data.calendarData[n].data[26].dayNote } );
                        this.setState( { day28: res.data.calendarData[n].data[27].dayNote } );
                        this.setState( { day29: res.data.calendarData[n].data[28].dayNote } );
                        this.setState( { day30: res.data.calendarData[n].data[29].dayNote } );
                        this.setState( { day31: res.data.calendarData[n].data[30].dayNote } );
                    }

                }}
                if ( res.data )
                    console.log( res.data.calendarData )
            }
            )
    }
    calendarSave = ( event ) => {
        // event.preventDefault();
        let dayNotes = [];

        var data = {
            email: this.state.email,
            method: "calendar",
            monthYear: this.state.thisMonth + "-" + this.state.thisYear,
            dayNotes: [
                { day: 1, note: this.state.day1 },
                { day: 2, note: this.state.day2 },
                { day: 3, note: this.state.day3 },
                { day: 4, note: this.state.day4 },
                { day: 5, note: this.state.day5 },
                { day: 6, note: this.state.day6 },
                { day: 7, note: this.state.day7 },
                { day: 8, note: this.state.day8 },
                { day: 9, note: this.state.day9 },
                { day: 10, note: this.state.day10 },
                { day: 11, note: this.state.day11 },
                { day: 12, note: this.state.day12 },
                { day: 13, note: this.state.day13 },
                { day: 14, note: this.state.day14 },
                { day: 15, note: this.state.day15 },
                { day: 16, note: this.state.day16 },
                { day: 17, note: this.state.day17 },
                { day: 18, note: this.state.day18 },
                { day: 19, note: this.state.day19 },
                { day: 20, note: this.state.day20 },
                { day: 21, note: this.state.day21 },
                { day: 22, note: this.state.day22 },
                { day: 23, note: this.state.day23 },
                { day: 24, note: this.state.day24 },
                { day: 25, note: this.state.day25 },
                { day: 26, note: this.state.day26 },
                { day: 27, note: this.state.day27 },
                { day: 28, note: this.state.day28 },
                { day: 29, note: this.state.day29 },
                { day: 30, note: this.state.day30 },
                { day: 31, note: this.state.day31 }
            ]

        }


        API.updateChildSchema( data );
    }
    // const updateInfo = {
    //     "email": "nathan.fazzio@g.austincc.edu",
    //     "user": "nathan.fazzio@g.austincc.edu",
    //     "picture": "test picture",
    //     "toDoItem": "celebrate"
    // }


    testUpdateChildSchema = ( event ) => {
        event.preventDefault();
        console.log( "chileSchemaUpdater" )
        const updateInfo = {
            "email": "nathan.fazzio@g.austincc.edu",
            "toDoItem": "celebrate"
        }
        API.updateChildSchema( updateInfo );

    }
    //map the days of the month 
    mapCal = ( days ) => {
        console.log( this.state.days )
        this.state.days.map( function ( day ) {
            return (
                <div style={{ color: "#034f84", fontWeight: "bold" }} className="calendarDay">
                    {day}
                    {/* {moment( day ).format( 'D' ).toString()} */}
                    <textarea id={day} className="scroll" style={{ alighn: "right", margin: 0, width: "fit-content", border: 0, height: 95 + "%" }} type="text" name="name" />
                </div>
            )
        } )
    }

    emptyMaker = () => {
        //adapt monthstart for dynamic changes
        var pos = this.state.weekDays.indexOf( this.state.monthStart );
        var emptyArr = [];
        console.log( "emptyMaker" + pos )
        for ( var day = 0; day < pos; day++ ) {
            emptyArr.push( <div className="calendarDay"></div> );
        }

        return emptyArr;

    }
    clearDayStates = () => {
        this.setState( { day1: '' } );
        this.setState( { day2: '' } );
        this.setState( { day3: '' } );
        this.setState( { day4: '' } );
        this.setState( { day5: '' } );
        this.setState( { day6: '' } );
        this.setState( { day7: '' } );
        this.setState( { day8: '' } );
        this.setState( { day9: '' } );
        this.setState( { day10: '' } );
        this.setState( { day11: '' } );
        this.setState( { day12: '' } );
        this.setState( { day13: '' } );
        this.setState( { day14: '' } );
        this.setState( { day15: '' } );
        this.setState( { day16: '' } );
        this.setState( { day17: '' } );
        this.setState( { day18: '' } );
        this.setState( { day19: '' } );
        this.setState( { day20: '' } );
        this.setState( { day21: '' } );
        this.setState( { day22: '' } );
        this.setState( { day23: '' } );
        this.setState( { day24: '' } );
        this.setState( { day25: '' } );
        this.setState( { day26: '' } );
        this.setState( { day27: '' } );
        this.setState( { day28: '' } );
        this.setState( { day29: '' } );
        this.setState( { day30: '' } );
        this.setState( { day31: '' } );
    }
    setTopic1 = event => {
        this.setState( { day1: event.target.value } );
    }
    setTopic2 = event => {
        this.setState( { day2: event.target.value } );
    }
    setTopic3 = event => {
        this.setState( { day3: event.target.value } );
    }
    setTopic4 = event => {
        this.setState( { day4: event.target.value } );
    }
    setTopic5 = event => {
        this.setState( { day5: event.target.value } );
    }
    setTopic6 = event => {
        this.setState( { day6: event.target.value } );
    }
    setTopic7 = event => {
        this.setState( { day7: event.target.value } );
    }
    setTopic8 = event => {
        this.setState( { day8: event.target.value } );
    }
    setTopic9 = event => {
        this.setState( { day9: event.target.value } );
    }
    setTopic10 = event => {
        this.setState( { day10: event.target.value } );
    }
    setTopic11 = event => {
        this.setState( { day11: event.target.value } );
    }
    setTopic12 = event => {
        this.setState( { day12: event.target.value } );
    }
    setTopic13 = event => {
        this.setState( { day13: event.target.value } );
    }
    setTopic14 = event => {
        this.setState( { day14: event.target.value } );
    }
    setTopic15 = event => {
        this.setState( { day15: event.target.value } );
    }
    setTopic16 = event => {
        this.setState( { day16: event.target.value } );
    }
    setTopic17 = event => {
        this.setState( { day17: event.target.value } );
    }
    setTopic18 = event => {
        this.setState( { day18: event.target.value } );
    }
    setTopic19 = event => {
        this.setState( { day19: event.target.value } );
    }
    setTopic20 = event => {
        this.setState( { day20: event.target.value } );
    }
    setTopic21 = event => {
        this.setState( { day21: event.target.value } );
    }
    setTopic22 = event => {
        this.setState( { day22: event.target.value } );
    }
    setTopic23 = event => {
        this.setState( { day23: event.target.value } );
    }
    setTopic24 = event => {
        this.setState( { day24: event.target.value } );
    }
    setTopic25 = event => {
        this.setState( { day25: event.target.value } );
    }
    setTopic26 = event => {
        this.setState( { day26: event.target.value } );
    }
    setTopic27 = event => {
        this.setState( { day27: event.target.value } );
    }
    setTopic28 = event => {
        this.setState( { day28: event.target.value } );
    }
    setTopic29 = event => {
        this.setState( { day29: event.target.value } );
    }
    setTopic30 = event => {
        this.setState( { day30: event.target.value } );
    }
    setTopic31 = event => {
        this.setState( { day31: event.target.value } );
    }

    render() {

        { this.emptyMaker }
        { this.daySetter }
        const { pizza } = this.context
        return (
            <div>
                {pizza}
                <Calendar
                    thisYear={this.thisYear}
                    prevMonth={this.prevMonth}
                    nextMonth={this.nextMonth}
                    thisMonth={this.state.thisMonth}
                    weekDayCalendar={this.state.weekDayCalendar}
                    days={this.state.days}
                    emptyMaker={this.emptyMaker}
                    mapCal={this.mapCal}
                    setTopic1={this.setTopic1}
                    setTopic2={this.setTopic2}
                    setTopic3={this.setTopic3}
                    setTopic4={this.setTopic4}
                    setTopic5={this.setTopic5}
                    setTopic6={this.setTopic6}
                    setTopic7={this.setTopic7}
                    setTopic8={this.setTopic8}
                    setTopic9={this.setTopic9}
                    setTopic10={this.setTopic10}
                    setTopic11={this.setTopic11}
                    setTopic12={this.setTopic12}
                    setTopic13={this.setTopic13}
                    setTopic14={this.setTopic14}
                    setTopic15={this.setTopic15}
                    setTopic16={this.setTopic16}
                    setTopic17={this.setTopic17}
                    setTopic18={this.setTopic18}
                    setTopic19={this.setTopic19}
                    setTopic20={this.setTopic20}
                    setTopic21={this.setTopic21}
                    setTopic22={this.setTopic22}
                    setTopic23={this.setTopic23}
                    setTopic24={this.setTopic24}
                    setTopic25={this.setTopic25}
                    setTopic26={this.setTopic26}
                    setTopic27={this.setTopic27}
                    setTopic28={this.setTopic28}
                    setTopic29={this.setTopic29}
                    setTopic30={this.setTopic30}
                    setTopic31={this.setTopic31}
                    value1={this.state.day1}
                    value2={this.state.day2}
                    value3={this.state.day3}
                    value4={this.state.day4}
                    value5={this.state.day5}
                    value6={this.state.day6}
                    value7={this.state.day7}
                    value8={this.state.day8}
                    value9={this.state.day9}
                    value10={this.state.day10}
                    value11={this.state.day11}
                    value12={this.state.day12}
                    value13={this.state.day13}
                    value14={this.state.day14}
                    value15={this.state.day15}
                    value16={this.state.day16}
                    value17={this.state.day17}
                    value18={this.state.day18}
                    value19={this.state.day19}
                    value20={this.state.day20}
                    value21={this.state.day21}
                    value22={this.state.day22}
                    value23={this.state.day23}
                    value24={this.state.day24}
                    value25={this.state.day25}
                    value26={this.state.day26}
                    value27={this.state.day27}
                    value28={this.state.day28}
                    value29={this.state.day29}
                    value30={this.state.day30}
                    value31={this.state.day31}
                />
                <br></br>
                <div>  <button onClick={this.calendarSave} >Save Calendar</button></div>



            </div>
        )
    };

}
{/* //         <Container fluid>
//             <h1>Calendar Page</h1>
//             <Calendar  */}
{/* //             dates = {this.state.dates}
//             />
//         </Container> */}
//         )
//     }

// }
// export const pizza = {
//     light: {username:CalendarPage.state
//     }
//   };


export default CalendarPage;