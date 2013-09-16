define([
		'jquery',	//Included by default, but needed in less instances now that views have cached '$el'
		'bootstrap',
		'underscore',
		'backbone',
		'handlebars',
		'models/parentModule',
		'text!templates/header.handlebars'
	],
	function(
		$,
		bootstrap,
		_,
		Backbone,
		Handlebars,
		HederModel,
		headerTemplate
	) {
		"use strict";

		return Backbone.View.extend({
			//template : _.template(headerTemplate),
			template : Handlebars.compile(headerTemplate),
			initialize : function() {
				this.model = new HederModel();
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template(this.model.toJSON()));
				
				return this;
			}
		});
	}
);
