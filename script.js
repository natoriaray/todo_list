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

	var input = '.input_text';

	return {
		getInputValue: function() {
			var inputDescription = document.querySelector(input).value;

			return inputDescription;
		},

		displayToDoItem: function(item) {
			var html, newHTML;

			//1. Create HTML string with placeholder text
			html = '<div class="list_item"><div class="item_description">%description%</div><div class="delete_item"><button class="delete_btn"type="button" name="button"><ion-icon name="close"></ion-icon></button></div>'

			//2. Replace placeholder text with the actual to do item
			newHTML = html.replace('%description%', item);

			//3. Insert new HTML into the DOM
			document.querySelector('.list').insertAdjacentHTML('beforeend', newHTML);

		},

		clearField: function() {
			var inputField = document.querySelector(input);
			inputField.value = '';
			inputField.focus();

			
		}
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
		
		// 2. Add to do item to data structure array
		dataCtrl.addToDoItem(toDoItem);

		// 3. Add to do item to the UI
		UICtrl.displayToDoItem(toDoItem);

		//4. Clear input field
		UICtrl.clearField();
	}

	return {
		init: function() {
			eventListener();
		}
	}



})(UIController, dataContoller);
controller.init();