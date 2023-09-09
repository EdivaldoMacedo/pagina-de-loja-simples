let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;

    // Atualizar o carrinho de compras na interface
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItemsList.innerHTML = "";
    cartItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    cartTotalElement.textContent = `Total: $${cartTotal}`;
}

function checkout() {
    // Envie os dados do carrinho para o servidor Python (não incluído neste exemplo)
    // Pode ser simulado com uma solicitação AJAX usando fetch() ou XMLHttpRequest.
    alert("Pedido Finalizado!");
    cartItems = [];
    cartTotal = 0;
    updateCart();
}
