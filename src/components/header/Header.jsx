import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/" as="/">
      <a>Home</a>
    </Link>
    <Link href="/about" as="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Header;
