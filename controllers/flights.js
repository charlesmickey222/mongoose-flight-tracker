import { Flight } from '../models/flight.js'

function newFlight(req, res){
  res.render('flights/new',{
    title:'Add Flight',
  })
}

function create(req,res){
  for (let key in req.body){
    if(req.body[key] === ''){ delete req.body[key]}
  }
  Flight.create(req.body)
  .then(
    res.redirect('/flights')
  )
  .catch(err=>{
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req,res){
Flight.find({})
.then(flights=>{
  res.render('flights',{
    title:'All Flights',
    flights,
  })
})
.catch(err=>{
  console.log(err)
  res.redirect('/flights')
})
}

function deleteFlight(req,res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight=>{
    res.redirect('/flights')
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/flights')
  })
}

function show(req,res){
  Flight.findById(req.params.id)
  .then(flight=>{
    res.render('flights/show',{
      title:'detailed view',
      flight,
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/flights')
  })
}
function edit(req,res){
  Flight.findById(req.params.id)
  .then(flight=>{
    res.render('flights/edit',{
    title:'update info for flight',
    flight,
    })
  })
}

function update(req,res){
  Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(flight=>{
    res.redirect(`/flights/${flight._id}`)
  }
  )
  .catch(err=>{
    console.log(err)
    res.redirect('/flights')
  })
}


export{
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  edit,
  update,
}