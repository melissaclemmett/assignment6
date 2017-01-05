$(document).ready(function(){
	var animals = ["Cat", "Cow", "Alpaca", "Canary", "Sloth", "Lion", "Giraffe", "Kangaroo", "Rhino"];

	$(animals).each(function(index, element){
		$("select").append("<option value='" + element + "'>" + element + "</option>");
	});
});
