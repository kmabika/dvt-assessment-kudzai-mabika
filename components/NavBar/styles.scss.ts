// Header Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from 'styles/theme'

// Elements
import { Flex } from 'shared';

// ___________________________________________________________________

export const Header = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

  background: ${theme.colors.primary};
  position: sticky;
  top: 0;
  left: 0;
  
  padding: ${theme.space[2]} ${theme.space[4]};
  width: 100%;
  z-index: 999;

  @media ${theme.mq.tablet} {
    padding: 0 ${theme.space[4]};
    height: ${theme.headerHeight};
  }
`

export const Logo = styled(Flex)`
  height: ${theme.headerHeight};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    
    svg {
      fill: ${theme.colors.white};
    }

    .logo {
      svg {
        width: 100px;
      }
    }
  }
`

export const SearchBar = styled.div`
flex: 1;
min-width: 70px;
background-color: white;
color: rgb(${(props) => props.theme.text});
padding: 0 1rem;
display: flex;
align-items: center;
`;

export const SearchInput = styled.input`
color: rgb(${(props) => props.theme.darkBackground});
border: none;
background-color: transparent;
resize: none;
outline: none;
width: 100%;
`;
