Java.performNow(function(){
	var _system = Java.use("java.lang.System");
	_system.exit.implementation = function(){
		console.log("exit called");
	}
});

