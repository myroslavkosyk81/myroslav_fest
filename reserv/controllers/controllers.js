var Ticket = require("../models/model");
module.exports = {

  mainPage: function (req, res, next) {
    res.render('main', { title: 'Hey', message: 'Hello there!'});
    next();
  },
  thanksPage: function (req, res, next) {
    var ticket = new Ticket(req.body)
    // res.json(ticket)
    ticket.save()
      .then(function (result) {
        //return res.redirect('thanks')
        next();
      })

      .catch(err => {
        return res.status(420).json(err)
      })
    next();
  },
  thanksPageAll: function (req, res) {
    const numberOfTickets = 1
    Ticket.find({}, null, {limit: numberOfTickets, sort: {createdAt: 'desc'}}, function(err, records) {
    // Ticket.find({}).sort('date').limit(numberOfTickets).exec(function(err, records) {

       res.render('thanks', { tickets: records })
    });
  },
  thanksPageId: function (req, res) {
    Ticket.findOne({_id: req.params.id}, function (err, ticket) {
      res.json(ticket)
    })
  },


  readTicket: function(req, res){
    Ticket.find({}).sort('date')

    .then(record => {
      return res.json(record)
    })
    .catch(err => {
      return res.json(err)
    })
  },
      //res.send('read')},
  createTicket: function(req, res){
    var ticket = new Ticket(req.body)
    ticket.save()
      .then(function (req, res, next) {
        res.render('thanks', { title: 'Hey', message: 'Hello there!'});
        next();
      })

      .catch(err => {
        return res.status(420).json(err)
      })
      //res.send('create')
    },
  deleteTicket: function(req, res){
    Ticket.findOne({_id: req.params.id }).remove()
    .then(record => {
      return res.status(204).json({})
    })
    .catch(err => {
      return res.status(422).json(err)
    })
    res.render('deleteone', { title: 'Hey', message: 'Hello there!', data: req.body});
      //res.send('delete' + req.params.id)\
    },
  deleteAllTicketsByName: function(req, res){
    Ticket.deleteMany({name: 'Myroslav' })
    .then(record => {
      return res.status(204).json({})
    })
    .catch(err => {
      return res.status(422).json(err)
    })
    res.render('delete', { title: 'Hey', message: 'Hello there!', data: req.body});
      //res.send('delete' + req.params.id)\
    },
  updateTicket: function(req, res){
    Ticket.findByIdAndUpdate({_id: req.params.id })
    .then(record => {
      return res.status(204).json({})
    })
    .catch(err => {
      return res.status(422).json(err)
    })

    },
      //res.send('update' + req.params.id)},
}
