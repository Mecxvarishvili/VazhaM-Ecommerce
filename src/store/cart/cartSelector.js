export const getCartProducts = (state) => state.cart.products
export const  getCartCookie = (cName) => {
    const name = cName + "=";
    const cartProduct = document.cookie; //to be careful
    const cArr = cartProduct.replace(cName, "");
    return cArr.split()
    /* const value = `; ${document.cookie}`;
    const parts = value.split(`; Cart=`);
    if (parts.length === 2) return parts.pop().split(';').shift(); */
  }