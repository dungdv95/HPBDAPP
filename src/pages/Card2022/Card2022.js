import React from "react";
import {dataImage2022} from "../../data/dataImage2022.js"
import Cardstatus from "../Cardstatus/Cardstatus";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card2022() {
    return (
        <React.Fragment>
            {dataImage2022.map((item, index) => (
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
export default Card2022;