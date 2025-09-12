import AboutBanner from '@/Component/About/AboutBanner';
import Celebrating from '@/Component/About/Celebrating';
import VedioSection from '@/Component/About/VedioSection';
import WhatDrivesUs from '@/Component/About/WhatDrivesUs';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <VedioSection/>
            <WhatDrivesUs/>
            <Celebrating/>
        </div>
    );
};

export default AboutPage;