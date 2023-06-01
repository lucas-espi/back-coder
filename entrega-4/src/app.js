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
app.set('views', `${__dirname}/views`);

app.use('/', viewsRouter);



const server = app.listen(8080, () => { console.log(`Run server 8080`)});

const io = new Server(server);

// io.on('connection', socket =>{
//     console.log('New Client connection');

//     socket.on('message', data=>{
//         console.log(data);
//     });

//     socket.emit('evento_socket_individual', 'este mensaje solo lo resive el socket');

//     socket.broadcast.emit('evento_todos_menos_actual', 'Lo van a ver todos los clientes menos el actual')

//     io.emit('evento_todos', 'Todos reciben el mensaje')
// });

 
