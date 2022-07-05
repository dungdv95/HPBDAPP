import React from "react";
import {dataImage2021} from "../../data/dataImage2021.js"
import Cardstatus from "../Cardstatus/Cardstatus";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card2021() {
    return (
        <React.Fragment>
            {dataImage2021.map((item, index) => (
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
export default Card2021;