// Get data by using fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    if(!res.ok){
        throw "Response is not ok";
    }
    else {
        return res.json();
    }
} ).then((res)=>console.log(res))
.catch((err)=>console.log(err));


// set/post data using fetch API

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body : JSON.stringify({
        P_name: "Prottoy",
        P_id: 221,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>{
    if(!res.ok){
       throw "This is a post method response error";
    }
    else {
        return res.json();
    }
}).then((res)=>console.log(res))
.catch((err)=>console.log(err));


// Patch data using fetch API

fetch("https://jsonplaceholder.typicode.com/posts/101",{
    method: "PATCH",
    body : JSON.stringify({
       
        P_id: 111,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>{
    if(!res.ok){
       throw "This is a post method response error";
    }
    else {
        return res.json();
    }
}).then((res)=>console.log(res))
.catch((err)=>console.log(err));


// PUT/update data using fetch API


fetch("https://jsonplaceholder.typicode.com/posts/2",{
    method: "PUT",
    body : JSON.stringify({
        P_name: "Pinaky",
        P_id: 221,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>{
    if(!res.ok){
       throw "This is a post method response error";
    }
    else {
        return res.json();
    }
}).then((res)=>console.log(res))
.catch((err)=>console.log(err));

//delete API using fetch

fetch("https://jsonplaceholder.typicode.com/posts/2",{
method:"DELETE",
})
.then((res)=>{
    if(!res.ok){
       throw "This is a post method response error";
    }
    else {
        return res.json();
    }
}).then((res)=>console.log(res))
.catch((err)=>console.log(err));