import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js'

import ProductManager from './files/productManager.js';
const path = `${__dirname}/files/archivos/productos.json`;
const productManager = new ProductManager(path);

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);



const server = app.listen(8080, () =>  console.log(`Run server 8080`));
const io = new Server(server, { cors: { origin: "*" } });



io.on('connection', socket =>{
    console.log('Nuevo cliente conectado');
    

    socket.on('nuevo-producto', async data=>{

        await productManager.addProduct(data);
        
        const listProducts = await productManager.getProducts();
        
        io.emit('listProducts', listProducts)

    });

});
