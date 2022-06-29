// Sideboard Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from 'styles/theme'
import { Box, Flex } from 'shared'

// ___________________________________________________________________

export const Billboard = styled(Flex)`
  overflow: hidden;
  padding-top: calc(${theme.space[5]});
  position: relative;
  height: auto;
  width: 100%;
  z-index: 99;

  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    position: sticky;
    top: ${theme.headerHeight};
    height: calc(100vh - ${theme.headerHeight});
  }

  .inner {
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .contact {
      flex-wrap: wrap;
      opacity: 0;
      transform: ${theme.transform.matrix.from};
      width: 100%;

      &.show {
        transition: ${theme.transition.all};
        opacity: 1;
        transform: ${theme.transform.matrix.to};
      }
    }
  }

  .scroll-arrow {
    margin-top: auto;
    margin-left: auto;

    span {
      transform: rotate(90deg);
      width: ${theme.space[6]};

      svg {
      }
    }
  }
`

export const Telephone = styled(Box)``
