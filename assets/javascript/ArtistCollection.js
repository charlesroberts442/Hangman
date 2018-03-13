/***********************************************************************
* Copyright (c) 2017 Charles W. Roberts
* All Rights Reserved
*
* No portion of this code may be copied or modified without the
* prior written permission of Charles Roberts.
*
***********************************************************************/

/**
 * @file ArtistCollection.js - Contains the class definition of the Artist and ArtistCollection classes.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc The Artist class represents musical artist. 
 */
 class Artist {
   /**
 * Creates a new hangman Artist object.
 */
   constructor(name_in, description_in)
   {
      "use strict";
      /** 
       * @member {String} 
       */
      let _name = name_in;

      /** 
       * @member {String} 
       */
      let _description = description_in;

      /**
     * "Getter method" for getting the name of the artist.
     * @returns {String} The name of the artist.
     */
      this.getName = function()
      {
         'use strict';
         return _name;
      }

      /**
     * "Getter method" for getting a description of the artist.
     * @returns {String} The description of the artist.
     */
      this.getDescription = function()
      {
         'use strict';
         return _description;
      }

   } // End of constructor

} // End of class Artist


/**
 * @classdesc The ArtistCollection class represents a collection of musical artists. 
 */
class ArtistCollection
{
   /**
 * Creates a new hangman ArtistCollection object.
 */
   constructor()
   {
      /** 
       * @member {Array} 
       */
      let _collection = [];

      /** 
       * @member {Boolean} 
       */
      let _needsInitializing = true;

      /**
     * Adds an artist to the collection.
     * @param {object} - The artist to be added.
     */
      this.addArtist = function(artist)
      {
         _collection.push(artist);

      }

      /**
     * Initializes the artist collection.
     */
      this.initialize = function() {
         'use strict';
         if (_needsInitializing) 
         {
         	_needsInitializing = false;

            let artist_01 = new Artist("Chilish Gambino",
               "Rap pop culture mogul who's moniker is inspired by a Wu-Tang Clan name generator");
            this.addArtist(artist_01);

            let artist_02 = new Artist("Daft Punk",
               "Helmet clad french retro-futurist electronica group");
            this.addArtist(artist_02);

            let artist_03 = new Artist("Florence and the Machine",
               "English indie rock band");
            this.addArtist(artist_03);

            let artist_04 = new Artist("Melanie Martinez",
               "Alt pop \"The Voice\" alumni");
            this.addArtist(artist_04);

            let artist_05 = new Artist("Beenie Man",
               "The \"king\" of reggae dance hall");
            this.addArtist(artist_05);

            let artist_06 = new Artist("Wiley",
               "Bow E3 English eskibeat hip hop artist");
            this.addArtist(artist_06);

            let artist_07 = new Artist("Katy B",
               "Mercury prize nominated English singer/songwriter");
            this.addArtist(artist_07);

            let artist_08 = new Artist("Lindsey Sterling",
               "American electronic violinist");
            this.addArtist(artist_08);

            let artist_09 = new Artist("The Lonley Island",
               "American comedy hip hop trio");
            this.addArtist(artist_09);

            let artist_10 = new Artist("J Dilla",
               "Detroit based underground hip hop icon");
            this.addArtist(artist_10);

            let artist_11 = new Artist("4Hero",
               "London based hardcore breakbeat trip hop group");
            this.addArtist(artist_11);

            let artist_12 = new Artist("Portishead",
               "Trip hop pioneering Bristol based band");
            this.addArtist(artist_12);

            let artist_13 = new Artist("Soil and Pimp",
               "Japanese club jazz sextet");
            this.addArtist(artist_13);

            let artist_14 = new Artist("Beck",
               "American Lo-fi anti folk art pop pioneer");
            this.addArtist(artist_14);

            let artist_15 = new Artist("Cake",
               "California based alternative rock band");
            this.addArtist(artist_15);

            let artist_16 = new Artist("Big SMO",
               "Billboard charting country rap artist");
            this.addArtist(artist_16);

            let artist_17 = new Artist("Colt Ford",
               "Southern country rap singer/songwriter");
            this.addArtist(artist_17);

            let artist_18 = new Artist("Chance the Rapper",
               "Emmy award winning Chicago based \"Acid Rap\" artist");
            this.addArtist(artist_18);

            let artist_19 = new Artist("Halsey",
               "American electro/synth pop artist");
            this.addArtist(artist_19);

         } // End of if(_needsInitializing){
      }

      /**
     * Logs the artist collection to the console for verification during development.
     */
      this.logCollection = function()
      {
         for (var i = 0; i < _collection.length; ++i)
         {
            let boo = _collection[i];
            console.log(i + 1 + ". " + boo.getName() + " - " + boo.getDescription());
         }
      }

      /**
     * Gets a random artist from the collection.
     * @returns {Object} A random artist.
     */
      this.getRandomArtist = function()
      {
         const rndm = Math.floor(Math.random() * 19);
         return _collection[rndm];
      }

   } // End of constructor

} // End of class ArtistCollection