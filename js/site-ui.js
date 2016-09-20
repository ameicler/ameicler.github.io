/*
  —·—·—·—·—·—·—·—·—·—·—·—
  JAVASCRIPT
  —·—·—·—·—·—·—·—·—·—·—·—
*/

var targetFigureByClass = 'figure-website';
var classFigureExpand = 'figure-website-expand';

// var targetFigureCaptionClass = ".figcaption";
// var classFigureCaptionAdjust = "g3-align-g2-center";

var websiteFigures = document.getElementsByClassName(targetFigureByClass);

for (var i = 0; i < websiteFigures.length; i++) {
  websiteFigures[i].onclick = function() {
    // var figureCaption = this.querySelectorAll(targetFigureCaptionClass);

    if (this.classList.contains(classFigureExpand)) {
      this.classList.remove(classFigureExpand);
      // figureCaption[0].classList.remove(classFigureCaptionAdjust);
    }
    else {
      this.classList.add(classFigureExpand);
      // figureCaption[0].classList.add(classFigureCaptionAdjust);
    }
  }
}

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
