import Image from 'next/image';
import React from 'react';
import playStore from '../../../../assets/images/downloadBtnDark.a0f01343.svg'
import heroImg from '../../../../assets/images/HeroImgNew.webp'
import Link from 'next/link';

const Banner = () => {
    return (
        <section className='mt-40'>
            <div className="banner-container w-[1530px] mx-auto rounded-md flex items-end">
                <div className="banner-content w-full p-[76px] bg-[#E9F4FF] h-fit">
                    <h1 className='text-[40px] font-bold pr-96'>
                        Become a Financial Advisor and <span className='text-[#264eff]'>Earn Rs.1 Lakh/Month</span>
                    </h1>
                    <p className='text-lg mt-2 mb-5'>No investment required</p>
                    <Link href={'/'} className='inline-block'>
                        <Image src={playStore} alt='play store' />
                    </Link>
                </div>
                <div className="banner-img float-right absolute w-[600px] right-32">
                    <Image src={heroImg} alt='hero image' className='w-[500px]' />
                </div>
            </div>
        </section>
    );
};

export default Banner;