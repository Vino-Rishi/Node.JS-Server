var http = require('http');
// mentioned server port
const port = 8081;
http.createServer((req,res) => {
   res.writeHead(200, {'Content-Type' : 'text/html'});
   //Execute on UI
   res.write('<h2>Hey node server started just now!!!</h2>');
   res.end(); 
}).listen(port, () => {
    // Execute on Server in developer tools
    console.log(`Node Server started on port: ${port}`);
});