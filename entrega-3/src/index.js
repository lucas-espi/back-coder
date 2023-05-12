import ProductManager from "./ProducManager.js";

const path = './files/Productos.json';

const teclado1 = {
    title: "TECLADO1",
    description:"TECLADO-MECANICO",
    price:4400,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25, 
   };
const teclado2 = {
   title: "TECLADO2",
   description:"TECLADO-SEMI-MECANICO",
   price:2900,
   thumbnail:"Sin imagen",
   code:"abc1234",
   stock:25, 
};
const teclado3 = {
   title: "TECLADO3",
   description:"TECLADO-MECANICO",
   price:8900,
   thumbnail:"Sin imagen",
   code:"abc12345",
   stock:25, 
};
const teclado4 = {
   title: "TECLADO4",
   description:"TECLADO-SEMI-MECANICO",
   price:1900,
   thumbnail:"Sin imagen",
   code:"abc123456",
   stock:25, 
};
const teclado5 = {
   title: "TECLADO5",
   description:"TECLADO-NUMERICO",
   price:1300,
   thumbnail:"Sin imagen",
   code:"abc1234567",
   stock:25, 
};
const teclado6 = {
   title: "TECLADO6",
   description:"TECLADO-MECANICO",
   price:4430,
   thumbnail:"Sin imagen",
   code:"bc123",
   stock:25, 
  };
const teclado7 = {
  title: "TECLADO7",
  description:"TECLADO-SEMI-MECANICO",
  price:2900,
  thumbnail:"Sin imagen",
  code:"bc1234",
  stock:25, 
};
const teclado8 = {
  title: "TECLADO8",
  description:"TECLADO-MECANICO",
  price:8900,
  thumbnail:"Sin imagen",
  code:"bc12345",
  stock:25, 
};
const teclado9 = {
  title: "TECLADO9",
  description:"TECLADO-SEMI-MECANICO",
  price:1900,
  thumbnail:"Sin imagen",
  code:"bc123456",
  stock:25, 
};
const teclado10 = {
  title: "TECLADO10",
  description:"TECLADO-NUMERICO",
  price:1300,
  thumbnail:"Sin imagen",
  code:"bc1234567",
  stock:25, 
};

const pm = new ProductManager(path);

// Primer llamado a getProduct, el cual devuelve un array vacio y crea Producto.json, en la carpeta files.
// console.log(await pm.getProducts())

// Agregamos los productos.
// console.log( await pm.addProduct(teclado1))
// console.log( await pm.addProduct(teclado2))
// console.log( await pm.addProduct(teclado3))
// console.log( await pm.addProduct(teclado4))
// console.log( await pm.addProduct(teclado5))
// console.log( await pm.addProduct(teclado6))
// console.log( await pm.addProduct(teclado7))
// console.log( await pm.addProduct(teclado8))
// console.log( await pm.addProduct(teclado9))
// console.log( await pm.addProduct(teclado10))


// Segundo llamado a getProducts, muestra los productos actualizados.
// console.log(await pm.getProducts());

// Buscamos el producto por su id.
// console.log('Producto buscado por id:', await pm.getProductById(2));
// Buscamos el producto por su id - no encontrado.
// console.log('Producto buscado por id:', await pm.getProductById(4));

// Buscamos el porducto por su id y lo modificamos.
// console.log('Producto modificado por id/parametro:', await pm.updateProduct(2, {code:"code3-modificado"}));

// Buscamos el porducto por su id y lo eliminamos.
// console.log('Producto eliminado por id:', await pm.deleteProduct(3));

// Ultimo llamado a getProducts, muestra los productos actualizados.
// console.log(await pm.getProducts());

