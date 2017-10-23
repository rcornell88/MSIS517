$(document).ready(function(){
	$(".site-title").animate({
		right: '740px', 
		opacity: '1'
	}, "slow");
});

$(document).ready(function(){
	$("#formbutton").click(function(){
		$("#feedbackform").toggle(500);	
	});
});	
$(document).ready(function(){
	$("#cancel").click(function() {
		$("#feedbackform").toggle(500);
	});
});	

$(document).ready(function(){
	$("#submit").click(function() {
		$("#feedback").html("<br><br> <em><b>Thanks for the feedback! </b></em>");
		$("#feedback").css("textAlign", "center");
	});
});	

	
	


		

