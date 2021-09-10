export const getCartProducts = (state) => state.cart.products
export const  getCartCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
    /* const value = `; ${document.cookie}`;
    const parts = value.split(`; Cart=`);
    if (parts.length === 2) return parts.pop().split(';').shift(); */
  }