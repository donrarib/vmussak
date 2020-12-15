const jwt = require('jsonwebtoken');

module.exports = {
  login
};



// login method
function login(req, res){
  if (req.body.login == 'admin' && req.body.pass == '123'){
    const token = jwt.sign({id: 1}, 'secret-key', {
      expiresIn: 3000
    });


    // response ok
    return res.status(200).json({
      token: token
    });
  }

  // response unauthorized
  return res.status(401).json({
    message: 'login ou senha incorretos'
  });
}
