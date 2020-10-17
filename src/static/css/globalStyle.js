import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'quicksand';
  src: url(static/fonts/Quicksand-Bold.ttf) format('truetype');
  font-weight: 700;
}

@font-face {
  font-family: 'quicksand';
  src: url(static/fonts/Quicksand-Light.ttf) format('truetype');
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: 'quicksand';
  src: url(static/fonts/Quicksand-Medium.ttf) format('truetype');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'quicksand';
  src: url(static/fonts/Quicksand-SemiBold.ttf) format('truetype');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'quicksand';
  src: url(static/fonts/Quicksand-Regular.ttf) format('truetype');
  font-weight: 400;
  font-display: swap;
}


`;

export default GlobalStyle;
