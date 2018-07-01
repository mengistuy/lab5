const express=require('express')
const app=express()
const axois=require('axios')
const users={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
axois.get('http://jsonplaceholder.typicode.com/users/')
    .then((users) => {
        app.get('/users',(req,res)=>{
            res.send(users);
        });
}).catch((err) => {
    
});

// app.get('http://jsonplaceholder.typicode.com/users',(req,res)=>{
//     res.send(users);
// });
app.listen(8080);