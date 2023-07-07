 var navigate = (function() {
   $('.dd').toggle();
   $('.dd_btn').click(function() {
     var dataName = $(this).attr('data-name');
     $('.dd').hide();
     $('.' + dataName).toggle();
   });
 })();

 const playButton = document.getElementById("play-button");
 const container = document.getElementById("button-container");

 playButton.addEventListener("click", () => {
   if (container.getAttribute("data-playing") === "false") {
     playButton.innerHTML = "&#10074;&#10074; Pause";
     container.setAttribute("data-playing", "true");
   } else {
     playButton.innerHTML = "&#9658; Play";
     container.setAttribute("data-playing", "false");
   }
 });
