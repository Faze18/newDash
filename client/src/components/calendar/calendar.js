import React from "react";
import "../../vendor/calendar.css"
import moment from 'moment';


const Calendar = ( props ) => (
        <div>
            <div  style={{ textAlign: "center" , width:100+"%"}}>
            <button onClick={props.prevMonth} style={{ position: "relative", bottom: "10px", left: "10px"}} className="fa fa-chevron-circle-left" ></button>

            <div style={{ textAlign: "center" , display:"inline-block", width:450+"px"}}>
                <span style={{ fontSize: 45}} >{moment( props.thisMonth ).format( "MMMM" )}    {moment(props.thisYear).format("YYYY")}</span>
            </div>
            <button onClick={props.nextMonth} style={{ position: "relative", bottom: "10px", right: "10px" }} className="fa fa-chevron-circle-right"></button>

            </div>
            <div className="container">

                <script src="https://cdn.jsdelivr.net/momentjs/2.15.0/moment.min.js"></script>
                {props.weekDayCalendar.map( function ( day ) {
                    return ( <div className="day">
                        {day}
                    </div> )
                } )}

                {props.emptyMaker()}


                {props.days.map( function ( day ) {
                    var funct;
                    var value;
                    if( day ===1){funct = props.setTopic1; value=props.value1  }
                    if( day ===2){funct = props.setTopic2; value=props.value2  }
                    if( day ===3){funct = props.setTopic3; value=props.value3  }
                    if( day ===4){funct = props.setTopic4; value=props.value4  }
                    if( day ===5){funct = props.setTopic5; value=props.value5  }
                    if( day ===6){funct = props.setTopic6; value=props.value6  }
                    if( day ===7){funct = props.setTopic7; value=props.value7  }
                    if( day ===8){funct = props.setTopic8; value=props.value8  }
                    if( day ===9){funct = props.setTopic9; value=props.value9  }
                    if( day ===10){funct = props.setTopic10; value=props.value10  }
                    if( day ===11){funct = props.setTopic11; value=props.value11  }
                    if( day ===12){funct = props.setTopic12; value=props.value12  }
                    if( day ===13){funct = props.setTopic13; value=props.value13  }
                    if( day ===14){funct = props.setTopic14; value=props.value14  }
                    if( day ===15){funct = props.setTopic15; value=props.value15  }
                    if( day ===16){funct = props.setTopic16; value=props.value16  }
                    if( day ===17){funct = props.setTopic17; value=props.value17  }
                    if( day ===18){funct = props.setTopic18; value=props.value18  }
                    if( day ===19){funct = props.setTopic19; value=props.value19  }
                    if( day ===20){funct = props.setTopic20; value=props.value20  }
                    if( day ===21){funct = props.setTopic21; value=props.value21  }
                    if( day ===22){funct = props.setTopic22; value=props.value22  }
                    if( day ===23){funct = props.setTopic23; value=props.value23  }
                    if( day ===24){funct = props.setTopic24; value=props.value24  }
                    if( day ===25){funct = props.setTopic25; value=props.value25  }
                    if( day ===26){funct = props.setTopic26; value=props.value26  }
                    if( day ===27){funct = props.setTopic27; value=props.value27  }
                    if( day ===28){funct = props.setTopic28; value=props.value28  }
                    if( day ===29){funct = props.setTopic29; value=props.value29  }
                    if( day ===30){funct = props.setTopic30; value=props.value30  }
                    if( day ===31){funct = props.setTopic31; value=props.value31  }
                    return (
                        <div style={{ color: "#034f84", fontWeight: "bold" }} className="calendarDay">
                            {day}
                            {/* {moment( day ).format( 'D' ).toString()} */}
                            <textarea value = {value} onChange = {funct} id={day} className="scroll" style={{ position:"relative",right:0, align: "right", margin: 0, width:9+ "vw", border: 0, height: 95 + "%" }} type="text" name="name" />
                        </div>
                    )
                } )}

            </div>
        </div>

)
export default Calendar;