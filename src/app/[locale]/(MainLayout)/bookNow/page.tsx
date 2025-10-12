import Book from '@/Component/BookNow/Book';
import BookHero from '@/Component/BookNow/BookHero';
import Breadcrumbs from '@/Component/BookNow/BreadCramp';
import PricingWithInfo from '@/Component/BookNow/PricingWithInfo';
import Review from '@/Component/BookNow/Review';
import React from 'react';

const BookNowPage = () => {
    return (
        <div>
            <BookHero/>
            <div className='flex justify-center items-center'>

            <Breadcrumbs/>

            </div>
            <Book/>
            <PricingWithInfo/>
            <Review/>
        </div>
    );
};

export default BookNowPage;