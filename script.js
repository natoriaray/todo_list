/DATA STRUCTURE CONTROLLER/
var dataContoller = (function() {
	
	var allToDoItems = [];

	return {
		addToDoItem: function(item) {
			allToDoItems.push(item);
		}
	}


})();

/UI CONTROLLER/
var UIController = (function() {

	return {
		getInputValue: function() {
			var inputDescription = document.querySelector('.input_text').value;
			return inputDescription;
		},
		
	}

})();

/CONTROLLER/
var controller = (function(UICtrl, dataCtrl) {

	var eventListener = function() {
		document.querySelector('.add_btn').addEventListener('click', addToDo)

	};

	var addToDo = function() {
		var toDoItem;

		// 1. Get input value 
		toDoItem = UICtrl.getInputValue();
	
		
		// 2. Add input value to data
		dataCtrl.addToDoItem(toDoItem);

		// 3. Display input value to UI
	}

	return {
		init: function() {
			eventListener();
		}
	}



})(UIController, dataContoller);
controller.init();