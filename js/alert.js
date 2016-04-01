var alert = 0;

$( ".main-content" ).prepend( "<div class='alert'><span class='highlight'>Alert</span> There are currently turtles trying to cross the road.<span class='exit'>X</span></div>");

$("#line").prepend("<img id='alert-dot' src='icons/alert-dot.png' />");

$("#alert").click(function(){
	if (alert === 0) {
		alert += 1; 
	$( ".main-content" ).prepend( "<div class='alert'><span class='highlight'>Alert</span> There are currently 5 turtles trying to cross the road.<span class='exit'>X</span></div>");
	$( ".main-content" ).prepend( "<div class='alert'><span class='highlight'>Alert</span> There are currently 10 turtles trying to cross the road.<span class='exit'>X</span></div>");
	$( "#alert-dot" ).remove();

}});

$(".main-content").on("click", ".alert .exit", function() {
        $(this).closest(".alert").remove();
    });


