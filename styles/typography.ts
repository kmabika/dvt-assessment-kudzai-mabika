// Typography
// ___________________________________________________________________

import { css } from 'styled-components'
import theme from './theme'
import { darken } from 'polished'

// ___________________________________________________________________

const Typography = css`

*::before,
*::after {
  box-sizing: border-box;
}

::selection {
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
}

html {
  font-size: 18px;
  box-sizing: border-box;
  border: 0;
  margin: 0;
}

body {
  color: ${theme.colors.text};

  font-size: ${theme.root.font.baseSize};
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.root.font.bodyLineHeight};
  letter-spacing: ${theme.root.font.baseLetterSpacing};

  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: 'pnum';

  text-rendering: geometricPrecision;
  font-feature-settings: 'pnum';
  font-variant-numeric: proportional-nums;
  font-variant-ligatures: discretionary-ligatures;
}

mark {
  background-color: ${theme.colors.quinary};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.root.font.headingLineHeight};
  letter-spacing: ${theme.root.font.headingLetterSpacing};
  margin: 0 0 ${theme.space[3]};
  transition: ${theme.transition.all};

  text-transform: capitalize;

  strong {
    font-weight: ${theme.fontWeights.regular};
  }
}

.text--xxxl {
  font-size: calc(${theme.fontSizes[4]});

  @media ${theme.mq.tablet} {
    font-size: calc(${theme.fontSizes[6]} / 1);
  }

  @media ${theme.mq.desktop} {
    font-size: calc(${theme.fontSizes[7]} / 1);
  }
}

h1,
.text--xxl {
  font-size: calc(${theme.fontSizes[3]});

  @media ${theme.mq.tablet} {
    font-size: calc(${theme.fontSizes[6]} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1.15);
  }

  @media ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[6]};
  }
}

h2,
.text--xl {
  font-size: calc(${theme.fontSizes[4]} / 1.15);

  @media ${theme.mq.tablet} {
    font-size: calc(${theme.fontSizes[5]} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1.15);
  }

  @media ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[5]};
  }
}

h3,
.text--lg {
  font-size: calc(${theme.fontSizes[3]});

  @media ${theme.mq.tablet} {
    font-size: calc(${theme.fontSizes[4]});
  }
}

h4,
.text--md {
  font-size: calc(${theme.fontSizes[3]} / 1.25);
  margin: 0 0 ${theme.space[4]};

  @media ${theme.mq.tablet} {
    font-size: calc(${theme.fontSizes[3]});
  }
}

h5,
.text--sm {
  font-size: ${theme.fontSizes[2]};
}

.text--xs {
  font-size: ${theme.fontSizes[1]};
  line-height: 1.15;
}

.text--xs {
  font-size: ${theme.root.font.xs};
}

p {
  font-size: ${theme.fontSizes[2]};
  font-weight: 400;
  line-height: ${theme.root.font.bodyLineHeight};
  margin: 0 0 ${theme.space[2]};

  @media ${theme.mq.tablet} {
    font-size: calc(${theme.fontSizes[1]} * 1.25);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

strong {
  font-weight: 500;
}

small {
  line-height: calc(${theme.root.font.bodyLineHeight} / 1.15);
}

mark {
  background-color: ${theme.colors.white};
  padding: 0 ${theme.space[1]};
}

.t--small {
  font-size: calc(${theme.fontSizes[1]} /s 1.5);
}

.t-underline {
  text-decoration: underline;
}

.t--uppercase {
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

a {
  text-decoration: underline;
  position: relative;
  z-index: 1;

  transition: ${theme.transition.all};

  color: inherit;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${darken(0.1, theme.colors.primary)};
  }
}

ul {
  list-style-type: none;

  li {
    list-style-position: outside;
    line-height: calc(${theme.root.font.bodyLineHeight} * 1.15);
    font-size: ${theme.fontSizes[2]};
  }
}
`

export default Typography

// ___________________________________________________________________
