var dataContoller = (function() {

	


})();



var UIController = (function() {

	return {
		getInputValue: function() {
			var inputDescription = document.querySelector('.input_text').value;
			return inputDescription;
		}
	}

})();

var controller = (function(UICtrl) {

	var eventListener = function() {
		document.querySelector('.add_btn').addEventListener('click', addToDo)

	};

	var addToDo = function() {
		var toDoItem

		// 1. Get input fields
		toDoItem = UICtrl.getInputValue();
		console.log(toDoItem);
	}

	return {
		init: function() {
			eventListener();
		}
	}



})(UIController);
controller.init();