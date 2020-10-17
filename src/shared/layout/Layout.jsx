import { ThemeProvider } from 'styled-components';
import { withRouter } from 'next/router';
import theme from 'static/css/theme';
import GlobalStyle from 'static/css/globalStyle';
import Meta from 'shared/meta';
import Header from 'components/header';

const Layout = ({ children, router }) => {
  const { pathname } = router;
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyle />
      {pathname !== '/' && <Header />}
      {children}
      <div>footer</div>
    </ThemeProvider>
  );
};
export default withRouter(Layout);
