const URLJson = "../dataBase/products.json"

/* Function to create product's card */

function showProducts(productsData, i){

    let comment = document.createComment(`Product ${i+1}`);

    $('#container').append(comment)

    $('#container').append(`<div class = "product product__background  productos__margin product__border col-lg-4 col-md-6">
    
                        <div class = "product-image">
                            <a href class = "image">
                                <img src=.${productsData[i].productPhoto.photo1} class = "pic-1" alt= "${productsData[i].productBrand} ${productsData[i].productName}">
                                <img src=.${productsData[i].productPhoto.photo2} class = "pic-2" alt= "${productsData[i].productBrand} ${productsData[i].productName}">
                            </a>
                            <p class="cart addCartButton" id="${productsData[i].id}">Añadir al carrito</p>
                            <ul class = "links">
                                <li class ="links_search">
                                    <a><i class="fa fa-search" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href=""><i class="fa fa-heart" aria-hidden="true"></i></a>
                                </li>
                            </ul>       
                        </div>

                        <div class = "content">
                            <span class="category">
                                <a href="">${productsData[i].productBrand}</a>
                            </span>
                            <h3 class="title" id="productName2">
                                <a href="">${productsData[i].productName}</a>
                            </h3>
                            
                            <div class="price" id="productPrice2">$${productsData[i].productPrice}</div>
                        </div>

                    </div>`);
}


/* Show products */

const showAllProducts = () => {

    $.get(URLJson, function(response, status){
        if (status === 'success'){
            let productsData = Object.values(response);
    
            for (let i = 0; i < productsData.length/2.7; i++){         
                showProducts(productsData, i)    
            }
        }
    }) 

}

showAllProducts()


/* Search item for product's name*/

$.get(URLJson, function(response, status){
    if (status === 'success'){

        $('.searchItem').on('input', () => {
            const productsData = Object.values(response).filter(search => search.productName.toLowerCase().includes($('.searchItem')[0].value.toLowerCase()))
            $('#container').empty()
            
            if(productsData.length > 0){
                for (let i = 0; i < productsData.length; i++){         
                    showProducts(productsData, i)    
                }
            }else{
                $('#container').append(`<div class = 'products__emptyCategory'>
                                            <h2>No tenemos este producto<h2>
                                            <img style = 'width: 400px; height: 500px' src='../assets/img/categoryEmpty.png'></img>
                                        </div>
                                    `)
            }

        })
    }
})


/* Filter products in a price range*/

$.get(URLJson, function(response,status){
    let minProductPrice = 0;
    let productPrice = Object.values(response).map(item => item.productPrice)
    let maxProductPrice = Math.max(...productPrice)

    const productFilter = () =>{
        const productsData = Object.values(response).filter(search => search.productPrice > minProductPrice && search.productPrice <= maxProductPrice);
        $('#container').empty();

        if(productsData.length > 0){
            for (let i = 0; i < productsData.length; i++){         
                showProducts(productsData, i)    
            }
        }else{
            $('#container').append(`<div class = 'products__emptyCategory'>
                                        <h2>No tenemos productos en este rango de precio<h2>
                                        <img style = 'width: 400px; height: 500px' src='../assets/img/categoryEmpty.png'></img>
                                    </div>
                                `)
        }
    }

    if(status === 'success'){

        $('.btn__filtrar--min').on('input', (e) => { 
            minProductPrice =  e.target.value;
            productFilter();
        })

        $('.btn__filtrar--max').on('input', (e) => { 
            maxProductPrice =  e.target.value;
            if (e.target.value === '') maxProductPrice = Math.max(...productPrice)
            productFilter();
        })

    }
})


/* Filter products by their categories  */

const productCategory = $('#productCategory')

productCategory.on("click", function(e){

    $.get(URLJson, function(response, status){
        if (status === 'success'){
       
            $('#container').empty()
    
            let productsData = Object.values(response).filter(cat => cat.productCategory === e.target.id.toLowerCase());

            if (productsData.length > 0){
                for (let i = 0; i < productsData.length; i++){         
                    showProducts(productsData, i)    
                }
            }else{
                $('.clasificacion').empty().append(`<div class = 'products__emptyCategory'>
                                                        <h3>No hay productos de esta categoría</h3>
                                                        <img style = 'width: 400px; height: 500px' src='../assets/img/categoryEmpty.png'></img>
                                                        <a href='../views/products.html'><button class='btn'>Volver</button></a>
                                                    </div>`)
                                                    
            }

        }
    }) 

})


/* Add products to the cart through addToCart button */

$(()=>{

    const URLJsonBtn = "../dataBase/products.json"

    $.get(URLJsonBtn, function(response, status){
        
        if (status === "success"){
            let productsData = Object.values(response);

            const btnAddCart = $('.addCartButton');
            const pCart = document.getElementById('classification');
            const ulCart = document.createElement('ul');

    
            for(let cartButon of btnAddCart){

                $(cartButon).on('click', function (event) {

                    let selected = productsData.find(product => product.id == event.target.id);
                    selected = ({...selected, qty: 1})
            
                    if(selected){
                        pCart.innerText = '';
                        ulCart.innerHTML += `<li>${selected.productName} - $${selected.productPrice}</li>`;
                        pCart.appendChild(ulCart);
            
            
                        if(!localStorage.getItem('Product')){
                            saveLocal('Product', JSON.stringify([selected]));
                        }else{
                            let cartStorage = JSON.parse(localStorage.getItem("Product"));

                            const id = cartStorage.findIndex(i => i.id === selected.id)

                            id === -1? cartStorage.push(selected): console.log(cartStorage[id].qty++)

                            saveLocal('Product', JSON.stringify(cartStorage));
                            
                        }
                    }    
                })
            }

        }
    })

})


