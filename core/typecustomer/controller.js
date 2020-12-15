const model = require('./model');

module.exports = {
  getAll
};


// getall method
async function getAll(req, res){
  let result = await model.findAll({
    raw: true,
    attributes: ['id', 'description']
  });

  res.status(200).json({
    content: result
  });

  //
  // try {
  //   let result = await model.findAll({
  //     raw: true,
  //     attributes: ['id', 'description']
  //   });
  //
  //   res.status(200).json({
  //     content: result
  //   });
  //
  // } catch (e) {
  //   res.status(500).json({
  //     error: error
  //   })
  // }

}
