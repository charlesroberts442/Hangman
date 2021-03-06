/***********************************************************************
* Copyright (c) 2017 Charles W. Roberts
* All Rights Reserved
*
* No portion of this code may be copied or modified without the
* prior written permission of Charles Roberts.
*
***********************************************************************/

/**
 * @file Contains the class definition of the hmGraphic class.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc The hmGraphic class represents the hangman canvas. 
 */
class hmGraphic {
   /**
 * Creates a new hangman graphic object.
 */
constructor(canvas_in) 
   {
       /** 
       * @member {String} 
       */
      let _canvas = canvas_in;
      let _context = _canvas.getContext("2d");

      /** 
       * @member {Number} 
       */
      let _width = canvas_in.width;

      /** 
       * @member {Number} 
       */
      let _height = canvas_in.height;

      /** 
       * @member {Array} 
       */
      let _figureParts = ["rope", "head", "left_eye", "right_eye", "mouth", "torso", "left_arm", "right_arm", "left_leg", "right_leg"];

      /** 
       * @member {Number} 
       */
      let _nextIndexToDraw = 0;

      /** 
       * @member {Boolean} 
       */
      let _isDead = false;

      /**
     * Draw a line.
     * @param {number} xstart - The x value of the starting point of the line.
     * @param {number} ystart - The y value of the starting point of the line.
     * @param {number} xend   - The x value of the ending point of the line.
     * @param {number} yend   - The y value of the ending point of the line.
     */
      this.drawLine = function(xstart, ystart, xend, yend) 
      {
         _context.moveTo(xstart, ystart);
         _context.lineTo(xend, yend);
         _context.stroke();
      } // End of this.drawLine() = function(xstart, ystart, xend, yend)

      /**
     * "Getter method" for getting the width of the hangman canvas.
     * @returns {number} The width of the hangman canvas. 
     */
      this.getWidth = function() 
      {
         return _width;
      }

      /**
     * "Getter method" for getting the height of the hangman canvas.
     * @returns {number} The height of the hangman canvas. 
     */
      this.getHeight = function() 
      {
         return _height;
      }
 
      /**
     * "Getter method" for getting the _isDead data member of the hangman canvas.
     * @returns {boolean} Whether or not the hanging process is complete; i.e. Is the man dead?
     */
      this.getIsDead = function()
      {
         return _isDead;

      }

      /**
     * A method to draw the gallows.
     */
      this.drawGallows = function() 
      {

         // Draw the bottom plank
         this.drawLine(20, _height - 50, _width - 70, _height - 50);
         this.drawLine(20, _height - 70, _width - 70, _height - 70);
         this.drawLine(20, _height - 50, 20, _height - 70);
         this.drawLine(_width - 70, _height - 50, _width - 70, _height - 70);

         // Draw the vertical plank
         this.drawLine(50, _height - 70, 50, 100);
         this.drawLine(70, _height - 70, 70, 100);
         this.drawLine(50, 100, 70, 100);

         // Draw the top plank
         this.drawLine(50, 100, 400, 100);
         this.drawLine(50, 80, 400, 80);
         this.drawLine(50, 80, 50, 100);
         this.drawLine(400, 80, 400, 100);

         // Draw the angle brace
         this.drawLine(70, 200, 200, 100);
         this.drawLine(70, 220, 220, 100);

      }

      /**
     * A method to draw the rope.
     */
      this.drawRope = function() 
      {
         this.drawLine(300, 220, 300, 100);
      }

      /**
     * A method to draw the man's head.
     */
      this.drawHead = function() 
      {
         _context.beginPath();
         _context.arc(300, 250, 30, 0, 2 * Math.PI);
         _context.stroke();
      }
 
       /**
     * A method to draw the man's eyes.
     */
      this.drawEyes = function() 
      {
         this.drawLine(280, 245, 290, 245);
         this.drawLine(310, 245, 320, 245);
      }

       /**
     * A method to draw the man's mouth.
     */
      this.drawMouth = function() 
      {
         this.drawLine(290, 260, 310, 260);
      }
 
       /**
     * A method to draw the man's neck.
     */
      this.drawNeck = function() 
      {
         this.drawLine(300, 280, 300, 320);
      }

       /**
     * A method to draw the man's left arm.
     */
      this.drawLeftArm = function() 
      {
         this.drawLine(300, 320, 250, 300);
      }
 
       /**
     * A method to draw the man's right arm.
     */
      this.drawRightArm = function() 
      {
         this.drawLine(300, 320, 350, 300);
      }

       /**
     * A method to draw the man's torso.
     */
      this.drawTorso = function()
      {
         this.drawLine(300, 320, 300, 400);
      }

       /**
     * A method to draw the man's left leg.
     */
      this.drawLeftLeg = function() 
      {
         this.drawLine(300, 400, 260, 470);
      }

       /**
     * A method to draw the man's right leg.
     */
      this.drawRightLeg = function() 
      {
         this.drawLine(300, 400, 340, 470);
      }

      /**
     * A method to draw the next feature of the man being hanged.  When the last feature has been drawn, the data member, _isDead, is set to true.
     */
      this.drawNext = function() {
        
         switch (_nextIndexToDraw) 
         {
            case 0:
               this.drawRope();
               break;

            case 1:
               this.drawHead();
               break;

            case 2:
               this.drawEyes();
               break;

            case 3:
               this.drawMouth();
               break;

            case 4:
               this.drawNeck();
               break;

            case 5:
               this.drawTorso();
               break;

            case 6:
               this.drawLeftArm();
               break;

            case 7:
               this.drawRightArm();
               break;

            case 8:
               this.drawLeftLeg();
               break;

            case 9:
               this.drawRightLeg();
               _isDead = true;
               break;
         }
         ++_nextIndexToDraw;

      } // End of this.drawNext = function ()
      
      /**
     * A method to clear the entire canvas including the gallows.
     */
      this.clear = function()
      {
      	_nextIndexToDraw = 0;
        _context.clearRect(0,0,_width,_height); 
        _context.beginPath();
      }

   } // End of constructor(canvas_in)

} // End of class hmGraphic



