import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from '../../../../assets/images/Amex.webp';
import brand2 from '../../../../assets/images/Aufin.webp';
import brand3 from '../../../../assets/images/Axis.webp';
import brand4 from '../../../../assets/images/Bajaj.webp';
import brand5 from '../../../../assets/images/BOB.webp';
import brand6 from '../../../../assets/images/Icici.webp';
import brand7 from '../../../../assets/images/Idfc.webp';
import brand8 from '../../../../assets/images/IndusInd.webp';
import brand9 from '../../../../assets/images/StandardChartered.webp';
import brand10 from '../../../../assets/images/YesBank.webp';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Autoplay } from 'swiper';

const Brands = () => {


    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10]

    return (
        <section className='mt-36'>

            <div className='mx-auto w-fit text-center mb-12'>
                <h2 className='text-2xl font-bold'>Top Brands on ZET</h2>
                <p className='text-lg'>We are trusted by best brand in the country</p>
            </div>


            <div className="my-container">
                <>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        className="mySwiper"
                        autoplay={{
                            delay: 1000,
                            pauseOnMouseEnter: false
                        }}
                        modules={[Autoplay]}
                        loop={true}
                        speed={3000}
                    >
                        {
                            brands.map((brand, idx) => <SwiperSlide key={idx}><Image className='border w-full py-3 px-16 rounded-md' src={brand} alt={`brand ${idx}`} /></SwiperSlide>)
                        }
                    </Swiper>
                </>
            </div>
        </section>
    );
};

export default Brands;