/*
 * Recipe Model
 * Defines Mongoose schema, returns Recipe class.
 */

var mongoose = require('mongoose'),
	Schema   = mongoose.Schema,
	connUri  = process.env.MONGOHQ_URL || "mongodb://localhost/recipes";

mongoose.connect(connUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
});

var recipeIngredient = new Schema({
	item:	[{ type: Number, ref: 'Ingredient' }],
	qty:	String
});

var recipeSchema = new Schema({
	name:			String,
	portions:		Number,
	mealType:		String,			//Breakfast, Lunch, Dinner, Snack
	cuisine:		String,
	ingredients:	[recipeIngredient]
});

module.exports = mongoose.model('Recipe', recipeSchema);