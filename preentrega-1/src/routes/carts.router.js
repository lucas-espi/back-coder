import { Router }  from 'express';
import ProductManager from "../files/productManager.js";
import __dirname from "../utils.js";
const router = Router();

const path = `${__dirname}/files/archivos/carts.json`;
const productManager = new ProductManager(path);

const pathCarts = `${__dirname}/files/archivos/productos.json`;
const productManagerCarts = new ProductManager(pathCarts);


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
      res.status(500).json({ error: 'Ocurrio un error en get /api/carts/' });
    }
  });

// Endpoint para agregar un nuevo producto, si repite id aumenta quantity en uno
router.post('/:cid', async (req, res) => {
  try {
    const { cid } = req.params;

    const prod = await productManagerCarts.getProductById(parseInt(cid));

    const carts = await productManager.getProducts();

    const existingProduct = carts.find((p) => p.id === parseInt(cid));

    if (existingProduct) {
      existingProduct.quantity += 1;
      await productManager.updateProduct(existingProduct.id, existingProduct);
    } else {
      const newProduct = { ...prod, quantity: 1 };
      const products = await productManager.addProduct(newProduct);
      res.json(products);
      res.status(201).json({ success: true, message: 'Product added successfully' });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
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