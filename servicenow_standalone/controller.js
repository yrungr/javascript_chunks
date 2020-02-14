//	function() {
//		var controller = this;
//		controller.data.setting = "blah";
//		controller.server.update().then(function(createPage){
//			doSomething(controller.data.serverdata);
//		});

var controller = {};
controller.data = {};
controller.data.serverdata = serverdata;

doSomething(controller.data.serverdata);
