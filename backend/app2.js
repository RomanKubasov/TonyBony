const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;
const num = 3;

const query = `
  query strengthS($param: Int) {
  strengths(param: $param) {
   id,
   strength,
   type_id,
  },
}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startMe(){ 
  const res = await fetch('http://localhost:3001/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ 
    query,
    variables: {param: num},
  })
});
const r = await res.json();
console.log('RES--->', JSON.parse(JSON.stringify(r)).data);
return r;
}  

startMe();

app.listen(PORT, () => { console.log('Server is listen on PORT ',PORT); });

// {
//   query: `
//     query events ($containsId: [Int]) {
//       events(containsId: $containsId) {
//         id
//         name
//       }
//     }
//   `,
//   variables: {
//     containsId: [1,2,3]
//   }
// }
