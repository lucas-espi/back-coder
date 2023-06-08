const socket = io();


const formProduct = document.getElementById('formProd');


formProduct.addEventListener('submit', evt=>{
    evt.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const thumbnail = document.getElementById('thumbnails').value;
    const code = document.getElementById('code').value;
    const stock = document.getElementById('stock').value;
    const newPorduct = {title, description,price,thumbnail,code,stock}
    socket.emit('nuevo-producto', newPorduct);


})

socket.on('listProducts',async data =>{
    
    console.log('esto del otro lado',data)

});




