import React from 'react';

// styled-components
import styled from 'styled-components';

// react-bootstrap
import { Row, Col } from 'react-bootstrap';

const CopyrightCol = styled(Col)` 
  background-color: #263238;
  color: #fff;
  text-align: center;
  font-size: small;
`;

const Copyright = () => {
    return (
        <Row>
            <CopyrightCol>
                <p>
                    Copyright information: Unless otherwise specified, all text and images on this website are licensed under the
                    <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank' className='ml-2'>Creative Commons Attribution-Share Alike 3.0 License</a>
                    .
                </p>
            </CopyrightCol>
        </Row>
    )
}

export default Copyright;
