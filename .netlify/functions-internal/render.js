const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","logo.svg","scss/style.scss","scss/variables.scss"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".scss":"text/x-scss"},
	_: {
		entry: {"file":"start-ff933a5a.js","js":["start-ff933a5a.js","chunks/index-6e512739.js","chunks/index-4491f72c.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
