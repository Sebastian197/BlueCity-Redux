import React from 'react';

// Components
import ScreenLogo from './ScreenLogo';
import ScreenCopyright from './ScreenCopyright';
import ScreenListFooter from './ScreenListFooter';

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
                    <ScreenLogo
                        src='img/bluecity-dark.jpg'
                        alt='Logo'
                    />
                </Col>
                <Col
                    md={3}
                    className='mb-md-0 mb-3'
                >
                    <ScreenListFooter
                        title='Participant Organizations'
                    >
                        {[
                            { href: 'http://www.ieselrincon.es', content: 'IES El Rincón', target: '_blank', rel: 'noreferrer' },
                            { href: 'https://moodle.bernatelferrer.cat/', content: 'Institut Bernat el Ferrer', target: '_blank', rel: 'noreferrer' },
                            { href: 'http://iesesteveterradas.cat/', content: 'Institut Esteve Terradas', target: '_blank', rel: 'noreferrer' },
                            { href: 'https://www.furiouskoalas.com/', content: 'Furious Koalas', target: '_blank', rel: 'noreferrer' },
                        ]}
                    </ScreenListFooter>
                </Col>
            </RowFooter>

            <ScreenCopyright
                href='https://creativecommons.org/licenses/by-sa/3.0/'
                content='Creative Commons Attribution-Share Alike 3.0 License'
            >
                Copyright information: Unless otherwise specified, all text and images on this website are licensed under the
            </ScreenCopyright>
        </ContFoot>
    )
}

export default ContainerFooter;
