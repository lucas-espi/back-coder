import { promises as fs } from 'fs';



export default class ProductManager{
    allProducts = [];

    constructor(filePath){
        this.path = filePath;
    };

    async getProducts(){
        try {
            const productFile = await fs.readFile(this.path, 'utf8');
            return JSON.parse(productFile);
            
        } catch (e) {
            await fs.writeFile(this.path, "[]")
            return `El archivo no existe, se creo [] en ${this.path}`
        }

    };
    
    async addProduct(product){
        try {

            // Se lee el archivo Productos.json
            const productFile = await fs.readFile(this.path, 'utf8');
            let newProduct = JSON.parse(productFile);

            // validación de id o code.
            const valid = newProduct.find((p) => p.id === product.id || p.code === product.code);
            if (valid) {
              throw new Error('Id o code *repetido*, no se puede crear un nuevo producto');
            };

            // Crear un nuevo producto con un ID autoincrementable
            const newProductId = [newProduct.length] -1;
            const newProductItem = { id: newProductId +1, ...product };
            newProduct.push(newProductItem);
  
            await fs.writeFile(this.path, JSON.stringify(newProduct, null, 2));
            return 'Objeto creado/agregado correctamente';
            
        } catch (error) {
            throw new Error(`Error en addProduct: ${error}`);
        }
       
    };

    async getProductById (id) {
        try {
            // Se lee el archivo Productos.json
            const productFile = await fs.readFile(this.path, 'utf8');
            const products = JSON.parse(productFile);
        
            const product = products.find((p) => p.id === id);
            if (!product) {
              throw new Error(`No se encontró ningún producto con el ID ${id}`);
            }
        
            return product;
          } catch (error) {
            throw new Error(`Error en getProductById: ${error}`);
          }
    };

    async updateProduct(id, updatedFields) {
        try {
          const productFile = await fs.readFile(this.path, 'utf8');
          const products = JSON.parse(productFile);
      
          const productIndex = products.findIndex((p) => p.id === id);
          if (!productIndex) {
            throw new Error(`No se encontró ningún producto con el ID ${id}`);
          }
      
          const updatedProduct = { ...products[productIndex], ...updatedFields };
          products[productIndex] = updatedProduct;
      
          await fs.writeFile(this.path, JSON.stringify(products, null, 2));
          return 'Producto actualizado correctamente';
        } catch (error) {
          throw new Error(`Error en updateProduct: ${error}`);
        }
      };
    
      async deleteProduct(id) {
        try {
          const productFile = await fs.readFile(this.path, 'utf8');
          let products = JSON.parse(productFile);
      
          const productIndex = products.findIndex((p) => p.id === id);
          if (!productIndex) {
            throw new Error(`No se encontró ningún producto con el ID ${id}`);
          }
      
          products.splice(productIndex, 1);
      
          await fs.writeFile(this.path, JSON.stringify(products, null, 2));
          return 'Producto eliminado correctamente';
        } catch (error) {
          throw new Error(`Error en deleteProduct: ${error}`);
        }
      };

      async addProductCart(product) {
        try {
          const productFile = await fs.readFile(this.path, 'utf8');
          let cart = JSON.parse(productFile);
    
          const cartIndex = cart.findIndex((p) => p.id === product.id);
          if (cartIndex !== -1) {
            cart[cartIndex].quantity++;
          } else {
            const newCartItem = { id: product.id, ...product, quantity: 1 };
            cart.push(newCartItem);
          }
    
          await fs.writeFile(this.path, JSON.stringify(cart, null, 2));
          return 'Producto agregado al carrito correctamente';
        } catch (error) {
          throw new Error(`Error en addProductCart: ${error}`);
        }
      };

};