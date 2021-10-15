import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const { cartItemsBadge } = pageProps;

  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
  }

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Roboto', sans-serif;
          }
          ul {
            text-decoration: none;
          }
        `}
      />
      <Navbar />
      {cartItemsBadge}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
