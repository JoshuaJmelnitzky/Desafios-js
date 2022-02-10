let texto = document.createElement('ul');

let list = document.getElementById('productCart');

/* Funcion para mostrar producto en el carrito */
const addToCart = (cart, price, name) => {
    cart.onclick = () => {
        let docu = document.getElementById('classification');
        docu.className = "visibility";

        texto.innerHTML += `<li>${name} - ${price}</li>`;
        list.appendChild(texto);
    };
}



/* Producto 1 */
const addProductCart1 = document.getElementById('addToCart1');
let valor1 = document.getElementById('productName1').innerHTML;
let price1 = document.getElementById('productPrice1').innerHTML;
addToCart(addProductCart1, price1, valor1);

/* Producto 2 */
const addProductCart2 = document.getElementById('addToCart2');
let valor2 = document.getElementById('productName2').innerHTML;
let price2 = document.getElementById('productPrice2').innerHTML;
addToCart(addProductCart2, price2, valor2);

/* Producto 3 */
const addProductCart3 = document.getElementById('addToCart3');
let valor3 = document.getElementById('productName3').innerHTML;
let price3 = document.getElementById('productPrice3').innerHTML;
addToCart(addProductCart3, price3, valor3);

/* Producto 4 */
const addProductCart4 = document.getElementById('addToCart4');
let valor4 = document.getElementById('productName4').innerHTML;
let price4 = document.getElementById('productPrice4').innerHTML;
addToCart(addProductCart4, price4, valor4);

/* Producto 5 */
const addProductCart5 = document.getElementById('addToCart5');
let valor5 = document.getElementById('productName5').innerHTML;
let price5 = document.getElementById('productPrice5').innerHTML;
addToCart(addProductCart5, price5, valor5);

/* Producto 6 */
const addProductCart6 = document.getElementById('addToCart6');
let valor6 = document.getElementById('productName6').innerHTML;
let price6 = document.getElementById('productPrice6').innerHTML;
addToCart(addProductCart6, price6, valor6);

/* Producto 7 */
const addProductCart7 = document.getElementById('addToCart7');
let valor7 = document.getElementById('productName7').innerHTML;
let price7 = document.getElementById('productPrice7').innerHTML;
addToCart(addProductCart7, price7, valor7);

/* Producto 8 */
const addProductCart8 = document.getElementById('addToCart8');
let valor8 = document.getElementById('productName8').innerHTML;
let price8 = document.getElementById('productPrice8').innerHTML;
addToCart(addProductCart8, price8, valor8);

/* Producto 9 */
const addProductCart9 = document.getElementById('addToCart9');
let valor9 = document.getElementById('productName9').innerHTML;
let price9 = document.getElementById('productPrice9').innerHTML;
addToCart(addProductCart9, price9, valor9);