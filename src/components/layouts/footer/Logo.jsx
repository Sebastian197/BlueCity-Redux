import React from 'react';

// styled-components
import styled from 'styled-components';

const LogoFooter = styled.img`
  
`;

const Logo = () => {
    return (
        <LogoFooter
            className='img-fluid'
            src='img/bluecity-dark.jpg'
            alt='logo'
        />
    )
}

export default Logo;
