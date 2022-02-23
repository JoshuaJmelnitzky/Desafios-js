/* Save to local storage */
const saveLocal = (key, value) => { localStorage.setItem(key, value)};


/* Validate if a number is between an interval*/
const validator = (numMin, num, numMax) =>{
    
    while(num < numMin || num > numMax || num == ""){
        num = prompt(`Error! El número debe ser entre ${numMin} y ${numMax}. Ingrese nuevamente: `);
    }

    return parseInt(num);
}


/* This function add the product price to the cart and update the stock */
const addToCart = (optionItem , quantity , optionCategory) => {
    const found = products.find((producto) => (producto.productItem === optionItem) && (producto.productItemCategory === optionCategory));

    if (found.isStock(quantity)){
        cart += (quantity* found.productPrice);
        products[optionItem-1].productStock -= quantity;
        cartDetail.push(`${found.productName} con un precio de $${found.productPrice*quantity}`);
        alert ("Producto agregado a la cuenta");
    }

    return true;
}


/* Show the detail of products added to the cart and their prices  */
const detailCart = () =>{
    let menu = "Los productos agregado al carrito son: \n ";

    for (let cart of cartDetail){
       menu +=  "--> " + cart + '\n'
    }

    menu += `El total de la compra es de $${cart}`;
    return prompt(menu);
};


/* Show the main menu that contains the type of products offered */
const showMainMenu = () =>{
    let menu = "¿Qué tipo de producto estas buscando?: \n";

    productTypes.forEach((product)=>{
        menu += product.id + ".-" + product.name + "\n";
    });

    menu += (productTypes.length + 1) + ".-Salir" ;
    return validator(1, parseInt(prompt(menu)), productTypes.length + 1);
};


/* Show a sub-menu that contains the available products into a chosen category  */
const showProductsss = (choice) => {
    let menuProducts = "Elija el producto que desea agregar al carrito: \n";
    const productChoice = products.filter ((product)=>product.productItemCategory == choice)

    productChoice.forEach((cat, i)=>{
        menuProducts +=  i+1 + ".- " + cat.productName  + "  --->  " + " $" +cat.productPrice + "\n";
    })

    menuProducts += (productChoice.length + 1) + ".- Volver";
    return validator(1, parseInt(prompt(menuProducts)), productChoice.length + 1);
}


/* Show the options corresponding to the payment option menu */
const showPaymentMethods= () => {
    let menu = "Elija la forma en que desea realizar el pago: \n";

    paymentMethods.forEach((product)=>{
        menu += product.id + ".-" + product.methodName + "\n";
    });
    
    menu += (paymentMethods.length + 1) + ".-Salir" ;
    return validator(1, parseInt(prompt(menu)), paymentMethods.length + 1);
};


/* Payment options */
const methodPayment = (payment, cart) => {
    switch(payment){
        case 1:
            debitCard(cart);
            break
        case 2:
            let installments = parseInt(prompt("¿En cuántas cuotas desea realizar la compra? Se permite entre 1 y 12 cuotas: "));
            cart = creditCard(validator(1, installments, 12), cart);
            break
    }
    return cart;
}


/* card */
const card = () => {
    cardHolder = prompt("Ingrese el nombre del titular de la tarjeta: ");
    cardNumber = prompt("Ingrese los 16 números de la tarjeta: ")
    expireDate = prompt("Ingrese la fecha de vencimiento: ");
    secureCode = prompt("Ingrese el código de seguridad: ");
    document = prompt("Ingrese el DNI del titular de la tarjeta: ");
}


/* Debit card */
const debitCard = (cart) => {
    card();
    return cart;
}


/* report costs of payments in installments with credit card  */
const validateInstallments = (installments, cart) => {
    let choice = prompt(`El precio final comprando en ${installments} cuotas es de $${cart}. Desea continuar? S/N`);
    return choice === "S"? true: false; 
}


/* Credit card and add the interest to pay*/
const creditCard = (installments, cart) => {
    if (installments == 1){
        return validateInstallments(installments, cart) === true? cart: false; 
    }

    else if (installments > 1 && installments < 4){
        return validateInstallments(installments, cart * 1.15) === true? cart * 1.15: false; 
    }

    else if (installments > 3 && installments < 7){
        return validateInstallments(installments, cart * 1.30) === true? cart * 1.30: false; 
    }

    else if (installments > 6 && installments < 13){
        return validateInstallments(installments, cart * 1.45) === true? cart * 1.45: false; 
    }

    card();
}


/* Sort product list by price */
// products.sort(function (a, b) {
//     if (a.price > b.price) {
//       return 1;
//     }
//     if (a.price < b.price) {
//       return -1;
//     }
//     return 0;
//   });



