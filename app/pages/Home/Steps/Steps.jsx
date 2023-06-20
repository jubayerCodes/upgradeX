import React from 'react';
import Step from './Step/Step';
const video = 'https://drive.google.com/file/d/1Z8QO8lFkmbHynbUf-Sr1XIQNTi4R82iz/view?usp=sharing'

const Steps = () => {
    return (
        <section>
            <Step step={'1'} heading={'Download the App and Sign up as a ZET agent'} video={video} />
        </section>
    );
};

export default Steps;