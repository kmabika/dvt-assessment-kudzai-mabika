// ArtistTracksBox Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from 'shared'
import theme from 'styles/theme'

// ___________________________________________________________________

export const ArtistTracksBox = styled(Box)`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-right: 1px solid ${theme.colors.gray};
    border-bottom: 1px solid ${theme.colors.gray};
    padding: ${theme.space[2]};

    transition: ${theme.transition.all};
    -webkit-tap-highlight-color: ${darken(0.05, theme.colors.quaternary)};

    &:hover {
      background: ${darken(0.05, theme.colors.quaternary)};
    }
  }
`
