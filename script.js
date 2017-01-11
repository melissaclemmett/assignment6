$(document).ready(start); //Delay code from executing until all DOM assets have been loaded

function start() {
  console.log("Ready"); //Testing function in console

  $("form").submit(function(e) { //Prevent a form submission
    e.preventDefault();
    console.log("Form submission prevented"); //Testing function in console

    displayCity(); //Display city when user clicks "submit" button
  });
}

function displayCity () {
  var city = $("#city-type").val().toLowerCase().trim(); //Get string value of user's unput, convert it to lower case and remove extra spaces or new lines before or after their input

  if(city === "new york" || city ==="new york city" || city === "nyc") { //If user submits "new york" or "new york city" or "nyc"
    $("body").attr("class", "nyc"); // Get first element from attribute name - to make background of page nyc.jpg
  }
  else if(city === "san francisco" || city ==="sf" || city === "bay area") { //Else if user submits "san francisco" or "sf" or "bay area"
    $("body").attr("class", "sf"); // Get first element from attribute name - to make background of page sf.jpg
  }
  else if(city === "los angeles" || city === "la" || city === "lax") {
    $("body").attr("class", "la");
  }
  else if (city === "austin" || city === "atx") {
    $("body").attr("class", "austin");
  }
  else if (city === "sydney" || city === "syd") {
    $("body").attr("class", "sydney");
  }
  else {
    alert("THAT'S NOT A REAL CITY!"); //Otherwise display alert "THAT'S NOT A REAL CITY!"
  }
  $("#city-type").val(""); //Reset user input field after it is submitted
}
