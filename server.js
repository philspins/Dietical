/*eslint no-console:0 */
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

const config = require("./webpack.config");
const routes = require("./src/Routes");
const models = require("./src/data/models");
const schema = require("./src/data/schema");



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
		}),
		new (winston.transports.File)({
			filename: "nourish.log",
			timestamp: function() {
				return moment(Date.now()).format();
			},
			formatter: function(options) {
				return options.timestamp() +" "+ options.level.toUpperCase() +" "+ (options.message ? options.message : "") +
          (options.meta && Object.keys(options.meta).length ? "\n\t"+ JSON.stringify(options.meta) : "" );
			}
		})
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
// Register GraphQL API middleware
// -----------------------------------------------------------------------------
app.use("/graphql", expressGraphQL(req => ({
	schema,
	graphiql: config.env !== "dist",
	rootValue: { request: req },
	pretty: config.env !== "dist"
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
	return models.sync().catch(err =>
		logger.error("\x1b[91m" & err.stack & "\x1b[0m")
	);
})
.then(function(){
	return models.query("SET FOREIGN_KEY_CHECKS = 1");
})
.then(function(){
	logger.info("\x1b[36mSequelize: data models synchronized\x1b[0m");
	/*
	models.Recipe.findAll({attributes: ["Name", "Instructions"]}).then(function(recipes){
		console.log(recipes);
	});
	*/
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
