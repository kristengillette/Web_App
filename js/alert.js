var alertCount = 0;

$( ".main-content" ).prepend( "<div class='alert'><span style='font-weight:700'>Alert</span> You have five new messages.<span class='exit'>X</span></div>");

$("#line").prepend("<img id='alert-dot' src='icons/alert-dot.png' />");

$(".main-content").on("click", ".alert .exit", function() {
        $(this).closest(".alert").remove();
    });

$("#alert").click(function(){
	if (alertCount === 0) {
		alertCount += 1; 
$( ".main-content" ).prepend( "<div class='alert'><span style='font-weight:700'>Alert</span> You have three new friend requests.<span class='exit'>X</span></div>");
$( ".main-content" ).prepend( "<div class='alert'><span style='font-weight:700'>Alert</span> You have seven unread articles.<span class='exit'>X</span></div>");
$( "#alert-dot" ).remove();
} else {
	$('.dropdown').toggle();
}

});

