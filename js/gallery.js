$(function () {
    'use strict';
    
    // Load images from Events Highlights album on Sangam Facebook page into gallery
    // albumId is the first number before the dot in the album URL
    var albumId = '451750934926612';
    var photosURL = 'https://graph.facebook.com/' + albumId + '/photos';
    $.getJSON(photosURL, function(response)
      {
        var carouselLinks = [];
        var photos = response;
        for(var i = 0; i < photos.data.length; i++)
        {
          var data = photos.data[i];
          carouselLinks.push({
            thumb: data.picture,
            image: data.source,
            big: data.images[0].source,
            title: 'Event Highlights',
            description: data.name,
            link: data.link
          });
        }        
        
        // Load the classic theme
        Galleria.loadTheme('http://sangam.mit.edu/www/galleria/themes/classic/galleria.classic.min.js');

        // Initialize Galleria
        Galleria.run('.galleria', {dataSource: carouselLinks});
      });
 });
