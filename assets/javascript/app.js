
var correct = 0;


var firstAnswer = $("input[name = 'question1']").val();

if( firstAnswer == "Pikachu"){
	correct++;
}


function check(){

$("#results-box").addClass("show-results");

}

$("#correct-answers").html(correct);