const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  //const token = req.headers['Authorization'];
  const token = req.headers['token'];

  if(!token) return res.status(401).json({
    message: 'usuário não autenticado'
  });

  jwt.verify(token, 'secret-key', (err, decoded)=> {
    // error
    if (err) {
      return res.status(401).json({
        message: 'usuário não autenticado'
      });
    }


    // success - setting req.userId
    req.userId = decoded.id;
    next();
  });
};
