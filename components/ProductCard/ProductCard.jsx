import Image from 'next/image';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const ProductCard = (props) => {
    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className={`product-card flex gap-7 items-center rounded-lg p-8`} style={{ backgroundColor: `${props.color}` }} >
                <div className="img">
                    <Image src={props.img} alt={props.title} width={260} className='grayscale duration-300' />
                </div>
                <div className='pr-2'>
                    <h3 className='text-xl font-bold uppercase mb-1'>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div >
        </Tilt>
    );
};

export default ProductCard;