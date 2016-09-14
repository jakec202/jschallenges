/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 $(function(){
 		var shot1 = 0;
        var shot2 = 0;
        var goal1 = 0;
        var goal2 = 0;
        var resGame = 0;

 	 $("#teamone-shoot").click(function() {

 	 	jumbler = Math.floor((Math.random() * 8) + 1);

 	 	if (jumbler == 6) {
 	 		goal1++
 	 		$("#teamone-numhits").html(goal1);
 	 		shot1++;
 	 	$("#teamone-numshots").html(shot1);	
 	 	$("html").css("background-color", "orange");
                 

      }else{
            shot1++;
            $("#teamone-numshots").html(shot1);
	  }


        });
	 


		 $("#teamtwo-shoot").click(function() {

		 	 	jumbler = Math.floor((Math.random() * 8) + 1);

		 	 	if (jumbler == 6) {
		 	 		goal2++
		 	 		$("#teamtwo-numhits").html(goal2);
		 	 		shot2++;
		 	 	$("#teamtwo-numshots").html(shot2);	
		 	 	$("html").css("background-color", "red");
		                 

		      }else{
		            shot2++;
		            $("#teamtwo-numshots").html(shot2);
			  }


		        });

		 	$("#reset").click(function() {
		 			
		 			shot1 = 0;
        			shot2 = 0;
        			goal1 = 0;
        			goal2 = 0;
        			

		 			resGame++;
		            $("#num-resets").html(resGame);
		            $("#teamone-numhits").html(goal1);
		            $("#teamone-numshots").html(shot1);
		            $("#teamtwo-numshots").html(shot2);	
		            $("#teamtwo-numhits").html(shot2);	
		            $("html").css("background-color", "white");

		        });    




 	 })

 