$(function () {
  let $shadow = $(".lighter");
  let $shadowBolder = $(".bolder");
  //let shadowMax = $(window).innerHeight();
  let shadowMax = 220;
  let shadowMin = shadowMax * -1;
  let shadowMidPoints = [
    $shadow.offset().left + $shadow.width() / 2,
    $shadow.offset().top + $shadow.height() / 2
  ];

  let shadowSteps = 10;
  var shadowBlur = 10;

  $(document).on("mousemove", (e) => {
    let shadowX = Math.min(
      shadowMax,
      Math.max(shadowMin, shadowMidPoints[0] - e.pageX)
    );
    let shadowY = Math.min(
      shadowMax,
      Math.max(shadowMin, shadowMidPoints[1] - e.pageY)
    );
    var shadowValue;
    var shadowValueBolder;
    var shadowOpacity;
    var shadowOpacityBolder;

    for (var i = 0; i < shadowSteps; i++) {
      var newOffsetX = Math.floor((shadowX * i) / 25);
      var newOffsetY = Math.floor((shadowY * i) / 25);
      shadowOpacity = 1 - shadowSteps * i * 0.01;
      shadowOpacityBolder = 1 - shadowSteps * i * 0.001;
      shadowBlur = i * 1.5;
      if (shadowValue === undefined) {
        shadowValue = "0px 0px " + 10 + "px rgba(0, 0, 0, 0.3)";
        shadowValueBolder = "0px 0px " + 10 + "px rgba(0, 0, 0, 1)";
      } else {
        shadowValue +=
          ", " +
          newOffsetX * 0.75 +
          "px " +
          newOffsetY * 0.75 +
          "px " +
          shadowBlur * 1.25 +
          "px rgba(100, 80, 80, " +
          shadowOpacity +
          ")";
        shadowValueBolder +=
          ", " +
          newOffsetX * 2 +
          "px " +
          newOffsetY * 2 +
          "px " +
          shadowBlur * 1.5 +
          "px rgba(50, 40, 35, " +
          shadowOpacityBolder +
          ")";
      }
    }
    $shadow.css("text-shadow", shadowValue);
    $shadowBolder.css("text-shadow", shadowValueBolder);
  });
});
