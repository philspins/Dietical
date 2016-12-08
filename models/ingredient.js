/*
 * Recipe Model
 * Defines Mongoose schema, returns Ingredient class.
 */

var mongoose = require('mongoose'),
	Schema   = mongoose.Schema/*,
	connUri  = process.env.MONGOHQ_URL || "mongodb://localhost/ingredients"*/;
/*
mongoose.connect(connUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
});
*/
var ingredientSchema = new Schema({
	_id:			Number,
	item:			String,
	uom:			String,
	weight:		Number,
	protein:	Number, 	//grams
	carbs:		Number, 	//grams
	fat:			Number, 	//grams
	fibre:		Number,
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
