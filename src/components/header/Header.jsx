import styled from 'styled-components';
import useViewport from 'shared/hooks/useViewport';
import LinkComponent from 'components/common/link';
import { MenuMobile, MenuDesktop } from 'components/menu';

const HeaderWrapper = styled.div`
  display: flex;
  padding: 15px 50px;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px dashed;
`;

const Header = ({ role }) => {
  const width = useViewport();

  return (
    <HeaderWrapper>
      <LinkComponent
        href="/"
        as=""
        img={{
          src: '/static/images/logo.png',
          alt: 'logo',
        }}
      />
      {width < 800 ? <MenuMobile role={role} /> : <MenuDesktop role={role} />}
    </HeaderWrapper>
  );
};

export default Header;
