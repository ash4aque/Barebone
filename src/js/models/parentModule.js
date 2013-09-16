define(['underscore','backbone'], function(_, Backbone){
  var ProjectModel = Backbone.Model.extend({
    defaults: {
      pname: "Harry Potter",
      home:'home',
      link:'link',
      dd:'Ashfaque'
    }
  });
  // Return the model for the module
  return ProjectModel;
});