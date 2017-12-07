/***********************************************************************
* Copyright (c) 2017 Charles W. Roberts
* All Rights Reserved
*
* No portion of this code may be copied or modified without the
* prior written permission of Charles Roberts.
*
***********************************************************************/

/**
 * @file Contains the class definition of the Guess class.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc The hmGraphic class represents the player's current guess in the hangman game. 
 */

class Guess 
{

   constructor() 
   {
      /** 
       * @member {String} 
       */
      let _phrase = "";

      /** 
       * @member {String} 
       */
      let _display = "";

      /**
     * "Getter method" for getting the phrase of the guess.
     *  The phrase is the name of the artist with no place 
     *  holding underscores.
     * @returns {String} phrase. 
     */
      this.getPhrase = function ()
      {
         return _phrase;
      }

      /**
     * "Setter method" for setting the phrase of the guess.
     *  The phrase is the name of the artist with no place 
     *  holding underscores.
     *  @param {"String"} - The phrase which is to be guessed.
     */
      this.setPhrase = function(phrase_in) 
      {
         _phrase = phrase_in;
         _display = "";

         for (var i = 0; i < _phrase.length; ++i) 
         {
            if (this.isLetter(_phrase[i])) 
            {
               _display = _display + '_';
            } 
            else 
            {
               _display = _display + _phrase[i];
            }

         } // End of for(var i=0; i<this._phrase.length; ++i)

      } // End of this.setPhrase = function(phrase_in)


      /**
     * A method to check to see if a character is a letter.
     *  
     *  @param {"String"} - The character that may be a letter
     *
     *  @returns {Boolean} - true if the character is a letter; false otherwise.
     */
      this.isLetter = function(c) 
      {
         return c.toLowerCase() != c.toUpperCase();

      } // End of this.isLetter

      this.getDisplay = function() 
      {
         return _display;
      }

      this.processLetter = function(letter) 
      {
         const letterToProcess = letter.toLowerCase();
         let foundIt = false;

         for (var i = 0; i < _phrase.length; ++i) 
         {
            if (_phrase[i].toLowerCase() === letterToProcess) 
            {
               _display = replaceAt(_display, i, _phrase[i]);
               foundIt = true;
            }

         } // End of for(var i=0; i<phrase.length; ++i)

         return foundIt;

      } // End of this.getDisplay = function() 

      this.areLettersLeft = function()
      {
      	if(_display.indexOf('_') == -1)
      	{
      		return false;
      	}
      	else
      	{
      		return true;
      	}

      } // End of this.areLettersLeft = function()
         
     

      this.setDisplay = function (someString)
      {
         _display = someString;
      }

   } // End of constructor

} // End of class Guess