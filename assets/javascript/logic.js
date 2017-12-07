/***********************************************************************
* Copyright (c) 2017 Charles W. Roberts
* All Rights Reserved
*
* No portion of this code may be copied or modified without the
* prior written permission of Charles Roberts.
*
***********************************************************************/

/**
 * @file Contains the global variables and functions for the hangman game.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

 /* ------ Global Variables (Objects) ----------- */
let c = document.getElementById("hangman_canvas");
/**
 * The global hmGraphic object that represents the hangman canvas.
 * @var {object} graphic
 */
let graphic      = new hmGraphic(c);

/**
 * The global ArtistCollection object that is the collection of musical artists.
 * @var {object} collection
 */
let collection   = new ArtistCollection();

/**
 * The global Guess object that is the value of the current guess.
 * @var {object} CurrentGuess
 */
let CurrentGuess = new Guess();

/**
 * The global ButtonCollection object that represents all the letter buttons.
 * @var {object} ButtonSet
 */
let ButtonSet    = new ButtonCollection();


let playStopped  = false;


/**
* Function for initializing all the global variables and objects for the hangman web page.
*/
initGame = function() {
   // Create the canvas and draw the gallows
   graphic.clear();
   graphic.drawGallows();

   // Initialize the artist collection
   collection.initialize();

   // Get an artist
   let artist = collection.getRandomArtist();

   // Set the phrase for the  guess field
   CurrentGuess.setPhrase(artist.getName());

   let artistHint = document.getElementById("hint");

   artistHint.innerHTML = artist.getDescription();

   guess.innerHTML = "_ _ _ _ _ _ _"

} // End of initGame = function() 

initGame();

/**
* Function to stop the playing of the hangman web page.
*/
stopPlaying = function()
{
	//delete ButtonSet;
    document.getElementById("hmButtons").innerHTML = "";
}

/**
* Function to start a new round of the hangman web page.
* @returns {number} The width of the hangman canvas. 
*/
startNewGame = function ()
{
	// Redraw the gallows
	graphic.clear();
	//delete graphic;
	graphic = new hmGraphic(c);
	graphic.drawGallows();

	guess.innerHTML = "___"

    // Redo the buttons
    //delete ButtonSet;
    document.getElementById("hmButtons").innerHTML = "";
    ButtonSet = new ButtonCollection();

    // Get another artist
    let artist = collection.getRandomArtist();

 

    hint.innerHTML = artist.getDescription();

    // Set the phrase for the  guess field
    CurrentGuess.setPhrase(artist.getName());

}

String.prototype.replaceAt = function(index, replacement) 
{
   return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function replaceAt(string, index, replace) 
{
   return string.substring(0, index) + replace + string.substring(index + 1);
}