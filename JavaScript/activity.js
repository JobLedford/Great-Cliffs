$(document).ready(function () {
  $("*#events").click(function () {
    $(this).toggleClass("active");
  });
});

//User interaction with table
$(document).ready(function () {
  $("*#events").click(function () {
    //user select a table cell
    var content = $(this).text(); //get content of cell
    var index = $(this).index() + 1;
    var site = $(".site:eq(" + index + ")").text();

    if (content != "Not Available") {
      //check if content does not contain a particular string
      $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected
      if ($(this).hasClass("tdhighlight")) {
        //check if selected cell has class
        $("#displaySelected").css("visibility", "visible"); //makes display box visible
        $("#displaySelected").css("margin-top", "2em"); //add spaces above display box
        $("#result").append("<p>" + content + " at " + site + "</p>"); //add child element with contents of cell
      } else {
        //if selected don't have a class
        $("#result p:contains(" + content + " at " + site + ")").remove(); //remove child element

        if ($("#result").has("p").length == false) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});
