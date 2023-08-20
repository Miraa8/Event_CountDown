$(document).ready(function () {
  $(".toggle").click(function () {
    $(this).next().slideToggle();
  });
  ////////////////////left menu
  $("#leftMenu .icon").click(function () {
    if ($("#leftMenu").css("width") == "250px") {
      $("#leftMenu").animate({ width: "0px" }, 300);

      $("#leftMenu .icon")
        .removeClass("fa-arrow-left")
        .addClass("fa-arrow-right");
    } else {
      $("#leftMenu").animate({ width: "250px" }, 300);
      $("#leftMenu .icon")
        .removeClass("fa-arrow-right")
        .addClass("fa-arrow-left");
    }
  });
  ////////////////////////Counter
  // Set the event date (year, month - 1, day, hour, minute, second)
  var eventDate = new Date(2023, 9, 1, 12, 0, 0); // Month is 0-based (9 is October)
  function updateCountdown() {
    var now = new Date();
    var timeRemaining = eventDate - now;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $(".days").text(days + " D");
    $(".hours").text(hours + " H");
    $(".minutes").text(minutes + " M");
    $(".seconds").text(seconds + " S");
  }
  //////////// Update remaining available characters in text area
  $("#textArea").on("input", function () {
    var inputText = $(this).val();
    var charCount = inputText.length;
    if(charCount >=100){
    $("#chars").text("OUT OF CHARACTERS!!!")
    }
    else
    $("#chars").text(100 - charCount);
  });

  // Initial call to update countdown
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});
