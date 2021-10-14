/* import Cookies from 'js-cookie';

export function getCart() {
  try {
    return JSON.parse(Cookies.get('cart'));
  } catch (err) {
    return [];
  }
}

export function setCart(value) {
  Cookies.set('cart', JSON.stringify(value));
} */

import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
