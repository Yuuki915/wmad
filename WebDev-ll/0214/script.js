function updateOutput() {
  $("iframe").contents().find("html").html(`
        <html>
        <head>
            <style type="text/css">
                ${$("#cssPanel").val()}
            </style>
        </head>
        <body>
            ${$("#htmlPanel").val()}
        </body>
        </html>
    `);
}

function htmlToggle() {
  $("#html").click(function () {
    $(".toggleButton").css("background-color", "#eeeeee");
    $("#html").css("background-color", "#e8f2ff");
    $("#output").css("background-color", "#e8f2ff");

    $("#htmlPanel").css("display", "block");
    $("#cssPanel").css("display", "none");
    $("#javascriptPanel").css("display", "none");
  });
}

function cssToggle() {
  $("#css").click(function () {
    $(".toggleButton").css("background-color", "#eeeeee");
    $("#css").css("background-color", "#e8f2ff");
    $("#output").css("background-color", "#e8f2ff");

    $("#cssPanel").css("display", "block");
    $("#htmlPanel").css("display", "none");
    $("#javascriptPanel").css("display", "none");
  });
}
function jsToggle() {
  $("#javascript").click(function () {
    $(".toggleButton").css("background-color", "#eeeeee");
    $("#javascript").css("background-color", "#e8f2ff");
    $("#output").css("background-color", "#e8f2ff");

    $("#javascriptPanel").css("display", "block");
    $("#htmlPanel").css("display", "none");
    $("#cssPanel").css("display", "none");
  });
}

htmlToggle();
cssToggle();
jsToggle();

function outputToggle() {
  $("#output").click(function () {
    $("#output").css("background-color", "#e8f2ff");
  });
}
outputToggle();
updateOutput();

$("textarea").on("change keyup", function () {
  updateOutput();
});
