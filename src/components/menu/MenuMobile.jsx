import { useState } from 'react';
import { map, get } from 'lodash';
import styled from 'styled-components';
import LinkComponent from 'components/common/link';
import MenuData from './MenuData';

const MenuMobileWrapper = styled.div`
  .menu-button {
    width: 50px;
    position: relative;
    height: 50px;
    background-color: transparent;
    border: 0;

    span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: ${({ theme }) => theme.purple};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
    }
    span:nth-child(1) {
      top: ${({ open }) => (open ? 'calc(50% - 2px)' : '20%')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
    span:nth-child(2) {
      top: ${({ open }) => (open ? 'calc(50% - 2px)' : '50%')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    span:nth-child(3) {
      top: ${({ open }) => (open ? 'calc(50% - 2px)' : '80%')};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }
  }

  .menu {
    position: absolute;
    list-style: none;
    background-color: white;
    left: 0;
    width: 100%;
    padding: 0 20%;
    border-bottom: 1px dashed;
  }
  .menu-item {
    text-decoration: none;
    padding: 10px 15px;
  }
`;

const MenuMobile = ({ role }) => {
  const [open, setOpen] = useState(false);
  const menuList = get(MenuData, role);
  return (
    <MenuMobileWrapper open={open}>
      <button type="button" className="menu-button" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>

      {open && (
        <ul className="menu">
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
        </ul>
      )}
    </MenuMobileWrapper>
  );
};
export default MenuMobile;
