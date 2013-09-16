define([
		'jquery',	//Included by default, but needed in less instances now that views have cached '$el'
		'underscore',
		'backbone',
		'handlebars',
		'text!templates/home.handlebars'
	],
	function(
		$,
		_,
		Backbone,
		Handlebars,
		homeTemplate
	) {
		"use strict";

		return Backbone.View.extend({
			//template : _.template(homeTemplate),
			template : Handlebars.compile(homeTemplate),
			
			initialize : function() {
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template({}));
				
				return this;
			}
		});
	}
);
