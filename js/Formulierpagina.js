$( document ).ready(function() {

	// Define global variables
	var fieldSetProject, fieldSetStage;

	/**
	* Init will be triggerd as soon as the document is ready.
	*/
	function init(){

		// Set global DOM elements  | #ID  | adds value to variable
		fieldSetStage = $( "#stage" );
		fieldSetProject = $( "#project" );

		// Select DOM elements | searching for type input radio button
		var radioButtons = $( "input[name='submit-for']:radio" );

		// Listen to changes of radio button
		radioButtons.change(onRadioButtonChange);
	}

	/**
	* onRadioButtonChange will change when the selected radio buttons change
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

	// Initialize javascript
    init();
});