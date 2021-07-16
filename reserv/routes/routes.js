const controllers = require('../controllers/controllers.js');
module.exports = function(app){

    app.get('/', controllers.mainPage);
    // app.get('/thanks', controllers.thanksPage);

    app.get('/data', controllers.readTicket);
    app.get('/usertikets', controllers.readTicketUser);



    app.post('/thanks', [controllers.thanksPage, controllers.thanksPageAll]);
    //app.get('/thanks/', controllers.thanksPageAll);

    app.get('/thanks/:id', controllers.thanksPageId);

    app.get('/deleteone/:id', controllers.deleteTicket);
    app.get('/delete/', controllers.deleteAllTicketsByName);
    app.delete('/:id', controllers.deleteTicket);

    app.put('/:id', controllers.updateTicket);
    app.get('/ticket/:id', controllers.readOneTicket);

}
