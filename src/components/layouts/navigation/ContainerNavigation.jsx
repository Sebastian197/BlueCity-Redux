import React from 'react';

// Components
import BrandNav from './BrandNav';
import ItemsNav from './ItemsNav';

// styled-components
import styled from 'styled-components';

// react-bootstrap
import { Navbar } from 'react-bootstrap';

const ContNavigation = styled(Navbar)`
    margin-bottom: 2em;
`;

const ContainerNavigation = ({ history }) => {
    return (
        <ContNavigation
            bg='light'
            expand='md'
        >
            <BrandNav />

            <Navbar.Collapse
                id="basic-navbar-nav"
            >
                <ItemsNav
                    history={history}
                />
            </Navbar.Collapse>

        </ContNavigation>
    )
}

export default ContainerNavigation;
