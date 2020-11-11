import React from 'react';

// Components
import Navigation from '../layouts/Navigation';
import ContainerContact from './ContainerContact';
import Footer from '../layouts/Footer';

const Contact = ({ history }) => {

    return (
        <>
            <Navigation
                history={history}
            />
            <ContainerContact />
            <Footer />
        </>
    )
};


export default Contact;
