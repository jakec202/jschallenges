$(function(){
	// #3 replaces Bacon with Beer
	var replaced = $("body").html().replace(/Bacon/g, "Beers");
    $("body").html(replaced);


	// changes page title color on click

	var clicked = true;
	 
	       $("h1").click(function(){
	           if(clicked){
	               $(this).css("color", "red");
	               clicked  = false;
	           } else {
	               $(this).css("color", "black");
	               clicked  = true;
	           }   
	       });
	       // #2 removes the odd # sections
	       $(".section-container vertical-nav").ready(function(){
	       		$(".title:even").hide();

	       })

	       //#5 removes the ads on click
		   $("aside p").click(function(){
		      $(this).empty();
		  });

		   // part 4
		   $(".post:last").remove();
		   $(".post:last").remove();
		   $(".post:last").remove();



		   
	   })


	




	
	//all your code should go here

