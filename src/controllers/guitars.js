const model = require('../models/guitars')


function getAll(req, res, next) {
  let allGuitars = model.getAll()
  res.status(200).json({
    data: allGuitars
  })
}

function getById(req, res, next) {

  let id = req.params.id

  let thisGuitar = model.getById(id)
  if (thisGuitar.error) {
    next({
      status: 404,
      message: thisGuitar.error
    })
  } else {
    res.status(200).json({
      data: thisGuitar
    })
  }
}

function createGuitar(req, res, next) {
  let body = req.body
  let response = model.createGuitar(body)
  if (response.error) {
    next({
      status: 400,
      message: response.error
    })
  } else {
    res.status(201).json({
      response
    })
  }
}


function updateGuitar(req, res, next) {
  let id = req.params.id
  let body = req.body
  let response = model.updateGuitar(id, body)
  if (response.error) {
    next({
      status: 404,
      message: response.error
    })
  } else {
    res.status(200).json({
      response
    })
  }
}

function destroyGuitar(req, res, next) {
  let id = req.params.id
  let response = model.destroyGuitar(id)
  if (response.error) {
    next({
      status: 404,
      message: response.error
    })
  } else {
    res.status(200).json({
      response
    })
  }
}
module.exports = {
  getAll,
  getById,
  createGuitar,
  updateGuitar,
  destroyGuitar
}
