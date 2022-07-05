import React from "react";
import {dataImage2020} from "../../data/dataImage2020.js"
import Cardstatus from "../Cardstatus/Cardstatus.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card2020() {
    return (
        <React.Fragment>
            {dataImage2020.map((item, index) => (
                <Swiper key={index}>
                    {item.groupImg.map((list, idx) => (
                        <SwiperSlide key={idx} >
                            <Cardstatus data={list} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ))}
        </React.Fragment>
    )
}
export default Card2020;