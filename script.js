let cartProd = document.getElementById('cart-products');
let cart = []
let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let product = productsArray.find(function(p)){
    return p.id == id;
}
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';
xhr.open('GET',url + '/products');
xhr.responseType = 'json'
xhr.onload = function() {
    productsArray = xhr.response
    productsGrid.innerHTML = null;
    productsArray.forEach(p => {
        productsArray.push(p);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML = `
            <h2 class='product-name'>${p.name}</h2>
            <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
            <p class='product-price'><b>Price: </b>${p.price}$</p>
            <p class='product-description'><b>Description: </b>${p.description}</p>
            <a href='userProfile.html?id=${p.author_id}'>Seller profile</a>
            <button onclick="addProductToCart(${p.id})">Buy</button>
        `;
        productsGrid.append(pElem);
    });
}
xhr.send();
function openCart(){
    cartProd.classList.toggle('hide');
}

function addProductToCart (id) { 
    let product = productsArray.find(function(p)){
        return p.id == id;
    }
    cart.push(product)
 }