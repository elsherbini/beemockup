Package.describe({
  // define a message to describe the package
  summary: "Add unslider, a simple, responsive jQuery slider without the fuss"
});

Package.on_use(function (api) {
	api.use("jquery",["client","server"]);
	api.add_files("unslider.js","client");
});
