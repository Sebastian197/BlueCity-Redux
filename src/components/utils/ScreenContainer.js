// react-bootstrap
import { Container } from 'react-bootstrap';

// styled-component
import styled from 'styled-components';

export const ScreenContainer = styled(Container)`
    height: 100vh;
    &:after { 
        content:''; 
        float:left;
        margin-bottom: 2em;
    }
`;

