import React from "react";
import Cardstatus from "../Cardstatus/Cardstatus";
import { dataImage2018 } from "../../data/dataImage.js"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card2018() {
    // console.log(dataImage2018);
    return (
        <React.Fragment>
            {dataImage2018.map((item, index) => (
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
export default Card2018;