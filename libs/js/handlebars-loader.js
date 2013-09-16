define(['handlebars'],
		function(Handlebars) {
			"use strict";
			Handlebars.noConflict();
			//temporary stop-gap for jQuery global space infection
			if(typeof jQuery !== 'undefined') {
				jQuery.noConflict(true);
			}
			
			return _Handlebars;
		}
	);