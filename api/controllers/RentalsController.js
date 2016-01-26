/**
 * RentalsController
 *
 * @description :: Server-side logic for managing rentals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function hasValidParams(params) {
	return ['name', 'item', 'type', 'pricePerHour'].every(function(prop) {
		return (prop in params);
	});
}
module.exports = {
	processRequest: function (req, res) {
		if(hasValidParams(req.body))
			return res.ok('Successfully posted rental request!');
		return res.badRequest('Error with missing params');
  }
};
