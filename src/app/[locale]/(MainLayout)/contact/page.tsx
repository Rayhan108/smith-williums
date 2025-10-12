import ContactBanner from '@/Component/Contact/ContactBanner';
import ContactForm from '@/Component/Contact/ContactForm';
import FAQSection from '@/Component/Landing/FAQ';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <ContactBanner/>
            <ContactForm/>
            <FAQSection/>
        </div>
    );
};

export default ContactPage;