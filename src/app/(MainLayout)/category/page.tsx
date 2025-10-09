import HeroSection from '@/Component/Category/Hero';
import Packages from '@/Component/Category/Pakages';
import { getAllPackage } from '@/utils/api/api';
import React from 'react';

const Category = async() => {
    const packages = await getAllPackage();
    console.log("Packages:-----------><><><><><><------>", packages);
    return (
        <div>
            <HeroSection/>
            <Packages packages={packages}/>
        </div>
    );
};

export default Category;