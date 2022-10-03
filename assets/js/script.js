var saveBtn = $(".saveBtn");
// sets the current day at the top of the page
$("#currentDay").text(moment().format('dddd MMMM Do'));
//sets the color of the time blocks based on time of day 
function timeColor() {
     var time = moment().hours();
     $(".time-block").each(function() {
         var currentTime = parseInt($(this).attr("id"));
        if (currentTime > time) {
             $(this).addClass("future");
         } else if (currentTime === time) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })
 };
 //saves items in local storage so they persist with a saved time
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var sched = $(this).siblings(".sched").val();
 
    localStorage.setItem(time, sched);
 });
 //sets items from local storage on reload
 function useScheduler() {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currSched = localStorage.getItem(currHour);
 
        if(currSched !== null) {
             $(this).siblings(".sched").val(currSched);
         }
     });0
 }
 
 timeColor();
 useScheduler();
 