import React from 'react';

// Componets
import { ScreenContainer } from '../utils/ScreenContainer';
import ScreenMap from './ScreenMap';

// react-bootstrap
import { Row, Col } from 'react-bootstrap';


const ContainerContact = () => {
    return (
        <ScreenContainer>
            <Row>
                <Col>
                    <ScreenMap />
                </Col>
            </Row>
        </ScreenContainer>
    )
}

export default ContainerContact;
