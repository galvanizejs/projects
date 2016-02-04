$(document).ready(function(){
// 1. The text under "Click for short bio" should not be visible unless the user clicks the flip id.
    $("#flip").click(function(){
        $("#panel").slideToggle(200);
    });

// 2. When hovering over the h4 tags (Objective, Experience, etc..), the inside of the dotted box should turn light blue
//    and remain light blue.

    $("h4").hover(function(){
      $(this).fadeIn('400', function(){
        $(this).css("background-color", "#6bd2db");
      });
    });

// 3. When one of the project images is clicked, it should expand to 300px wide.
    $(".project-image").click(function(){
      $(this).toggleClass("clicked-image");
    });

// 4. When clicking the "Alternate Color Theme" button, it should toggle the "changeTextColors" class.
//    Additionally, the h4 tag hover that you created in #2 should turn white.
//    Also, the background should change to the dark_embroidery.png image located the images directory.

    $("#low-vision").click(function () {
      $("body").toggleClass("changeTextColors");
      //
      // $("h4").hover(function(){
      //   $(this).fadeIn('400', function(){
      //     $(this).css("background-color", "white");
      //   });
      // });
      //
      // $("body").css("background", "url('images/dark_embroidery.png')");
    });

// 5. When hovering over the Twitter, Instagram, and LinkedIn buttons, the background behind the buttons should turn #6bd2db.
//    This has not been loaded into a CSS class and must be done within the function.
//    Make sure you get those corners rounded so the color doesn't pop out in the corners!
    $("#social-links > a > img").hover(function(){
      $(this).fadeIn('400', function(){
        $(this).css("background-color", "#6bd2db");
        $(this).css("border-radius", "8px")
      });
    }, function() {
      $(this).fadeIn('400', function(){
        $(this).css("background-color", "#FFF68F");
      });
    });

//BONUS
  var $revealPlaceHolder = $('<span class="revealPlaceHolder">Click for Contact Info<span>');

  $(".reference-contact").addClass("hidden");
  $(".reference-contact").before($revealPlaceHolder);

  $(".revealPlaceHolder").click(function(){
    $(this).hide();
    $(this).next(".reference-contact").removeClass("hidden")
  });

});
