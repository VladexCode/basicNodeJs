//importr
const http= require('http');
//declaramos variables

//declaramos funciones

//execute

http.createServer((req,res)=>{

//res.setHeader('Conten-Disposition','attachment; filename=lista.csv');
//res.writeHead(200,{'Content-Type': 'application/csv'});
res.writeHead(200,{'Content-Type':'application/json'})

res.write('id,nombre\n');
res.write('1,vladimir\n');
res.end();

}).listen(4200);

console.log("funciona en el puerto 4200");