const axois=require('axios')
const Rx=require('rxjs')
const express=require('express')
const app=express()
//promise
function pro(){
  axois.get('http://jsonplaceholder.typicode.com/users/')
  .then((users) => {
    app.get('/promise/users',(req,res)=>{
    res.send(users.data)
    });
  }).catch((err) => {
    res.send(err)
  });
}
pro();
// app.get('/promise/users',(req,res)=>{
//  // Rx.Observable.of(axois.get('http://jsonplaceholder.typicode.com/users/'))
//   //.toPromise()
//   //new Promise(axois.get('http://jsonplaceholder.typicode.com/users/'))
//   pro()
//   .then((users) => {
//     res.send(users)
//   }).catch((err) => {
//     res.send(err)
//   });
// })

const usingAsync=async ()=>{
              try{
                const users=await axois.get('http://jsonplaceholder.typicode.com/users/')
                app.get('/await/users',(req,res)=>{
                  res.send(users.data);
                });
              }
              catch(err){
                res.send(err)
              }                 
  }
app.listen(8080);
usingAsync();

// const usingAsync=async ()=>{
//   await axois.get('http://jsonplaceholder.typicode.com/users/')
//       .then((users) => {
//           app.get('/await/users',(req,res)=>{
//               res.send(users.data);
//           });
//   }).catch((err) => {
//      res.send(err)
//   });
//   }
// app.listen(8080);
// usingAsync();