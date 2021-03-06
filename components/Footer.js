import { css } from '@emotion/react';
import Link from 'next/link';

const footer = css`
  background-color: #252525;
  color: #fff;
  padding: 50px 0;
`;

const containerFooter = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  text-align: center;
  padding: 0 20px;
  h4 {
    margin-bottom: 20px;
    font-size: 25px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }
  @media (max-width: 1024px) {
  }
`;

const firstDiv = css`
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const secondDiv = css`
  ul {
    text-decoration: none;
    list-style: none;

    li {
      margin-bottom: 10px;
      font-size: 18px;
    }

    a {
      color: #fff;
      text-decoration-line: none;

      &:hover {
        color: red;
      }
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const thirdDiv = css`
  p {
    margin: 14px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;
const copyRight = css`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={containerFooter}>
        <div css={firstDiv}>
          <h4>Grandpa Flowers</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ad
            quo vel, neque enim magnam labore possimus reiciendis vero officiis
            eius incidunt saepe nam architecto iusto alias rem asperiores quia
            exercitationem ullam nisi consequuntur esse tempore? Necessitatibus
            maiores Dicta quis nesciunt odio nulla dolor vitae, porro saepe?
            Laudantium, voluptatem?
          </p>
        </div>

        <div css={secondDiv}>
          <h4>Useful Link</h4>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/galery">
                <a>Galery</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        <div css={thirdDiv}>
          <h4>Contact</h4>
          <p>Adress: Wolfengasse 3, Viena</p>
          <p>Phone: +43 1 515 23</p>
          <p>Email: office@google.at</p>
        </div>
      </div>
      <div css={copyRight}>??2021 Fanel Secara </div>
    </footer>
  );
}
