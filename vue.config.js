var Config = {

	// Path where this instance of the Functio UI is hosted (string)
	clientPath: '/',
	// Port where the dev server runs (int)
	devPort: 8000

};

module.exports = {
	baseUrl: process.env.CLIENT_URL || Config.clientPath,
	devServer: {
		port: Config.devPort
	},
	productionSourceMap: false
}