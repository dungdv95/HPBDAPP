import React,{useState} from 'react';
import Cardstatus from '../Cardstatus/Cardstatus';
import {dataImage2017} from "../../data/dataImage.js"


function Card2017() {
    return(
        <React.Fragment>
            {dataImage2017.map((item,index) => (
                <Cardstatus key={index} data={item} />
            ))}
        </React.Fragment>
    )
}
export default Card2017;