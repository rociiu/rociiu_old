//var TodoDB = {
//	
//	addNewItem: function() {
//		console.log('should add new item');
//	},
//	deleteItem: function() {
//		console.log('should delete item');
//	}
//};

function TodoDB() {
	var todos = null;
	
	this.init = function(){
		
		if(window.localStorage['gtd_todos'] != null ) {
			todos = window.localStorage['gtd_todos'].split(',');
		} else {
			todos = [];
		}
		
	}
	
	this.myTodos = function() {
		return todos;
	}
	
	this.addNewItem = function(new_item){
		todos.push(new_item);
	};
	
	this.deleteItem = function(delete_item){
		var index = todos.indexOf(delete_item);
		todos.splice(index, 1);
	};
	
	this.saveToBrowser = function() {
		window.localStorage['gtd_todos'] = todos.join(',');
	}
	
}

$(function(){
	var todoDB = new TodoDB();
	todoDB.init();
	todoDB.saveToBrowser();
	
	$("a#add_btn").click(function(){
		var new_item = $("#new_item").val().replace(/,/, '');
		todoDB.addNewItem( new_item );
		var new_item_tag = build_new_item_tag( new_item );
		
		if($("#todo_list li:first").length != 0) {
			$("#todo_list li:first").before(new_item_tag);
		} else {
			$("#todo_list").html(new_item_tag);
		}
		todoDB.saveToBrowser();
		$("#new_item").val('');
		return false;
	});
	
	$("a.delete").live('click', function(){
		var related_item = $(this).parent().find("span.item").text();
		todoDB.deleteItem(related_item);
		$(this).parent().remove();
		todoDB.saveToBrowser();
		return false;
	});
	
	
	function build_new_item_tag(new_item) {
		var tags = [];
		tags.push("<li><span class='item'>");
		tags.push(new_item);
		tags.push('</span><a href="#" class="delete">X</a></li>');
		return tags.join('');
	};
	
	for(var i = 0; i < todoDB.myTodos.length; i ++ ){
		$("#todo_list").append(build_new_item_tag(todoDB.myTodos[i]));
	}
	
});
