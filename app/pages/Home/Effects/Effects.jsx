import Image from 'next/image';
import React from 'react';
import bgImg from '../../../../assets/images/peeps1.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Effects = () => {

    return (
        <section className='py-[192px] bg-[#145cc5] effects-section'>
            <div className="my-container effects-container bg-[#417fda] py-10 flex items-center justify-between">

                <Image src={bgImg} className='w-[780px] mt-28' alt='bg' style={{ mixBlendMode: 'luminosity' }} />

                <div className='w-1/2 -mb-24'>
                    <h2 className='text-[23px] uppercase font-bold text-white'>
                        THE ZET EFFECT
                    </h2>

                    <Swiper pagination={{ type: 'progressbar' }} loop={true} autoplay={{ delay: 1500 }} speed={1500} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide><h3 className='pb-20 pr-16 pt-5 font-bold text-3xl text-white'>14 Lakh+ Financial Advisor across India are using ZET to increase their income.</h3></SwiperSlide>
                        <SwiperSlide><h3 className='pb-20 pr-16 pt-5 font-bold text-3xl text-white'>We helped customers in more than 50 cities to get their first financial product</h3></SwiperSlide>
                        <SwiperSlide><h3 className='pb-20 pr-16 pt-5 font-bold text-3xl text-white'>More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</h3></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Effects;