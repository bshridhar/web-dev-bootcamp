console.log('=======================================================');
console.log('Welcome to my shop');
console.log('=======================================================');
var product = require('faker');
for(var i = 0; i < 10; i++) {
    console.log(product.commerce.productName() + ' - ' + product.commerce.price());
}