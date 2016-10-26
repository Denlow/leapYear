function getLeapYear(year) {
  if (year % 400 === 0){
    return true;
  } else if (year % 100 === 0){
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#yearInput").val());
    var isLeapYear = getLeapYear(year);

    if (isLeapYear) {
      $(".result").text("is");
    } else if (!isLeapYear) {
      $(".result").text("is not");
    }
  })
})
