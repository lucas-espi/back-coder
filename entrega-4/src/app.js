import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js'

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('view', `${__dirname}/views`);



const server = app.listen(8080, () => { console.log(`Run server 8080`)});

const io = new Server(server);