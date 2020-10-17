import { ThemeProvider } from 'styled-components';
import theme from 'static/css/theme';
import GlobalStyle from 'static/css/globalStyle';
import Meta from 'shared/meta';
import Header from 'components/header';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyle />
      <Header />
      {children}
      <div>footer</div>
    </ThemeProvider>
  );
};
export default Layout;
