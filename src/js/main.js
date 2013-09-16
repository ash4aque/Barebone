(function() {
	"use strict";
	
	var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'
	
	require.config({
		// Initialize the application with the main application file.
		//deps: ["main"],
		paths : {
			jquery : libsPath + 'jquery',		//return module but also keeps it in the global scope
			underscore : libsPath + 'underscore',
			handlebars : libsPath + 'handlebars',
			backbone : libsPath + 'backbone',
			bootstrap : libsPath + 'bootstrap.min',
			text : libsPath + 'text'
		},
		shim: {
		    // Backbone library depends on jQuery.
		    backbone: {
		      deps: ["jquery"],
		      exports: "Backbone"
		    },

		    // Handlebars has no dependencies.
		    handlebars: {
		      exports: "Handlebars"
		    },
		 },
		baseUrl : 'src/js',
		urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
	});
	
	require(['app'],
		function(App) {
			App.initialize();
	});
})();
