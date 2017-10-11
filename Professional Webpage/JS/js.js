//toggle function for the feedback form 
function hideElement() {
	var x = document.getElementById("feedbackform");
	
	if (x.style.display === "none") {
		x.style.display = "block";
	} 
	else {
		x.style.display = "none";
	}
	
}


//display completion message on site

function thankYouMessage() {
	window.alert("Thanks for the feedback!")
}