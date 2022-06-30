import { createGlobalStyle } from 'styled-components'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'
import theme from 'styles/theme';

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    border: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  html,
  a,
  button {
    &:hover {
      color: ${theme.colors.primary};
    }
  } 
  li {
    list-style: none;
  }
  h6 {
    text-decoration: underline;
  }
  .image-container {
    position: relative;
    
    .image {
        width: 100%;
        height: 100%;
        position: relative !important;
        object-fit: cover; // Optional
    }
}

`

export default GlobalStyles

// ___________________________________________________________________
