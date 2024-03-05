var http = require('http');
// mentioned server port
const port = 8081;
const toDoList = ["learn","create","implement","publish"];
http.createServer((req,res) => {
    const {method, url} = req;
   
   if(url === '/todos'){
    if(method === 'GET'){
        res.writeHead(200);
        //Execute on UI
        res.write(toDoList.toString());
    }
   }
   res.end(); 
}).listen(port, () => {
    // Execute on Server in developer tools
    console.log(`Node Server started on port: ${port}`);
});