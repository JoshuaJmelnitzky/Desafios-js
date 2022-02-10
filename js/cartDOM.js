let totalPrice = 0;
let idItem = 1;


/* Function to clear all items in the cart */
const deleteStorage = () => {
    localStorage.clear();
    location.reload();
}

itemsInCart = JSON.parse(localStorage.getItem("Product"))

/* Show all products added to cart */
if (itemsInCart && itemsInCart.length > 0){

    for(let i=0; i < itemsInCart.length; i++){

        totalPrice += itemsInCart[i].productPrice;

        $('#cart').prepend(`<div class = "cart__border">

                                <div class = "cart__detail col-md-4">
                                    <img src= .${itemsInCart[i].productPhoto.photo1}  style = "width: 50px">
                                    <li>${itemsInCart[i].productBrand} ${itemsInCart[i].productName}</li>
                                </div>
                            
                                <div class = "cart__price offset-md-4 col-md-2">
                                    $${itemsInCart[i].productPrice}
                                </div>

                                <div class = "col-md-2">
                                    <button id = 'btnItem${i+1}' class = "btn btn__deleteItem"><i class="fas fa-trash-alt" style=pointer-events:none></i></button>
                                </div>
                            
                            </div>`)
    }


    $('#checkout').append(` <div class = "col-md-10 col-lg-10 cart__border cart__checkout">
                                <h2>Resumen del pedido</h2>
                                <h3>$${totalPrice}</h3>
                            </div>
                        `)

                        
    $('#checkout').append(`<button id = 'btn' class = "btn btn__clearCart">Vaciar carrito<i class="fas fa-trash-alt cart__icon"></i></button>`)

    $('#btn').on("click", deleteStorage)

} 

/* This is displayed if the cart is empty */
else{

    $('#empty__cart').append(`<div class='emptyCart'>

                            <h2>No hay productos en el carrito</h2>
                            <div class='cartIcon'>
                                <i class="fas fa-cart-arrow-down"></i>
                            </div>

                            <a href="./products.html">
                                <button class = "btn btn__clearCart"> Ver productos </button>
                            </a>
                            
                        </div>
                    `)

}

/* Remove a chosen item from the cart */

$(() => {
    
    const btnDeleteCart = $('.btn__deleteItem');

    let itemCartId = itemsInCart.map((itemInCart) => ({...itemInCart, itemCartId: idItem++}))

    for(let deleteBtn of btnDeleteCart){
    
        $(deleteBtn).on('click', function (e) {

            const selected = itemCartId.find(product => `btnItem${product.itemCartId}` == e.target.id );

            const deleteItems = itemsInCart.findIndex(item => item.id == selected.id)

            if (selected){

                itemsInCart.splice(deleteItems,1);
                localStorage.setItem('Product', JSON.stringify(itemsInCart));
                location.reload();
   
            }
        
        })

    }

})

