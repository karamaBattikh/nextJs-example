import { ThemeProvider } from 'styled-components';
import theme from 'static/css/theme';
import GlobalStyle from 'static/css/globalStyle';
import Meta from 'shared/meta';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Meta />
        <GlobalStyle />
        <div>header</div>
        {children}
        <div>footer</div>
      </div>
    </ThemeProvider>
  );
};
export default Layout;
