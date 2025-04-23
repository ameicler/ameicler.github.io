/*
  —·—·—·—·—·—·—·—·—·—·—·—
  SITE UI INTERACTIONS
  —·—·—·—·—·—·—·—·—·—·—·—
*/

// Constants
const FIGURE_CLASS = 'figure-website';
const FIGURE_EXPAND_CLASS = 'figure-website-expand';

// Initialize website figures
document.addEventListener('DOMContentLoaded', () => {
  // Handle figure expansion
  const websiteFigures = document.getElementsByClassName(FIGURE_CLASS);
  Array.from(websiteFigures).forEach(figure => {
    figure.addEventListener('click', () => {
      figure.classList.toggle(FIGURE_EXPAND_CLASS);
    });
  });
});

/*
var hoverTargetId = 'work-grid-item-link-ssm';
var targetImageTileClass = 'work-grid-show-ssm';
var showImageTileClass = 'show-work-grid-show';

var hoverTarget = document.getElementById(hoverTargetId);
var imageTiles = document.getElementsByClassName(targetImageTileClass);

hoverTarget.onmouseover = function() {
  for (var i = 0; i < imageTiles.length; i++) {
    imageTiles[i].classList.add(showImageTileClass);
  }
}

hoverTarget.onmouseout = function() {
  for (var i = 0; i < imageTiles.length; i++) {
    imageTiles[i].classList.remove(showImageTileClass);
  }
}
*/

  
  // targetImageTileClass.addEventListener('mouseout', function() {
  //   websiteFigures[i].classList.remove(showTileClass);
  // });



  //
  //  NAVIGATION
  //  Show/Hide on mobile view
  //  —·—·—·—·—·—·—·—·—·—·—·—

  // $("#nav-control").click(function() {
  //   var $me = $(this);
  //   if ($me.hasClass("nav-control-active")) {
  //     $("#main-nav").removeClass("show-nav");

  //     $me.removeClass("nav-control-active");
  //     $me.text("Menu");
  //   }
  //   else {
  //     $("#main-nav").addClass("show-nav");

  //     $me.addClass("nav-control-active");
  //     $me.text("Hide");
  //   }

  //   return false;
  // });

//   $(".figure-website").click(function() {
//     $(this).addClass(".figure-website-expand");
//   });
