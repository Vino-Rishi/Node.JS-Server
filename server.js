var http = require('http');
// mentioned server port
const port = 8081;
const toDoList = [ "learn","create","implement","publish" ];
http.createServer((req,res) => {
    const {method, url} = req;
   
   if(url === '/todos'){
// GET method
    if(method === 'GET'){
        res.writeHead(200, { 'Content-Type':'text/html' });
        //Execute on UI
        res.write(toDoList.toString());
// POST Method
    }else if(method === 'POST'){
        let body = "";
        req
        .on("error",(err)=>{
            console.log(err);
        })
        .on("data",(chunk)=>{
            body += chunk;
        })
        .on("end",()=> {
            body = JSON.parse(body);
            let newToDo = toDoList; 
            newToDo.push(body.item);
            console.log(newToDo);
        });
//DELETE Method
    }else if(method === "DELETE") {
        let body = "";
        req
        .on("error",(err)=>{
            console.error(err);
        })
        .on("data",(chunk)=> {
            body +=chunk;
        })
        .on("end",()=>{
            body = JSON.parse(body);
            
            let deleteThisItem = body.item;
            
        for(let i=0; i<toDoList.length; i++){
            if(toDoList[i] === deleteThisItem){
                toDoList.splice(i,1);
                break;
            }else {
                console.error("Error: Match Not Found");
                break;
            }
        }
        });
    }else {
        res.writeHead(501);
    }
   }else {
    res.writeHead(404);
   }
   res.end(); 
}).listen(port, () => {
    // Execute on Server in developer tools
    console.log(`Node Server started on port: ${port}`);
});