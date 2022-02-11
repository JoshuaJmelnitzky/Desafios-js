/* Slider brand DOM */

const URLJsonBrand = 'dataBase/brands.json'

$.get(URLJsonBrand, function(response, status){
    if (status === 'success'){
        let brandsData = Object.values(response);

        for (brand of brandsData){

            $('#slider-marcas').append(`<div class="card card--radius card--width card--padding">

            <img src= ${brand.photo} class="card-img-top img-fluid brand__img--border" alt="logo marca ${brand.brand}">

            <div class="card-body">
                <p class="card-text">${brand.brand}</p>
            </div>

        </div>`)
        }
    }
})


/* Products DOM */

const URLProductsJson = 'dataBase/products.json'

let divContainer = $('.productsItems')

$.get(URLProductsJson, function(response, status){
    if (status === 'success'){
        let productsData = Object.values(response);

        for (let i=0; i < divContainer.length; i++){
           
            let divContainerItem = divContainer[i].id;
            
            let productsCategory = productsData.filter(product => product.productCategory === divContainerItem);
                  
            for (let j = 0; j < productsCategory.length; j++){

                $(`#slider-${divContainerItem}`).append(`
        
                    <div class="product">
                        <div class = "product-image">
                            <a href class = "image">
                                <img src=${productsCategory[j].productPhoto.photo1} class = "pic-1" alt= "${productsCategory[j].productBrand} ${productsCategory[j].productName}">
                                <img src=${productsCategory[j].productPhoto.photo2} class = "pic-2" alt= "${productsCategory[j].productBrand} ${productsCategory[j].productName}">
                            </a>
        
                            <p class="cart addCartButton" id="${productsCategory[j].id}">Añadir al carrito</p>
        
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
                                <a href="">${productsCategory[j].productBrand}</a>
                            </span>
        
                            <h3 class="title" id="productName2">
                                <a href="">${productsCategory[j].productName}</a>
                            </h3>
                            
                            <div class="price" id="productPrice2">$${productsCategory[j].productPrice}</div>
                        </div>
                
                    </div>
        
                `);
            }
        }
    }
})

    
/* Add products to the cart through addToCart button */

$(()=>{

    const URLJsonBtn = 'dataBase/products.json'

    $.get(URLJsonBtn, function(response, status){

        if (status === "success"){

            let productsData = Object.values(response);

            const btnAddCart = $('.addCartButton');
    
            for(let cartButon of btnAddCart){
        
                $(cartButon).on('click', function (event) {
        
                    const selected = productsData.find(product => product.id == event.target.id);
            
                    if(selected){
        
                        if(!localStorage.getItem('Product')){
                            saveLocal('Product', JSON.stringify([selected]));
                        }else{
                            let cartStorage = JSON.parse(localStorage.getItem("Product"));
            
                            cartStorage.push(selected);
            
                            saveLocal('Product', JSON.stringify(cartStorage));
                        }
                    }    
                })
            }
        }  
    })
})
