var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var timeBlocks = $(".container");

$(document).ready(function() {

    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      console.log('value:', value);
      console.log('time:', time);
  
      localStorage.setItem(time, value);
    });
  
    ///LOOP /// 
    function hourUpdater() {
      var currentHour = moment().hours();
      console.log('current hour:', currentHour);
  
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        console.log("block hour:", blockHour);  
        
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past").addClass("present");
        } else { 
          $(this).removeClass("past present").addClass("future");
        }
      });
    }

    hourUpdater();
    
    // means execute hourUpdater function every 15 seconds
    setInterval(function() {hourUpdater();}, 15000);
    
    var hour9 = localStorage.getItem("hour-9");
    $("#hour-9 .description").val(hour9);
    
    var hour10 = localStorage.getItem("hour-10");
    $("#hour-10 .description").val(hour10);

    var hour11 = localStorage.getItem("hour-11");
    $("#hour-11 .description").val(hour11);

    var hour12 = localStorage.getItem("hour-12");
    $("#hour-12 .description").val(hour12);

    var hour13 = localStorage.getItem("hour-13");
    $("#hour-13 .description").val(hour13);

    var hour14 = localStorage.getItem("hour-14");
    $("#hour-14 .description").val(hour14);

    var hour15 = localStorage.getItem("hour-15");
    $("#hour-15 .description").val(hour15);

    var hour16 = localStorage.getItem("hour-16");
    $("#hour-16 .description").val(hour16);

    var hour17 = localStorage.getItem("hour-17");
    $("#hour-17 .description").val(hour17);
    
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  
