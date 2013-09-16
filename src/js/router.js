// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/header-view',
  'views/home-view',
  'views/footer-view',
  ], 
  function(
  $,
  _, 
  Backbone, 
  HeaderView, 
  HomeView, 
  FooterView
  ){
  
  var AppRouter = Backbone.Router.extend({
	  routes: {
			"": "home",
			"*actions": "home"
	  },
//		initialize: function() {
//			this.headerView = new HeaderView({el : document.getElementById('header')});
//			//this.headerView.render();
//			this.footerView = new FooterView({el : document.getElementById('footer')});
//			//this.footerView.render();
//		},
//		home: function() {
//			this.homeView = new HomeView({el : document.getElementById('content')});
//			//this.homeView.render();
//		}
  });
  
  var initialize = function(){

      var ApplicationRouter = new AppRouter;
      ApplicationRouter.on('route:home', function(){
    	  this.homeView = new HomeView({el : document.getElementById('content')});
      });

    

    // we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var headerView = new HeaderView({el : document.getElementById('header')});   
    var footerView = new FooterView({el : document.getElementById('footer')});

    Backbone.history.start();
  };
  return { 
	  initialize: initialize
  };
});
