var request = require('supertest');
var expect = require('expect.js');

describe('RentalsController', function() {

  describe('GET /booking', function() {
    it('should locate booking page', function (done) {
      request(sails.hooks.http.app)
        .get('/booking')
        .expect(200)
        .end(function (err, res) {
          expect(res.text).to.contain('Enter Item Details for Rent');
          return done();
        });
    });
  });

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
