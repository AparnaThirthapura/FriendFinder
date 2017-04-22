//javascript for getting values and form validation
$(document).ready(function() {
	$("#submit").on("click", function(){

		// event.preventDefault();

		function validateForm(){
			var isValid = true;

			$(".form-control").each(function(){
				if($(this).val() === "")
					isValid = false;
			});
			
			$(".chosen-select").each(function(){
				if($(this).val() === "")
					isValid = false;
			});

			return isValid;
		}

		console.log("Validating...");
		var userInput = {
				name: $("#name").val().trim(),
				photo: $("#photo").val().trim(),
				scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val() ]
			};
		
		if(validateForm() == true){
			var userInput = {
				name: $("#name").val().trim(),
				photo: $("#photo").val().trim(),
				scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(),
				$("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val() ]
			};

			console.log(userInput);

			var currentURL = location.origin;
			console.log(currentURL);

			$.post(currentURL + "/api/friends", userInput, function(data){
				$("#matchName").text(data.name);
		    	$('#matchImg').attr("src", data.photo);
		
			    $("#resultsModal").modal('toggle');

			});
		}
		else{
			alert("Please fill out all the fields before submitting");
		}
	});
});