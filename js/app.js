$( '.menu-btn' ).click(function(){
    	     $('.nav').toggleClass('expand');
    	     });

//Navigation Highlight//
$(".nav li").click(function(){
    $(".nav li").removeAttr('id', 'menu-page-selected');
    $(this).attr('id', 'menu-page-selected');
});

$("#send").click(function(){
 if (!$(".user-message").val()) {
    $("#warning").text("Please enter a message").show();
}

else {
	$("#warning").text("Thanks for sending your message!");
}
});


//Saving User Settings

function loadSettings() {
	if (localStorage.email == "unchecked") {
    $('#onoffemail').prop('checked', false);
}
	if (localStorage.profile == "unchecked") {
    $('#onoffprofile').prop('checked', false);
}
    $('#timezone').val(localStorage.timezone);
}


function saveSettings() {
	if ($('#onoffemail').is(":checked")) {
		localStorage.email = "checked";
	} else {
		localStorage.email = "unchecked";
	}

	if ($('#onoffprofile').is(":checked")) {
		localStorage.profile = "checked";
	} else {
		localStorage.profile = "unchecked";
	}
    localStorage.timezone = $('#timezone').val();
}    

$("#save").click( function() { 
	saveSettings();
	console.log("message saved");
	console.log(localStorage.timezone);

});

$("#cancel").click( function() {
	localStorage.timezone = 0;
	localStorage.profile = "checked";
	localStorage.email = "checked";
});

loadSettings();

//Completing search

$(function() {
    var availableTags = [
      "Victoria Chambers",
      "Dale Byrd",
      "Dawn Wood",
      "Dan Oliver"
    ];
    $( "#search_user" ).autocomplete({
      source: availableTags,
    });
  });

