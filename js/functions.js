/* Save to local storage */
const saveLocal = (key, value) => { localStorage.setItem(key, value)};


/* Count quantity of items in cart  */
const countItems = () => {
    let cartStorage = JSON.parse(localStorage.getItem("Product"));
    if (cartStorage) return cartStorage.map(productosCart=>productosCart.qty).reduce((prev,next) => prev+next,0)
}

$('.cartWidget').append(countItems())





