var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do'));
 
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
 
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var sched = $(this).siblings(".sched").val();
 
    localStorage.setItem(time, sched);
 });
 
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
 