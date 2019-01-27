// Check-off by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// Click 'X' to remove Task
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	e.stopPropagation();
})


// Enter Text -> Hit 'Enter' to Add
$("input[type='text']").on("keypress",function(e){
	if (e.which===13) {
		//console.log($(this).val());
		var inputText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + "</li>");
		$(this).val("");
	}
})

$("i[class='fa fa-plus'").on("click", function(){
	$("input").toggle();
})