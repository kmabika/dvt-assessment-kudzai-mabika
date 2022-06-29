import styled from 'styled-components';
import theme from 'styles/theme'

import {Flex} from 'shared'

export const PageLayoutContainer = styled.div`
  background: #fff;
  width: 100%;
`;

export const MainContent = styled.main`
  width: 100%;
  padding: 80px 100px;

  
@media only screen and (max-width: 600px) {
  padding: 20px 0px;
} 
`;


export const Wrapper = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 100vw;
  position: relative;
  background: ${theme.colors.background};

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }
`