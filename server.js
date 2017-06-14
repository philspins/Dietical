/* eslint */
require("babel-register");
require("ignore-styles");
"use strict";

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const expressGraphQL = require("express-graphql");
const winston = require("winston");
const winstonExpress = require("express-winston");
const bodyParser = require("body-parser");
const path = require("path");
const moment = require("moment");
const promise = require("bluebird");

const config = require("./webpack.config");
const routes = require("./src/Routes");
const models = require("./src/data/models");
const schema = require("./src/data/schema");
const foodData = require("./src/data/foodData.json");


//
// Configure Winston for logging
// -----------------------------------------------------------------------------
var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			json: false,
			colorize: true,
			timestamp: function() {
				return moment(Date.now()).format();
			},
			formatter: function (options) {
				return "["+ options.timestamp() +"] ["+ options.level.toUpperCase() +"] "+ (undefined !== options.message ? options.message : "");
			}
		})/*,
		new (winston.transports.File)({
			filename: "./nourish.log",
			timestamp: function() {
				return moment(Date.now()).format();
			},
			formatter: function(options) {
				return options.timestamp() +" "+ options.level.toUpperCase() +" "+ (options.message ? options.message : "") +
          (options.meta && Object.keys(options.meta).length ? "\n\t"+ JSON.stringify(options.meta) : "" );
			}
		})*/
	]
});


//
// Configure Express server
// -----------------------------------------------------------------------------
var app = express();
app.set("port", config.port);
app.use(winstonExpress.logger({ winstonInstance: logger }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src")));


//
// Register webpack middleware
// -----------------------------------------------------------------------------
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, config.devServer));


//
// Expose a GraphQL endpoint
// -----------------------------------------------------------------------------
app.use("/graphql", expressGraphQL(req => ({
	schema,
	graphiql: config.env !== "dist",
	rootValue: { request: req },
	pretty: config.env !== "dist",
	formatError: error => ({
		message: error.message,
		locations: error.locations,
		stack: error.stack
	})
})));


//
// Router setup: always return index.html so react-router can do it's thang
// -----------------------------------------------------------------------------
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "src", "index.html"));
});


//
// Sync the database schema
// -----------------------------------------------------------------------------
/*
logger.info("\x1b[36mSequelize: synchronizing data models...\x1b[0m");
models.query("SET FOREIGN_KEY_CHECKS = 0")
.then(function(){
	return models.sync({ force: true }).catch(err =>
		logger.error("\x1b[91m" & err.stack & "\x1b[0m")
	);
})
.then(function(){
	return models.query("SET FOREIGN_KEY_CHECKS = 1");
}).then(function(){
	logger.info("\x1b[36mSequelize: data models synchronized\x1b[0m");

	return models.transaction(function(t) {
		var foodPromises = [];
		foodData.map(item => {
			var newPromise = models.FoodItem.create(item, {transaction: t});
			foodPromises.push(newPromise);
		});
		return promise.all(foodPromises)
		.then(function(){
			var recipePromises = [];
			for(var i=1; i<=10; i++){
				recipePromises.push(models.Recipe.create({
					id: i,
					Name: "Test Recipe " + i,
					Instructions: "Recipe instructions go here..."
				}, {transaction: t}));
			}
			return promise.all(recipePromises)
			.then(function() {
				var ingredientPromises = [];
				for(var i=1; i<=10; i++){
					for(var x=25; x<=200; x+=25){
						var newPromise = models.Ingredient.create({
							RecipeId: i, FoodItemId: x }, {transaction: t});
						ingredientPromises.push(newPromise);

					}
				}
				return promise.all(ingredientPromises)
				.then(function(){
					return models.User.create({ login: "phil", email: "phil@test.com" }, {transaction: t})
					.then(function(){
						var mealTypePromises = [];
						mealTypePromises.push(models.MealType.create({Name: "Breakfast"}, {transaction: t}));
						mealTypePromises.push(models.MealType.create({Name: "Lunch"}, {transaction: t}));
						mealTypePromises.push(models.MealType.create({Name: "Dinner"}, {transaction: t}));
						mealTypePromises.push(models.MealType.create({Name: "Snack"}, {transaction: t}));
						return promise.all(mealTypePromises)
						.then(function(){
							var mealPromises = [];
							mealPromises.push(models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 1}, {transaction: t}));
							mealPromises.push(models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 2}, {transaction: t}));
							mealPromises.push(models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 3}, {transaction: t}));
							mealPromises.push(models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 4}, {transaction: t}));
							return promise.all(mealPromises)
							.then(function(){
								var mealItemPromises = [];
								mealItemPromises.push(models.MealItem.create({ItemType: "Recipe", ItemID: 1, Quantity: 1, MealId: 1}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "FoodItem", ItemID: 25, Quantity: 2, MealId: 1}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "Recipe", ItemID: 2, Quantity: 1, MealId: 2}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "Recipe", ItemID: 3, Quantity: 1, MealId: 2}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "FoodItem", ItemID: 100, Quantity: 1, MealId: 2}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "Recipe", ItemID: 4, Quantity: 1, MealId: 3}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "Recipe", ItemID: 5, Quantity: 1, MealId: 3}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "FoodItem", ItemID: 150, Quantity: 1, MealId: 3}, {transaction: t}));
								mealItemPromises.push(models.MealItem.create({ItemType: "FoodItem", ItemID: 75, Quantity: 1, MealId: 4}, {transaction: t}));
								return promise.all(mealItemPromises);
							});
						});
					});
				});
			});
		});
	}).then(function(){
		logger.info("\x1b[36mSequelize: mock data loaded\x1b[0m");

		models.Meal.findOne({include: [models.FoodItem, models.Recipe]}).then(item => {
			logger.info(JSON.stringify(item), null, 2);
		});

	}).catch(function(err) {
		logger.error("\x1b[36mSequelize: an error occured while loading mock data!\x1b[0m\n" + err.message);
	});
}).then(function(err){
	if (err) {
		logger.error("\x1b[91m" & err & "\x1b[0m");
	}
});
*/

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(config.port, "localhost", (err) => {
	if (err) {
		logger.error("\x1b[91m" & err & "\x1b[0m");
	}
	logger.info("\x1b[92mWebserver now running at http://localhost:3000/\x1b[0m");
});


//
// Register Webpack compiler
// -----------------------------------------------------------------------------
logger.info("\x1b[95mWebpack: rebuilding bundle...\x1b[0m");
compiler.plugin("done", () => {
	setTimeout(() => {
		logger.info("\x1b[95mWebpack: bundle rebuilt\x1b[0m");
	}, 350);
});
