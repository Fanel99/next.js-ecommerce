// import { useRouter } from 'next/router';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JkMemIHfsqDJpNUWwYM1LADmxWzUlNkHQf7Jpzgq0xD01acDK20mhYKH6b6EFOgG0UFhfbt24XwlYk9L5r5Jo4l00LeWekNZJ';

  // const router = useRouter();
  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
    // const thankYou = () => {
    //   router.push('/thankyou');
    // };
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Grandpa Boutique"
      billingAddress
      shippingAddress
      description={`Your total is € ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

// 4242 4242 4242 4242 - Exp: 01/28 - CVV: 123

export default StripeCheckoutButton;
