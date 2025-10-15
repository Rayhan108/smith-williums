import ContactBanner from '@/Component/Contact/ContactBanner';
import ContactForm from '@/Component/Contact/ContactForm';
import FAQSection from '@/Component/Landing/FAQ';
import { getAllFaq } from '@/utils/api/api';
import React from 'react';

const ContactPage =async () => {
    const faq = await getAllFaq();
    return (
        <div>
            <ContactBanner/>
            <ContactForm/>
            <FAQSection faq={faq}/>
        </div>
    );
};

export default ContactPage;