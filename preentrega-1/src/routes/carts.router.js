import { Router }  from 'express';
import ProductManager from "../files/productManager.js";
import __dirname from "../utils.js";
const router = Router();

const path = `${__dirname}/files/archivos/productos.json`;
const productManager = new ProductManager(path);


// Endpoint para obtener todos los productos
router.get('/', async (req, res) => {
    try {
      const { limit } = req.query;
  
      const carts = await productManager.getProducts();
  
      if (limit) {
        const limitedProducts = carts.slice(0, parseInt(limit));
        res.json(limitedProducts);
      } else {
        res.json(carts);
      }
    } catch (error) {
      res.status(500).json({ error: 'Ocurrio un error en get/' });
    }
  });

// Endpoint para agregar un nuevo producto
router.post('/', async (req, res) => {
    try {
      const prod = req.body;
      const carts = await productManager.addProduct(prod);

      res.json(carts);
      res.status(201).json({ success: true, message: 'Product added successfully' });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


// Endpoint para eliminar un producto por su ID
router.delete('/:pid', async (req, res) => {
    try {
      const { pid } = req.params;
  
      const carts = await productManager.deleteProduct(parseInt(pid));
  
      res.json({ message: `Producto ${carts} eliminado correctamente` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  export default router;