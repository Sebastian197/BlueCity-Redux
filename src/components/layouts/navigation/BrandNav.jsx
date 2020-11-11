import React from 'react';

// styled-components
import styled from 'styled-components';

// react-bootstrap
import { Navbar } from 'react-bootstrap';

const Icon = styled.img`
    width: 1em;
`;

const BrandNav = () => {
    return (
        <>
            <Navbar.Brand href='/main'>
                <Icon
                    src='img/bluecity-icon.jpg'
                    alt='icon'
                />
                Bluecity
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls='basic-navbar-nav'
            />
        </>
    )
}

export default BrandNav;
