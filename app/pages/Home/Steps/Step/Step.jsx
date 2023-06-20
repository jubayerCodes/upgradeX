import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import playStore from '../../../../../assets/images/downloadBtnDark.a0f01343.svg'
import { DefaultPlayer as Video } from 'react-html5video';
import steps from '../../../../../assets/videos/step3.mp4'

const Step = ({ step, heading, video }) => {
    return (
        <div>
            <div>
                <span>step {step}</span>
                <h2>{heading}</h2>
                <Link href={'#'} className='inline-block'>
                    <Image src={playStore} alt='' />
                </Link>
            </div>
            <div>
                <Video autoPlay loop>
                    <source src={'../../../../../assets/videos/step3.mp4'} type="video/webm" />
                </Video>
            </div>
        </div>
    );
};

export default Step;