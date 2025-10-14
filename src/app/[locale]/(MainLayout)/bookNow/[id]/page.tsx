/* eslint-disable @typescript-eslint/no-explicit-any */
import Book from '@/Component/BookNow/Book';
import BookHero from '@/Component/BookNow/BookHero';
import Breadcrumbs from '@/Component/BookNow/BreadCramp';
import PricingWithInfo from '@/Component/BookNow/PricingWithInfo';
import Review from '@/Component/BookNow/Review';
import { getSinglePackage } from '@/utils/api/api';
import React from 'react';

const BookNowPage =async ({params}:any) => {
const {id}=params
    const packages = await getSinglePackage(id);
    const data = packages?.data
    console.log("Packages:----------------->", data);
    const reviews = data?.review
    //   const reviews = Array.isArray(data?.review) ? data.review : [];
    return (
        <div>
            <BookHero data={data}/>
            <div className='flex justify-center items-center'>

            <Breadcrumbs  data={data}/>

            </div>
            <Book  data={data}/>
            <PricingWithInfo  data={data}/>
       <Review review={reviews} packageId={id} /> 
        </div>
    );
};

export default BookNowPage;