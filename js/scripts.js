function getLeapYear(year) {
  return false;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = $("#yearInput").val();
    console.log(year);

    if (getLeapYear(year)) {
      $(".result").text("is");
    } else if (!getLeapYear(year)) {
      $(".result").text("is not");
    }
  })
})
