class hmGraphic {
   constructor(canvas_in) 
   {
      this._canvas = canvas_in;
      this._context = this._canvas.getContext("2d");
      this._width = canvas_in.width;
      this._height = canvas_in.height;
      this._figureParts = ["rope", "head", "left_eye", "right_eye", "mouth", "torso", "left_arm", "right_arm", "left_leg", "right_leg"];
      this._nextIndexToDraw = 0;
      this._isDead = false;

      console.log("In hmResponsiveGraphic");
      console.log("Width is " + this._width);
      console.log("Height is " + this._height);
      /*
       * The drawLine method draws a line from the 
       * given start point to the given end point.
       */
      this.drawLine = function(xstart, ystart, xend, yend) 
      {
         this._context.moveTo(xstart, ystart);
         this._context.lineTo(xend, yend);
         this._context.stroke();
      } // End of this.drawLine() = function(xstart, ystart, xend, yend)

      this.getWidth = function() 
      {
         return this._width;
      }

      this.getHeight = function() 
      {
         return this._height;
      }

      this.respond = function() 
      {
         console.log("The window size changed.");
         var container = $(this._context).parent();

        console.log("width is " + $("#main").width() ); //max width
     
      }

      this.getIsDead = function()
      {
         return this._isDead;

      }
      this.drawGallows = function() 
      {

         // Draw the bottom plank
         this.drawLine(20, this._height - 50, this._width - 70, this._height - 50);
         this.drawLine(20, this._height - 70, this._width - 70, this._height - 70);
         this.drawLine(20, this._height - 50, 20, this._height - 70);
         this.drawLine(this._width - 70, this._height - 50, this._width - 70, this._height - 70);

         // Draw the vertical plank
         this.drawLine(50, this._height - 70, 50, 100);
         this.drawLine(70, this._height - 70, 70, 100);
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

      this.drawRope = function() 
      {
         this.drawLine(300, 220, 300, 100);
      }

      this.drawHead = function() 
      {
         this._context.beginPath();
         this._context.arc(300, 250, 30, 0, 2 * Math.PI);
         this._context.stroke();
      }

      this.drawLeftEye = function() 
      {
         this.drawLine(280, 245, 290, 245);
      }

      this.drawRightEye = function() 
      {
         this.drawLine(310, 245, 320, 245);
      }

      this.drawEyes = function() 
      {
         this.drawLeftEye();
         this.drawRightEye();
      }

      this.drawMouth = function() 
      {
         this.drawLine(290, 260, 310, 260);
      }

      this.drawNeck = function() 
      {
         this.drawLine(300, 280, 300, 320);
      }

      this.drawLeftArm = function() 
      {
         this.drawLine(300, 320, 250, 300);
      }

      this.drawRightArm = function() 
      {
         this.drawLine(300, 320, 350, 300);
      }

      this.drawTorso = function()
      {
         this.drawLine(300, 320, 300, 400);
      }

      this.drawLeftLeg = function() 
      {
         this.drawLine(300, 400, 260, 470);
      }

      this.drawRightLeg = function() 
      {
         this.drawLine(300, 400, 340, 470);
      }

      this.drawNext = function() {
        
         switch (this._nextIndexToDraw) 
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
               this._isDead = true;
               break;
         }
         ++this._nextIndexToDraw;

      } // End of this.drawNext = function ()
      
      this.clear = function()
      {
      	this._nextIndexToDraw = 0;
        this._context.clearRect(0,0,this._width,this._height); 
        this._context.beginPath();
      }

   } // End of constructor(canvas_in)

} // End of class hmGraphic



