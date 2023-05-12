import express from 'express';
import ProductManager from './ProducManager.js';
import { promises as fs } from 'fs';

const path = './files/Productos.json';
const app = express();
const productManager = new ProductManager(path);

// Endpoint para obtener todos los productos
app.get('/products', async (req, res) => {
    try {
      const { limit } = req.query;
  
      const products = await productManager.getProducts();
  
      if (limit) {
        const limitedProducts = products.slice(0, parseInt(limit));
        res.json(limitedProducts);
      } else {
        res.json(products);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Endpoint para obtener un producto por su ID
  app.get('/products/:pid', async (req, res) => {
    try {
      const { pid } = req.params;
      const product = await productManager.getProductById(parseInt(pid));
  
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  const PORT = 8080; // Puedes ajustar el puerto según tus necesidades

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});


// Comandos:
// Devuelve todos los productos
// localhost:8080/products

// Devuelve hasta el limite de 5 productos
// localhost:8080/products?limit=5

// Devuelve un producto por su ID
// localhost:8080/products/2

// Devuelve un error por no encontrar producto
// localhost:8080/products/20