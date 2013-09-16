define([
		'jquery',	//Included by default, but needed in less instances now that views have cached '$el'
		'underscore',
		'backbone',
		'text!templates/footer.handlebars'
	],
	function(
		$,
		_,
		Backbone,
		footerTemplate
	) {
		"use strict";

		return Backbone.View.extend({
			//template : _.template(footerTemplate),
			template : Handlebars.compile(footerTemplate),
			
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
