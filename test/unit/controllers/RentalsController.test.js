var request = require('supertest');

describe('RentalsController', function() {

  describe('POST /rentals', function() {

    describe('with valid attributes', function() {
      it('should post a success message', function (done) {
        var validParams = {
          name: 'Pong',
          item: 'Honda CB110',
          type: 'motorcycle',
          pricePerHour: '10'
        };

        request(sails.hooks.http.app)
          .post('/rentals')
          .send(validParams)
          .expect('Content-Type', /text/)
          .expect(200)
          .expect('Successfully posted rental request!', done);
      });
    });

    describe('with invalid or missing attributes', function() {
      it('should send bad request message', function (done) {
        request(sails.hooks.http.app)
          .post('/rentals')
          .send({})
          .expect('Content-Type', /text/)
          .expect(400)
          .expect('Error with missing params', done);
      });
    });

  });

});
