'use client';

import React, { useState } from 'react';
import TopBanner from './TopBanner';
import Navbar from './Navbar';

const HeaderWrapper = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    return (
        <>
            <TopBanner isVisible={isBannerVisible} onClose={() => setIsBannerVisible(false)} />
            <Navbar isBannerVisible={isBannerVisible} />
        </>
    );
};

export default HeaderWrapper;
