import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ img, heading, desc }) => {
    return (
        <div className='py-5 px-8'>
            <Image src={img} width={115} alt='' />
            <div className='mt-3'>
                <h4 className='text-xl font-bold'>
                    {heading}
                </h4>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;