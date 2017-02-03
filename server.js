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
			filename: "nourish.log",
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

logger.info("\x1b[36mSequelize: synchronizing data models...\x1b[0m");
models.query("SET FOREIGN_KEY_CHECKS = 0")
.then(function(){
	return models.sync({ force: true }).catch(err =>
		logger.error("\x1b[91m" & err.stack & "\x1b[0m")
	);
})
.then(function(){
	return models.query("SET FOREIGN_KEY_CHECKS = 1");
})
.then(function(){
	logger.info("\x1b[36mSequelize: data models synchronized\x1b[0m");

	promise.map(foodData, function(item) {
		return models.FoodItem.create(item);
	}).then(function() {
		for(var i=1; i<=10; i++){
			models.Recipe.create({
				id: i,
				Name: "Test Recipe " + i,
				Instructions: "Recipe instructions go here..."
			});
		}
	}
	).then(function() {
		for(var i=1; i<=10; i++){
			for(var x=25; x<=200; x+=25){
				models.Ingredient.create({ RecipeId: i, FoodItemId: x });
			}
		}
	}).then(function() {
		models.User.create({ login: "phil", email: "phil@test.com" });
	}).then(function() {
		models.MealType.create({Name: "Breakfast"});
		models.MealType.create({Name: "Lunch"});
		models.MealType.create({Name: "Dinner"});
		models.MealType.create({Name: "Snack"});
	}).then(function() {
		models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 1});
		models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 2});
		models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 3});
		models.Meal.create({UserId: 1, Day: Date.now(), MealTypeId: 4});
	}).then(function() {
		//models.MealItem.create({});
	}).then(function() {
		logger.info("\x1b[36mSequelize: mock data loaded\x1b[0m");
	}).catch(function(err) {
		logger.error("\x1b[36mSequelize: an error occured while loading mock data!\x1b[0m\n" + err.message);
	});
})
.then(function(err){
	if (err) {
		logger.error("\x1b[91m" & err & "\x1b[0m");
	}
});


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
