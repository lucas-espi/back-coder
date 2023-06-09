import { Router } from "express";
import ProductManager from "../files/productManager.js";
import __dirname from "../utils.js";
const router = Router();


const path = `${__dirname}/files/archivos/productos.json`;
const productManager = new ProductManager(path);


// Endpoint para obtener todos los productos
router.get('/', async (req, res) => {
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
router.get('/:pid', async (req, res) => {
    try {
      const { pid } = req.params;
      const products = await productManager.getProductById(parseInt(pid));
  
      res.json(products);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
});

// Endpoint para agregar un nuevo producto
router.post('/', async (req, res) => {
    try {
      const prod = req.body;
      const products = await productManager.addProduct(prod);

      res.json(products);
      res.status(201).json({ success: true, message: 'Product added successfully' });

    } catch (error) {
      res.status(500).json({ error: 'Ocurrio un error en get /api/products/' });
    }
  });


// Endpoint para eliminar un producto por su ID
router.delete('/:pid', async (req, res) => {
    try {
      const { pid } = req.params;
  
      const product = await productManager.deleteProduct(parseInt(pid));
  
      res.json({ message: `Producto ${product} eliminado correctamente` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  export default router;
