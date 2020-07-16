

// DATE and TIME realtime Update

setInterval(function (){
  var myVar=setInterval(interval());
},100);
function interval(){
  var date = new Date();
  var minutes = date.getMinutes();
  var seconds=date.getSeconds();
  if(seconds<10){seconds="0"+seconds;}
  var hours=date.getHours();
  var clock=hours+":"+minutes+":"+seconds;

  var weekday=['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  var year=date.getYear()+1900;
  var month=date.getMonth();
  month++;
  if(month<10){month="0"+month;}
  var day=weekday[date.getDay()];

  var completeDate = day+"/"+month+"/"+year;

  var clockDate = document.querySelectorAll("h1");
    for(var i = 0; i<clockDate.length;i++){
      clockDate[0].textContent=clock;
      clockDate[1].textContent=completeDate;
    }
}
