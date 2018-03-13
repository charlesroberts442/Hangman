/***********************************************************************
* Copyright (c) 2017 Charles W. Roberts
* All Rights Reserved
*
* No portion of this code may be copied or modified without the
* prior written permission of Charles Roberts.
*
***********************************************************************/

/**
 * @file hmButton.js - Contains the class definition of the Artist and ArtistCollection classes.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc The ButtonCollection class represents the collection of letter buttons.
 */
class ButtonCollection {

   /**
    * Function for initializing the button collection on the hangman web page.
    */
   constructor() {

      let _needsInit = true;
      let _abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      if (_needsInit) {
         _needsInit = false;
         var buttonDiv = document.getElementById("hmButtons");
         for (var i = 0; i < _abc.length; ++i) {
            var butt = document.createElement("button");
            butt.text = _abc[i];
            butt.innerHTML = _abc[i];
            butt.style.padding = 0;
            butt.style.fontWeight = "bold";
            butt.style.margin = "0.02em";
            butt.addEventListener("click", ButtonCollection.processLetter);
            buttonDiv.appendChild(butt);
         }

      } // End of if(_needsInit)

   } // End of constructor

   /**
    * Function for processing a button click event when the user guesses a letter.
    * @param {Event} - The button click event.
    */
   static processLetter(event) 
   {
   
   if (playStopped === false) {
      if (CurrentGuess.processLetter(event.target.text) !== true) {
         graphic.drawNext();
      }
      guess.innerHTML = CurrentGuess.getDisplay();
      event.target.disabled = true;
      event.target.style.fontWeight = "lighter"
      if (CurrentGuess.areLettersLeft() === false) {
         alert("YOU WON!!!!  :) ")
         if (confirm("Do you want to play again?")) {
            startNewGame();
         } else {
            stopPlaying();
            playStopped = true;

         }
      }

      if (graphic.getIsDead()) {
         guess.innerHTML = CurrentGuess.getPhrase();
         alert("You lost.\nThe artist was " + CurrentGuess.getPhrase());
         if (confirm("Do you want to play again?")) {
            startNewGame();
         } else {
            stopPlaying();
            playStopped = true;
         }
      }

   }
}

} // End of ButtonCollection