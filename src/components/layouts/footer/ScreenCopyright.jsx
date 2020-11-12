import React from 'react';
import PropTypes from 'prop-types';

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

const ScreenCopyright = ({ href, content, children }) => {

    return (
        <Row>
            <CopyrightCol>
                <p>
                    {children}
                    <a
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='ml-2'
                    >
                        {content}
                    </a>
                    .
                </p>
            </CopyrightCol>
        </Row>
    )
}

ScreenCopyright.propTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default ScreenCopyright;