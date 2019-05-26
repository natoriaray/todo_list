/DATA STRUCTURE CONTROLLER/
var dataContoller = (function() {

	var Item = function(id, description) {
		this.id = id;
		this.description = description;
	}

	var allToDoItems = [];

	return {
		addToDoItem: function(des) {
			var newItem, ID;

			//create new ID for to do item
			if (allToDoItems.length > 0) {
				ID = allToDoItems[allToDoItems.length - 1].id + 1;
			} else {
				ID = 0;
			}

			//create new item
			newItem = new Item(ID, des);

			//add new to do item to data structure
			allToDoItems.push(newItem);

			//return to do item
			return newItem;
		},

		deleteToDoItem: function(id) {
			var ids, index;

			ids = allToDoItems.map(function(current) {
				return current.id;
			});

			index = ids.indexOf(id);

			if (index !== -1) {
          allToDoItems.splice(index, 1);
      }
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

		displayItem: function(item) {
			var html, newHTML;

			//1. Create HTML string with placeholder text
			html = '<div class="list_item" id="%id%"><div class="item_description">%description%</div><div class="delete_item"><button class="delete_btn"type="button" name="button"><ion-icon name="close"></ion-icon></button></div>'

			//2. Replace placeholder text with the actual to do item
			newHTML = html.replace('%id%', item.id)
			newHTML = newHTML.replace('%description%', item.description);

			//3. Insert new HTML into the DOM
			document.querySelector('.list').insertAdjacentHTML('beforeend', newHTML);
		},

		clearField: function() {
			var inputField = document.querySelector(input);
			inputField.value = '';
			inputField.focus();
		},

		deleteItem: function(selectorID) {
			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},

	}
})();

/CONTROLLER/
var controller = (function(UICtrl, dataCtrl) {

	var eventListener = function() {
		document.querySelector('.add_btn').addEventListener('click', addToDo)

		document.addEventListener('keypress', function(event) {
			if (event.keycode === 13 || event.which === 13) {
				addToDo();
			}
		});

		document.querySelector('.list').addEventListener('click', deleteToDo)
	};

	var deleteToDo = function() {
		var itemID, ID;

		itemID = event.target.parentNode.parentNode.parentNode.id;

		//1.delete to do item from data structure
		dataCtrl.deleteToDoItem(itemID);
		//2.Delete to do item from UI
		UICtrl.deleteItem(itemID);
	}

	var addToDo = function() {
		var toDoItemDes, newItem;
		// 1. Get input value description
		toDoItemDes = UICtrl.getInputValue();

		if (toDoItemDes) {

			// 2. Add to do item to data structure array
			newItem = dataCtrl.addToDoItem(toDoItemDes);
			console.log(newItem.id)
			// 3. Add to do item to the UI
			UICtrl.displayItem(newItem);

			//4. Clear input field
			UICtrl.clearField();
		}
	};

	return {
		init: function() {
			eventListener();
		}
	}

})(UIController, dataContoller);
controller.init();
