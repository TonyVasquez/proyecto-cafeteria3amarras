const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productList = [];
productList.push({
  name: 'Yaroha de Peperoni Grande',
  price: 350,
  image: './assets/menu-tresamarras/yaroha+peperoni.jpg',
});
productList.push({
  name: 'Burrito',
  price: 200,
  image: './assets/menu-tresamarras/burrito-muestra.jpg',
});
productList.push({
  name: 'Sandwich Jamon y Queso',
  price: 125,
  image: './assets/menu-tresamarras/clubsandwich.jpg',
});

productList.push({
    name: 'Club Con papas',
    price: 275,
    image: './assets/menu-tresamarras/club+papas.jpg'
});

productList.push({
    name: 'Hamburguesas Con Papas',
    price: 225,
    image: './assets/menu-tresamarras/hamburgesa+papas.jpg'
});

productList.push({
    name: 'Hamburguesas Doble Carne',
    price: 200,
    image: './assets/menu-tresamarras/hamburgesa+planchadone.jpg'
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfo.appendChild(productInfoDiv);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);