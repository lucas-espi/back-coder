// Entrega nro 1 - Backend

//creo un ID numérico dinámico
const creaId = () => parseInt(Math.random() * 100000) 


//  Se creará una instancia de la clase “ProductManager”
 class ProductManager {
    constructor(){
        this.products = []
    };
    
    // Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
    getProducts(){
        return this.products
    };
    
    // Se llamará al método “addProduct” con los campos:
    // El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
    addProduct(prod){

        const newId = `ABC${creaId()}`; 
        
        const {code} = prod;
        
        const searchCode = this.products.some((p) => p.code === code);
        
        const newProducts = prod;

        if (searchCode) {
        return `El code ${code} esta repetido en otro producto anterior, no es posible cargarlo`
        } else{    
        this.products.push({ ...newProducts, id:newId});
        return this.products;
        }
    };


    // Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
    getProductById(prod){

        const {id} = prod;

        const searchId = this.products.find((p) => p.id == id);

        if (!searchId) {
            return `El code ${id} no se encuentra en la lista de productos`
        } else {
            return id
        }
    }
 };


 
 
 const teclado1 = {
    id:undefined,
     title: "TECLADO1",
     description:"TECLADO-MECANICO",
     price:4400,
     thumbnail:"Sin imagen",
     code:"abc123",
     stock:25, 
    };
const teclado2 = {
    id:undefined,
    title: "TECLADO2",
    description:"TECLADO-SEMI-MECANICO",
    price:2900,
    thumbnail:"Sin imagen",
    code:"abc1234",
    stock:25, 
};
const teclado3 = {
    id:undefined,
    title: "TECLADO3",
    description:"TECLADO-SEMI-MECANICO",
    price:3100,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25, 
};
const teclado4 = {
    id:undefined,
    title: "TECLADO4",
    description:"TECLADO-MECANICO",
    price:9100,
    thumbnail:"Sin imagen",
    code:"abc12345",
    stock:25, 
};



const pm = new ProductManager();


console.log("esto es el arreglo vacio:",pm.getProducts());

// Agrego teclado1 
console.log("esto proviene de addProduct:",pm.addProduct(teclado1));

// Agrego teclado2
console.log("esto proviene de addProduct code repetido:",pm.addProduct(teclado2));

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Agrego teclado3 per como tiene codigo repetido nos da un mensaje
console.log("esto proviene de addProduct code repetido:",pm.addProduct(teclado3));


// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log("esto es el arreglo con prodcutos agregados:",pm.getProducts());


// Con el metodo getProductById encontramos el producto, y si no encuentra nos avisa el error

//no encuentra
console.log("esto proviene de getProductById no encontrado:",pm.getProductById(teclado4));
