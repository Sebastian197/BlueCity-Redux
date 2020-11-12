import React from 'react';
import PropTypes from 'prop-types'
// styled-components
import styled from 'styled-components';

const LogoFooter = styled.img`
  
`;

const ScreenLogo = ({ src, alt }) => {

    return (
        <LogoFooter
            className='img-fluid'
            src={src}
            alt={alt}
        />
    )
}

ScreenLogo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default ScreenLogo;