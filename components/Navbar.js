import { css } from '@emotion/react';
import { Spin as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cart from '../public/pictures/cart.png';
import userlogin from '../public/pictures/user.png';

const headerStyles = css`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1150px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  z-index: 5;

  h2 {
    margin: 0;
    font-size: 28px;
    color: black;

    span {
      font-size: 28px;
      color: #dc3545;
    }
  }
  nav {
    @media (max-width: 1024px) {
      transform: translateX(100%);
      width: 100%;
      position: absolute;
      top: 50px;
      right: 0;
      background: white;
      padding: 15px 20px;
      max-width: 300px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      transition: 0.3s ease-out;
    }
  }
  nav.open {
    @media (max-width: 1024px) {
      transform: translateX(0);
      transition: 0.3s ease-in;
    }
    @media (max-width: 760px) {
      max-width: 100%;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 20px;
    @media (max-width: 1024px) {
      flex-direction: column;
      width: 100%;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #000;

      &:hover {
        color: #dc3545;
        font-size: 23px;
      }
    }
  }

  .navbar-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin-right: 15px;
      transition: transform 650ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  .hamburger-menu {
    font-size: 20px;
  }
`;
const badge = css`
  margin-top: 3px;
  padding: 2px;
  color: white;
  border-radius: 50%;
  position: absolute;
  background-color: red;
  margin-left: 35px;
`;

const hamburgerMenu = css`
  @media (max-width: 1024px) {
    display: none;
  }
`;

function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);

  // const toggleAccordion = () => {
  //   setShowMenu(!showMenu);
  // };
  const { cartItemsBadge } = props;

  const hide = () => {
    setShowMenu(false);
  };

  return (
    <header css={headerStyles}>
      <h2>
        Grandpa <span>Boutique</span>{' '}
      </h2>
      <nav className={showMenu ? 'open' : 'closed'}>
        <ul>
          <li>
            <Link onClick={hide} href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link onClick={hide} href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link onClick={hide} href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={hide} href="/galery">
              <a>Galery</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="navbar-navigation">
        <Link href="/cart">
          <a>
            <div css={badge}>{cartItemsBadge}</div>
            <Image src={cart} width="40" height="30" />
          </a>
        </Link>
        <Link href="/userlogin">
          <a>
            <Image src={userlogin} width="30" height="30" />
          </a>
        </Link>
        <Hamburger
          css={hamburgerMenu}
          toggled={showMenu}
          toggle={setShowMenu}
        />
      </div>
    </header>
  );
}

export default Navbar;
