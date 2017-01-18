$(document).ready(start); //Delay code from executing until all DOM assets have been loaded

var cityList = ["NYC", "SF", "LA", "ATX", "SYD"]; //Global variable - array of cities

function start() {
  console.log("Ready"); //Testing function in console

  $(cityList).each(function(index, element){
    $("#city-type").append("<option value='" + element + "'>" + element + "</option>"); //Insert values to drop-down menu from cityList array
  });

  $("label").on("click", "#city-type", function() { //When user clicks on form, clear option 0
    $(this).find("option").eq(0).html("");
  });

  $("label").change(function(e) { //When user changes input...
    e.preventDefault(); //Prevent a form submission
    console.log("Form submission prevented"); //Testing function in console

    displayCity(); //Display city
    // alert("TEST");
  });
}

function displayCity () {
  var city = $("#city-type").val(); //Get value of user input

  if(city == cityList[0]) { //If user inputs "NYC"
    $("body").attr("class", "nyc"); // Get first element from attribute name - to make background of page nyc.jpg
  }
  else if(city == cityList[1]) { //Else if inputs "SF"
    $("body").attr("class", "sf"); // Get first element from attribute name - to make background of page sf.jpg
  }
  else if(city == cityList[2]) {
    $("body").attr("class", "la");
  }
  else if (city == cityList[3]) {
    $("body").attr("class", "austin");
  }
  else if (city == cityList[4]) {
    $("body").attr("class", "sydney");
  }
  $("#city-type").val(""); //Reset user input field after it is submitted
}
