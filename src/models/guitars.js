const guitars = [{
  id: 1,
  brand: 'Gibson',
  model: 'SG'
}]


function getAll() {

  return guitars

}

function getById(id) {
  let error = []
  let thisId = Number.parseInt(id)
  let thisGuitar = guitars.find(guitar => guitar.id === thisId)
  if (!thisGuitar) {
    error.push(`Guitar with id ${thisId} not found`)

    return {
      error
    }
  }
  return thisGuitar

}

function createGuitar(body) {
  let response
  let error = []
  const {
    brand,
    model
  } = body

  if (!brand || !model) {
    error.push('Please provide both brand and model.')
    response = error
  } else {
    let id = guitars.length + 1
    response = {
      brand,
      model,
      id
    }
    guitars.push(response)
  }


  return response

}

function updateGuitar(id, body) {
  let thisId = Number.parseInt(id)
  const {
    brand,
    model
  } = body
  let error = []
  let response

  let thisGuitar = guitars.find(guitar => guitar.id === thisId)
  if (!thisGuitar) {
    error.push(`Can't find guitar with id ${id}`)
    response = {
      error
    }
  } else if (!brand || !model) {
    error.push(`Please provide both brand and model fields.`)

    response = {
      error
    }

  } else {
    thisGuitar.model = model
    thisGuitar.brand = brand
    response = thisGuitar
  }
  return response
}

function destroyGuitar(id) {
  let thisId = Number.parseInt(id)
  let response
  let error = []
  let thisGuitar = guitars.find(guitar => guitar.id === thisId)
  if (!thisGuitar) {
    error.push(`Can't find guitar with id ${id}`)
    response = {
      error
    }
  } else {
    console.log(thisGuitar);
    let index = guitars.indexOf(thisGuitar)
    return guitars.splice(index, 1)
  }
  return response
}

module.exports = {
  getAll,
  getById,
  createGuitar,
  updateGuitar,
  destroyGuitar
}
