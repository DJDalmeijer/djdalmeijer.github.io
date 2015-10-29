/*
old code
function onBodyLoad(){
	var fieldSetStage = $( "#stage" );
	var fieldSetProject = $( "#project" );
	var radioButtons = $( "input[name='submit-for']:radio" );

	radioButtons.change(function(){
		  var checkedRadioBox = $( "input[name='submit-for']:checked" );
		  var selectedValue = checkedRadioBox.val();

		  if(selectedValue == "stage"){
			fieldSetStage.removeClass("fieldset-hidden");
		  	fieldSetProject.addClass("fieldset-hidden");
		  }

		  if(selectedValue == "project"){
			fieldSetStage.addClass("fieldset-hidden");
		  	fieldSetProject.removeClass("fieldset-hidden");
		  }
	});
}
*/

// Define global variables
var fieldSetProject, fieldSetStage;

/**
* onBodyLoad will be triggerd as soon as the body is completely loaded.
*/
function onBodyLoad(){

	// Set global DOM elements
	fieldSetStage = $( "#stage" );
	fieldSetProject = $( "#project" );

	// Select DOM elements
	var radioButtons = $( "input[name='submit-for']:radio" );

	//var anchors = $( "a[href='*.pdf'")
	// Listen to changes of radio button
	radioButtons.change(onRadioButtonChange);
}

/**
* onRadioButtonChange will be triggered when the selected radio buttons change
*/
function onRadioButtonChange(){

	// Find the selected radio button
	var checkedRadioBox = $( "input[name='submit-for']:checked" );

	// Get the value of the selected radio button
	var selectedValue = checkedRadioBox.val();

	// Determine what to do with the selected value
	switch(selectedValue){

		// When the value is "stage"  show the fieldset of "stage" and hide the fieldset of "project"
		case "stage":
		fieldSetStage.removeClass("fieldset-hidden");
		fieldSetProject.addClass("fieldset-hidden");
		break;

		// When the value is "project"  show the fieldset of "project" and hide the fieldset of "stage"
		case "project":
		fieldSetStage.addClass("fieldset-hidden");
		fieldSetProject.removeClass("fieldset-hidden");
		break;
	}
}