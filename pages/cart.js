import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import StripeCheckoutButton from '../components/StripeCheckoutButton';
import { setParsedCookie } from '../util/cookies';

const cartContainer = css`
  max-width: 1150px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    margin-top: 125px;
    margin-bottom: 100px;
    text-align: center;
    font-size: 36px;
  }

  h3 {
    text-align: center;
  }

  button {
    padding: 8px;
    margin: 50px 20px 50px 20px;
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

const priceWrapper = css`
  margin-top: 50px;
`;

const returnWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 10px;
  gap: 40px;

  .deleteButton {
    margin: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Cart(props) {
  const [cartItems, setCartItems] = useState(props.itemInCart);

  function calcTotal(cartItem) {
    return cartItem.reduce((accumulator, product) => {
      return accumulator + product.price * product.itemCount;
    }, 0);
  }

  function totalCount(cartItem) {
    return cartItem
      .map((product) => product.itemCount)
      .reduce((total, currentCount) => total + currentCount, 0);
  }

  function emptyCart() {
    setParsedCookie('cart', []);
    setCartItems([]);
  }

  const totalCart = calcTotal(cartItems);
  const totalItems = totalCount(cartItems);

  const deleteItem = (id) => {
    const currentItemInCart = [...props.cookieHolder];
    const newCurrentItemInCart = currentItemInCart.filter((p) => p.id !== id);
    setParsedCookie('cart', newCurrentItemInCart);
    setCartItems(newCurrentItemInCart);
  };

  const router = useRouter();
  const backToShop = () => {
    router.push('/shop');
  };

  return (
    <div css={cartContainer}>
      <h1> Shopping Cart</h1>
      <div css={returnWrapper}>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((product) => {
          return (
            <div key={`product-li-${product.id}`}>
              <h3>{product.name}</h3>

              <Image
                src={`/pictures/${product.id}.jpeg`}
                alt="product"
                width="100"
                height="100"
              />
              <div>
                <p>Bouquets: {product.itemCount}</p>
                <Navbar cartItemsBadge={totalItems} />
                <button
                  aria-label="Delete an item from the cart"
                  className="deleteButton"
                  onClick={() => deleteItem(product.id)}
                >
                  x
                </button>
                {console.log()}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div css={priceWrapper}>
          <h3>Total Price: {totalCart} €</h3>
          {console.log(totalCart)}
        </div>
        <StripeCheckoutButton price={totalCart} />

        <button onClick={backToShop}>Back To Shop</button>
        <button onClick={emptyCart}> Clear Cart</button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const { flowersData } = await import('../util/database');
  const { getProducts } = await import('../util/database');
  const products = await getProducts();

  const cookiesFromUrl = context.req.cookies.cart;
  // console.log(cookiesFromUrl);
  const cookieHolder = cookiesFromUrl ? JSON.parse(cookiesFromUrl) : [];
  // const cookieHolder = products ? products : [];

  const itemInCart = cookieHolder.map((p) => {
    const cartItem = products.find((item) => item.id === p.id);
    return {
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      itemCount: p.itemCount,
    };
  });
  return {
    props: {
      cookieHolder,
      itemInCart,
      products,
    },
  };
}
