import React from "react";

const Card = (props) => (
    <div class="w3-col m3">
        <div id="box1" class="w3-card w3-round w3-white">
            <div class="w3-container">
                <h4 class="w3-center">My Profile</h4>
                <p class="w3-center" />
                <p>{props.testText}</p>

            </div>
        </div>
    </div>
)
export default Card;