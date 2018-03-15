import styled, { injectGlobal } from 'styled-components';

/*
 * The feature of styled components is that they encapsulate the
 * styles by providing unique classnames. This ensures that the styles of
 * one component does not mix with the styles of other components.
 * However, sometimes you need to provide global CSS to be used across
 * the whole application. This is possible with injectGlobal method.
 * Defining fonts for typography is a good demonstration of such a need.
 *
 * Documentation: https://www.styled-components.com/docs/api#injectglobal
 */

injectGlobal`
  @font-face {
    font-family:"futura-pt-bold";
    src:url("https://use.typekit.net/af/ff35f0/00000000000000003b9af1e4/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/ff35f0/00000000000000003b9af1e4/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/ff35f0/00000000000000003b9af1e4/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-style:normal;font-weight:700;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/f7f60c/00000000000000000001522d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/f7f60c/00000000000000000001522d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/f7f60c/00000000000000000001522d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-style:italic;font-weight:400;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/4d053a/00000000000000000001522b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/4d053a/00000000000000000001522b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/4d053a/00000000000000000001522b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
    font-style:italic;font-weight:300;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/02671f/00000000000000000001522c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/02671f/00000000000000000001522c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/02671f/00000000000000000001522c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-style:normal;font-weight:400;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/0a97db/00000000000000000001522a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/0a97db/00000000000000000001522a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/0a97db/00000000000000000001522a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
    font-style:normal;font-weight:300;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/704d65/00000000000000000001522e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/704d65/00000000000000000001522e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/704d65/00000000000000000001522e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
    font-style:normal;font-weight:500;
  }

  @font-face {
    font-family:"lato";
    src:url("https://use.typekit.net/af/48f634/00000000000000000001522f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/48f634/00000000000000000001522f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/48f634/00000000000000000001522f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
    font-style:italic;font-weight:500;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

/*
 * The styles below use the color from th set.
 */
import colors from '../Colors/colorset';

/*
 * Typography component provides styles for basic typography elements
 * such as headers and paragraphs.
 */

export const Header1 = styled.h1`
  font-family: 'Open Sans';
  font-size: 32px;
  font-weight: 700;
  color: ${p => p.color || 'white'};
`;

export const Header1White = styled.h1`
  font-family: 'Open Sans';
  font-size: 32px;
  font-weight: 700;
  color: ${p => p.color};
`;

export const Header2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: ${p => p.color};
  line-height: 1.4em;
  margin: 0;
`;

export const Header2White = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  color: ${colors.white};
  line-height: 1.4em;
  margin: 0;
`;

export const Header3 = styled.h3`
  font-family: 'Open Sans';
  font-size: 16px;
  color: ${colors.grey};
  font-weight: 700;
  margin: 0;
`;

export const P = styled.p`
  font-family: lato;
  color: ${p => p.color};
  font-size: 20px;
  font-weight: 700;
`;

/*
 * In ordder to show in the story (documentation) what are the available
 * fonts, this component provides styles for each font. They are not
 * meant to be used in the other components, only in dpcumentation.
 */

export const FuturaBold = styled.p`
  font-family: futura-pt-bold;
`;

export const Lato = styled.p`
  font-family: lato;
`;
