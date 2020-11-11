import React from 'react';

// Componets
import ScreemMap from './ScreemMap';

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// styled-component
import styled from 'styled-components';

const ContContact = styled(Container)`
    height: 100vh;
    &:after { 
        content:''; 
        float:left;
        margin-bottom: 2em;
    }
`;

const ContainerContact = () => {
    return (
        <ContContact>
            <Row>
                <Col>
                    <ScreemMap />
                </Col>
            </Row>
        </ContContact>
    )
}

export default ContainerContact
