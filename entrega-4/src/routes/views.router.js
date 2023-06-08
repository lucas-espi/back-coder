import { Router } from "express";
import __dirname from "../utils.js";
import ProductManager from "../files/productManager.js";

const router = Router();

const path = `${__dirname}/files/archivos/productos.json`;
const productManager = new ProductManager(path);

router.get("/", async (req, res) => {

    // Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento

    try {

        const products = await productManager.getProducts();
    
        res.render('home', {products});
    
    } catch (error) {
        res.status(500).json({ error: error.message });
      }

});

// “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” 
// en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, 
// ésta trabajará con websockets.


router.get("/realtimeproducts", async (req, res) => {
    try {

        const products = await productManager.getProducts();
    
        res.render('realTimeProducts', {products});
    
    } catch (error) {
        res.status(500).json({ error: error.message });
      }  
});




export default router;