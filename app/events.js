App.Events = (function(lng, app, undefined) {
	lng.dom('section#hello_world header').tap(function(event){
	App.Services.getUF();
	});
    return {

    }

})(LUNGO, App);