const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// body parser configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// rota root
app.get('/', (req, res)=>{
  res.status(200).json({
    id: 10,
    name: 'Rafael Donato'
  });
});



// rota customers - params
app.get('/customers/:id', (req, res)=>{
  const id = req.params.id;

  res.status(200).json({
    id: id,
    name: `Customer ${id}`
  });
});



// rota customers - params query
app.get('/customers', (req, res)=>{
  //const active  = req.query.active;
  //const sex = req.query.sex;
  // ou use desconstrução de objetos
  const {active, sex} = req.query;

  res.status(200).json({
    id: 10,
    name: 'Cliente x',
    active: active,
    sex: sex
  });
});



// rota customers - params query
app.post('/customers', (req, res)=>{
  const customer = req.body;
  customer.ok = true;

  res.status(200).json(customer);
});



// subir servidor
app.listen(3000, ()=>{
  console.log('API rodando na porta 3000');
})
