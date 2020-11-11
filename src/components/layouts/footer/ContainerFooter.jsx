import React from 'react';

// Components
import Logo from './Logo';
import Copyright from './Copyright';
import ListFooter from './ListFooter';

// styled-components
import styled from 'styled-components';

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const ContFoot = styled(Container)`
    clear: left;
`;

const RowFooter = styled(Row)` 
  /*rgb(55,71,79)*/
  background-color: #37474F;
  color: #fff;
`;


const ContainerFooter = () => {
    return (
        <ContFoot fluid>
            <RowFooter>
                <Col
                    md={6}
                    className='mt-md-0 mt-3'
                >
                    <Logo />
                </Col>
                <Col
                    md={3}
                    className='mb-md-0 mb-3'
                >
                    <ListFooter
                        title='Participant Organizations'
                    />
                </Col>
            </RowFooter>

            <Copyright />
        </ContFoot>
    )
}

export default ContainerFooter;
