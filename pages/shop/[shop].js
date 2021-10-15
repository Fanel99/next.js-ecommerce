import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

const singlePageContainer = css`
  max-width: 1150px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  margin-top: 150px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  button {
    padding: 6px;
    margin-bottom: 50px;
    margin-top: 15px;
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
`;

const divAlign = css`
  margin: 0 auto;

  p {
    font-size: 22px;
  }
`;

const paraAside = css`
  margin: auto;
  border: 1px solid #000;
  padding: 20px;
  max-width: 500px;
  @media (max-width: 768px) {
    margin: 20px;
  }

  p {
    line-height: 1.5;
  }
`;

const button = css`
  button {
    margin: 15px 6px 20px 6px;
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
`;

export default function Product(props) {
  const [cart, setCart] = useState(getParsedCookie('cart') || []);

  const userCookieObject = cart.find(
    (cookieObj) => cookieObj.id === props.singleProduct.id,
  );

  const initialQty = userCookieObject ? userCookieObject.itemCount : 1;

  const [itemCount, setItemCount] = useState(initialQty);

  // add to cart
  const addToCart = () => {
    const currentCookie = getParsedCookie('cart') || [];

    const isItemInCart = currentCookie.some((cookieObject) => {
      return cookieObject.id === props.singleProduct.id; // id that comes from the URL
    });
    // Declare new Cookie
    let newCookie;

    if (isItemInCart) {
      const newCookieIndex = currentCookie.findIndex(
        (cookieObject) => cookieObject.id === props.singleProduct.id,
      );
      // update cookie with new value from increase/decrease button
      currentCookie[newCookieIndex].itemCount = itemCount;

      newCookie = currentCookie;
    } else {
      // add the product
      newCookie = [...currentCookie, { id: props.singleProduct.id, itemCount }];
    }
    setParsedCookie('cart', newCookie);
    setCart(newCookie);
  };

  function decreaseAmount() {
    if (itemCount === 0) {
      setItemCount(0);
    } else {
      setItemCount((prevAmount) => prevAmount - 1);
    }
  }

  function increseAmont() {
    if (itemCount === 15) {
      setItemCount(0);
    } else {
      setItemCount((prevAmount) => prevAmount + 1);
    }
  }

  return (
    <div css={singlePageContainer}>
      <div css={divAlign}>
        <Image
          src={`/pictures/${props.singleProduct.id}.jpeg`}
          alt="product"
          width="300"
          height="300"
        />
        <p>{props.singleProduct.price} €</p>
        <div css={button}>
          <button onClick={decreaseAmount}>-</button>
          {itemCount}
          <button onClick={increseAmont}>+</button>
        </div>

        <button onClick={addToCart}>Add To Cart</button>
      </div>
      <div css={paraAside}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aut
          maiores ut optio! Illum molestiae distinctio delectus vero asperiores!
          Eius, totam praesentium? Harum blanditiis reiciendis odit quidem velit
          nam, voluptatem, odio quas dolor asperiores fuga ipsam nobis. Eaque
          adipisci tempora accusamus quis modi. Incidunt, cumque eligendi
          veritatis nostrum neque assumenda quisquam reiciendis nemo asperiores
          nulla tempora at ducimus aliquam? Culpa reprehenderit nisi illo unde
          facilis id aut! Vitae, molestiae.{' '}
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const { flowersData } = await import('../../util/database');
  const { getProduct } = await import('../../util/database');

  const singleProduct = await getProduct(context.query.shop);

  // const idFromUrl = context.query.shop;

  // const singleProduct = flowersData.find((product) => {
  //   return idFromUrl === product.id;
  // });

  return {
    props: {
      singleProduct,
    },
  };
}
