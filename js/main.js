alert("Bienvenido a Hardbuy - Tienda de hardware")

const main = () => {
    do {
        let categoryProduct = showMainMenu();
        if (categoryProduct == 5) break;

        let product = showProducts(categoryProduct);
        if (product == 4) {
            main();
            break;
        }

        let quantity = parseInt(prompt("Ingrese la cantidad a adquirir: "));
        addToCart(product, quantity, categoryProduct);

        resp = prompt("Desea agregar más productos al carrito?  S/N");

    } while (resp === "S");
}

/* Execute main function */
main()


/* Show the total price of the products added to the cart*/
if (cart > 0) {
    detailCart()
    let paymentChoice = showPaymentMethods();
    cart = methodPayment(paymentChoice, cart);
    cart != false && paymentChoice != 3? alert(`El monto final a pagar es de $${cart}`): alert("Compra cancelada");
} 

else {
    alert("Gracias por visitar nuestra tienda :)");
}

