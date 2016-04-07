$(".nav li").click(function(){
    $(".nav li").removeAttr('id', 'menu-page-selected');
    $(this).attr('id', 'menu-page-selected');
})

$("form").submit(function(){
 if (!$(".user-message").val()) {
    $("#warning").text("Please enter a message").show();
}

else {
	$("#warning").text("Thanks for sending your message!");
}
});

