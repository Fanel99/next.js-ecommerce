import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../util/database';

const shopContainer = css`
  max-width: 1150px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 30px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  margin-top: 200px;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

const shopCard = css`
  p {
    font-size: 22px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 8px;
    background-color: #0d0806;
    border: 1px solid #0d0806;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: #0d0806;
    }
  }

  img:hover {
    transform: scale(1.2);
    transition: all 1s;
  }
`;
export default function Products(props) {
  return (
    <div css={shopContainer}>
      {props.products.map((product) => {
        return (
          <div key={`shop-${product.id}`}>
            <div css={shopCard}>
              <Link href={`/shop/${product.id}`}>
                <a>
                  <h2>{product.name}</h2>
                </a>
                <Image
                  src={`/pictures/${product.id}.jpeg`}
                  alt="product"
                  width="300"
                  height="300"
                />{' '}
              </Link>

              <p>{product.price}€</p>
              <button>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
