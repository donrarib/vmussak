// setting timezone
process.env.TZ = 'America/Sao_Paulo';


// express
const express = require('express');
const app = express();


// routes file
const authRoute = require('./core/auth/route');
const typeCustomerRoute = require('./core/typecustomer/route');


// middlewares
const notFound = require('./middlewares/not-found');
const error = require('./middlewares/error');
const cors = require('./middlewares/cors');
const auth = require('./middlewares/auth');


// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// helmet - security
const helmet = require('helmet');
app.use(helmet());


// middleware cors, antes das rotas
app.use(cors);



// routes registradas
authRoute(app);
app.use(auth);
typeCustomerRoute(app);



// rota root
app.get('/', (req, res)=>{
  res.status(200).json({
    ok: true
  });
});



// rota erro
app.get('/error', (req, res)=>{
  throw new Error("essa rota gerou um throw de erro");
});



// middlewares - notfound, error
app.use(notFound);
app.use(error);



// subir o servidor
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log('API rodando na porta ' + port);
})
