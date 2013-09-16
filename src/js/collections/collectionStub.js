define([
		'underscore',
		'backbone'
	],
	function(
		_,
		Backbone
	) {
		"use strict";
		
		return Backbone.Collection.extend({
			initialize : function() {
				
			}
		});
	}
);

//define([
//  'underscore',
//  'backbone',
//  // Pull in the Model module from above
//  'models/project'
//], function(_, Backbone, ProjectModel){
//  var ProjectCollection = Backbone.Collection.extend({
//    model: ProjectModel
//  });
//  // You don't usually return a collection instantiated
//  return ProjectCollection;
//});