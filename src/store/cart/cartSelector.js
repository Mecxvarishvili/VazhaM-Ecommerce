export const getCartProducts = (state) => state.cart.products
export const  getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return JSON.parse( parts.pop().split(';').shift())
  }