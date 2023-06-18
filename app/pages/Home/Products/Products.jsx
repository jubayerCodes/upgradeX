import React from 'react';
import product1 from '../../../../assets/images/CC.webp'
import product2 from '../../../../assets/images/Loan.webp'
import product3 from '../../../../assets/images/BNPL.webp'
import product4 from '../../../../assets/images/AccountSave.webp'
import ProductCard from '@/components/ProductCard/ProductCard';
import bgImage from '../../../../assets/images/decImg.svg'
import Image from 'next/image';

const Products = () => {
    return (
        <section className='py-40 mt-2 products-section relative'>
            <Image src={bgImage} width={340} className='absolute top-5 left-0' />
            <Image src={bgImage} width={340} className='absolute bottom-0 right-0' />

            <div className='mx-auto w-fit text-center mb-12'>
                <h2 className='text-2xl font-bold'>Products on ZET</h2>
                <p className='text-lg'>We are trusted by best brand in the country</p>
            </div>
            <div className="my-container grid grid-cols-2 gap-10">
                <ProductCard title={'CREDIT CARDS'} desc={'100% Contactless Application Process with Instant Approval From Top Banks.'} img={product1} color={'#edffec'} />
                <ProductCard title={'LOANS'} desc={'100% online process. Instant offers. Affordable Rate of Interest on loans.'} img={product2} color={'#fff1ca'} />
                <ProductCard title={'BUY NOW PAY LATER'} desc={'Short-term financing that allows consumers to make purchases and pay for them over time.'} img={product3} color={'#FFEEE7'} />
                <ProductCard title={'SAVING ACCOUNTS'} desc={'ZET offers range of savings account that suits your personal needs for the banking.'} img={product4} color={'#fff5e7'} />
            </div>
        </section>
    );
};

export default Products;