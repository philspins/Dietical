/*eslint no-console:0 */
require("babel-register");
require("ignore-styles");
"use strict";

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const expressGraphQL = require("express-graphql");

const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");

const config = require("./webpack.config");
const routes = require("./src/Routes");
const models = require("./src/data/models");
const schema = require("./src/data/schema");


//
// Configure Express server
// -----------------------------------------------------------------------------
var app = express();
app.set("port", config.port);
app.use(logger("dev"));
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
	graphiql: config.env !== "production",
	rootValue: { request: req },
	pretty: config.env !== "production"
})));


//
// Always return the default index.html so react-router can do its job
// -----------------------------------------------------------------------------
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "src", "index.html"));
});


//
// Launch the server
// -----------------------------------------------------------------------------
models.sync().catch(err => console.error(err.stack)).then(() => {
	app.listen(config.port, "localhost", (err) => {
		if (err) {
			console.log(err);
		}
		console.log(`The server is running at http://localhost:${config.port}/`);
	});
});


//
// Register Webpack compiler
// -----------------------------------------------------------------------------
let isInitialCompilation = true;
compiler.plugin("done", () => {
	if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
		setTimeout(() => {
			console.log("\n✓ The bundle is now ready for serving!\n");
			console.log("  Open in inline mode:\t\x1b[33m%s\x1b[0m", "http://localhost:" + config.port + "/\n");
			console.log("  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.");
		}, 350);
	}
	isInitialCompilation = false;
});
