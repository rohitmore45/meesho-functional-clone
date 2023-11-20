
let cartItems = [];
onLoad();
function onLoad() {
    let cartItemsStr = localStorage.getItem('cartItems');
    cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
    displayProductOnHomePage();
    cartItemIcon()
}

function addProductToCart(ItemId) {
    cartItems.push(ItemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    cartItemIcon()
}

function cartItemIcon() {
    let cartItemElement = document.getElementById("cart-item");
    if (cartItems.length > 0) {
        cartItemElement.style.visibility = "visible"
        cartItemElement.innerText = cartItems.length;
    }
    else {
        cartItemElement.style.visibility = "hidden"
    }
}
function displayProductOnHomePage() {
    const mainContainerElement = document.querySelector(".main-container");
    if(!mainContainerElement){
        return;
    }
    let innerHtml = '';
    products.forEach(Item => {
        innerHtml += ` <div class="item-container">
                        <img src="${Item.image}" alt="item image" class="item-image">
                        <div class="data-container">
                        <div class="item-name">${Item.product_name}</div>
                        <div class="item-price">₹${Item.price}<span> onwards</span></div>
                        <div href="#" class="free-delivery">Free Delivery</div>
                        <button class="rating">${Item.rating.stars} ☆</button><span class="rating-span">${Item.rating.reviews}  Reviews</span>
                        <button class="cart-button" onclick = "addProductToCart(${Item.id})" >Add to Cart</button>
                         </div>
                    </div>`
    });
    mainContainerElement.innerHTML = innerHtml;
}    