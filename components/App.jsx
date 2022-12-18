import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/Image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import Slid_1 from '../app/img/swiper/slid_1.jpg';

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Image src={Slid_1} alt={'Slide-1'}/></SwiperSlide>
                <SwiperSlide><Image src={Slid_1} alt={'Slide-2'}/></SwiperSlide>
                <SwiperSlide><Image src={Slid_1} alt={'Slide-3'}/></SwiperSlide>
            </Swiper>
        </>
    );
}