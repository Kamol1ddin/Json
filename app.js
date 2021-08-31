let res = fetch("http://localhost:3000/list");
let jso = res.then(res => res.json());
    jso.then(data => console.log(data));