var UIController = (function() {


})();

var controller = (function(UTCtrl) {

	var getInputValue = function() {
		document.querySelector('.add_btn').addEventListener('click', function() {
			console.log('test');
		});

};

	return {
		init: function() {
			getInputValue();
		}
	}



})(UIController);
controller.init();