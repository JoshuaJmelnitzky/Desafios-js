const URLJson = "../dataBase/products.json"

$.get(URLJson, function(response, status){
    if (status === 'success'){
        let productsData = Object.values(response);

        for (let i = 0; i < productsData.length/2.7; i++){
                  
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
    }
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

                    const selected = productsData.find(product => product.id == event.target.id);
            
                    if(selected){
                        pCart.innerText = '';
                        ulCart.innerHTML += `<li>${selected.productName} - $${selected.productPrice}</li>`;
                        pCart.appendChild(ulCart);
            
            
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

/* Filter products by their categorys  */




