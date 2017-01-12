$(document).ready(start); //Delay code from executing until all DOM assets have been loaded

function start() {
  console.log("Ready"); //Testing function in console

  var cityList = ["NYC", "SF", "LA", "ATX", "SYD"];

  $(cityList).each(function(index, element){
    $("#city-type").append("<option>" + element + "</option>").val();
  });

  $("form").on("click", "#city-type", function() {
    $(this).find("option").eq(0).html("");
  });

  // $("form").blur(function(){
  //   $("option").prepend("<option>Select a City</option>");
  // });

  //  $(this).blur(function(){
  //    $(this).find("option").eq(0).html("Navigation");
  //  })
  // });

  $("form").change(function(e) { //Prevent a form submission
    e.preventDefault();
    console.log("Form submission prevented"); //Testing function in console

    displayCity(); //Display city when user clicks "submit" button
    alert("TEST");
  });
}

function displayCity () {
  // $("#city-type")
  // $("#city-type option:selected").val();
  // // var cityList = $("#city-type").val(array); //Get string value of user's unput

  if(cityList == [0]) { //If user submits "new york" or "new york city" or "nyc"
    $("body").attr("class", "nyc"); // Get first element from attribute name - to make background of page nyc.jpg
  }
  else if(cityList == [1]) { //Else if user submits "san francisco" or "sf" or "bay area"
    $("body").attr("class", "sf"); // Get first element from attribute name - to make background of page sf.jpg
  }
  else if(cityList == [2]) {
    $("body").attr("class", "la");
  }
  else if (cityList == [3]) {
    $("body").attr("class", "austin");
  }
  else if (cityList == [4]) {
    $("body").attr("class", "sydney");
  }
  $("#city-type").val(""); //Reset user input field after it is submitted
}
