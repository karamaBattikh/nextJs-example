import { get, map } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkComponent from 'components/common/link';
import MenuData from './MenuData';

const MenuWrapper = styled.ul`
  list-style: none;
  .menu-item {
    text-decoration: none;
    display: inline-block;
    padding: 10px 15px;
  }
`;

const Menu = ({ role }) => {
  const menuList = get(MenuData, role);
  return (
    <MenuWrapper>
      {map(menuList, (menu, index) => {
        const { href, as, label } = menu;
        return (
          <li className="menu-item" key={`menu-iten-${index}`}>
            <LinkComponent href={href} as={as}>
              {label}
            </LinkComponent>
          </li>
        );
      })}
    </MenuWrapper>
  );
};

Menu.propTypes = {
  role: PropTypes.string,
};

export default Menu;
