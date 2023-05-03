const { error } = require('console');
const fs = require('fs');

const path = 'products.json'

// Se creará una instancia de la clase “ProductManager”
class ProductManager {
    constructor(path){
        this.path = path;
        this.products = [];
    };

    getProducts(){
        fs.writeFile(this.path, '[]',(error)=>{
            if (error) {
                console.log(`Error: ${error}`)
            }
        });
        const data = this.products;
        return data;
    };

    addProducts(){
        
    }

}

const pm = new ProductManager(path);

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log('Primer llamado a getProduct',pm.getProducts());