import FeatureCard from '@/components/FeatureCard/FeatureCard';
import React from 'react';
import featureImg1 from '../../../../assets/images/zero_investment.d5743aab.svg'
import featureImg2 from '../../../../assets/images/quick_payout.1d689e09.svg'
import featureImg3 from '../../../../assets/images/Fin_products.0e8a0582.svg'
import featureImg4 from '../../../../assets/images/Icon_support.c8382fc1.svg'
import featureImg5 from '../../../../assets/images/customerSupport.5780cd23.svg'
import featureImg6 from '../../../../assets/images/financialProduct.1b3d6eec.svg'
import Image from 'next/image';
import whyUsHero from '../../../../assets/images/whyUsHero.webp'
import bgImg from '../../../../assets/images/bgImg.webp'

const Features = () => {
    return (
        <section className='py-20'>
            <div className="my-container grid grid-cols-5 items-center">
                <div className='col-span-1 relative'>
                    <Image src={bgImg} alt='' className='absolute top-0 left-5 w-full h-full -z-10' />
                    <div className='mx-auto w-fit text-center mb-12'>
                        <h2 className='text-2xl font-bold'>Why <span className='text-[#145CC5]'>Choose Us</span></h2>
                        <p className='text-lg'>Why we are loved by our customers</p>
                    </div>
                    <Image src={whyUsHero} alt='' className='z-10' />
                </div>
                <div className='col-span-4 grid grid-cols-3 gap-5 pl-16'>
                    <FeatureCard img={featureImg1} heading={'Zero Investment'} desc={'Direct Payout in your bank account in short time'} />
                    <FeatureCard img={featureImg2} heading={'Quick Payout'} desc={'Build your business without any investment'} />
                    <FeatureCard img={featureImg3} heading={'Limitless Earnings'} desc={'Direct Payout in your bank account in short time'} />
                    <FeatureCard img={featureImg4} heading={'Training & Upskilling'} desc={'Get trained by finance and sales experts'} />
                    <FeatureCard img={featureImg5} heading={'Customer Support'} desc={'Customer Support'} />
                    <FeatureCard img={featureImg6} heading={'Zero Investment'} desc={'Trustworthy & high-rated products & categories'} />
                </div>
            </div>
        </section>
    );
};

export default Features;