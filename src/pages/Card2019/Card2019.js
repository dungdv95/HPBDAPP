import React from "react";
import {dataImage2019} from "../../data/dataImage2019.js"
import Cardstatus from "../Cardstatus/Cardstatus.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card2019() {
    return (
        <React.Fragment>
            {dataImage2019.map((item, index) => (
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
export default Card2019;