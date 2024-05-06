function digitalclock()
{
    var currentTime = new Date();
    
    hour= currentTime.getHours();
    minutes= currentTime.getMinutes();
    seconds= currentTime.getSeconds();

    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    
}
setInterval(digitalclock, 1000);
