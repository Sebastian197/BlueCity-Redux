import React from 'react';

// Components
import ScreenBrandNav from './ScreenBrandNav';
import ScreenItemsNav from './ScreenItemsNav';

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
            <ScreenBrandNav />

            <Navbar.Collapse
                id="basic-navbar-nav"
            >
                <ScreenItemsNav
                    history={history}
                />
            </Navbar.Collapse>

        </ContNavigation>
    )
}

export default ContainerNavigation;
