import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkWrapper = styled.a`
  font-family: 'quicksand';
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.purple};
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.orange};
  }
`;

const LinkImgWrapper = styled.img`
  width: 200px;
  height: 50px;
  cursor: pointer;
`;

const LinkComponent = ({ children, href, as, img }) => (
  <Link href={href} as={as || href} passHref>
    {img ? <LinkImgWrapper src={img.src} alt={img.alt} /> : <LinkWrapper>{children}</LinkWrapper>}
  </Link>
);

LinkComponent.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  as: PropTypes.string,
  img: PropTypes.object,
};

export default LinkComponent;
