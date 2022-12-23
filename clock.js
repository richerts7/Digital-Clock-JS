function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("secs");
    var am_pm = document.getElementById("am");
    var time = new Date();
    var a = time.getHours();
    const value=parseInt(a)>=12?'PM':'AM';
    am_pm.innerText=value;
    if (a >=12){
      a = a-12;
    }
    if(a == 0){
      a = 12;
    }
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
  }
  setInterval(clock, 1000);
  function set() {
    let text = document.getElementsByClassName("set")[0];
    text.innerHTML = "Alarm set";
  
    var time = document.getElementById("first").value;
    var hours = new Date().getHours();
    var time1 = document.getElementById("second").value;
    var time2 = document.getElementById("third").value;
    var time3 = document.getElementById("fourth").value;
    if (time >= hours) {
      document.getElementById("girl").style.backgroundImage =
        "url(morning.jpg)";
      document.getElementById("grab").innerHTML =
        "GRAB SOME HEALTHY BREAKFAST!!!";
      document.getElementById("good").innerHTML = "GOOD MORNING!!";
    }
    if (time1 >= hours) {
      document.getElementById("girl").style.backgroundImage =
        "url(afternoon.jpg)";
      document.getElementById("grab").innerHTML =
        "LETS HAVE SOME LUNCH !!";
      document.getElementById("good").innerHTML = "GOOD AFTERNOON!!";
    }
    if (time2 >= hours) {
      document.getElementById("girl").style.backgroundImage =
        "url(evening.jpg)";
      document.getElementById("grab").innerHTML =
        "STOP YAWNING,GET SOME TEA..ITS JUST EVENING";
      document.getElementById("good").innerHTML = "GOOD EVENING!!";
    }
    if (time3 >= hours) {
      document.getElementById("girl").style.backgroundImage =
        "url(night.jpg)";
      document.getElementById("grab").innerHTML =
        "CLOSE YOUR EYES AND GO TO SLEEP";
      document.getElementById("good").innerHTML = "GOOD NIGHT!!";
    }
  
    var container = document.createElement("p");
    document.getElementsByClassName("nap")[0].appendChild(container);
    var timing = document.getElementsByClassName("nap1");
    var invalue1 = document.getElementById("wakeuptime");
    var invalue2 = document.getElementById("lunchTime");
    var invalue3 = document.getElementById("napTime");
    var invalue4 = document.getElementById("sleepTime");
  
    timing[0].innerText =
      "Wakeup Time:" + " " + invalue1.options[invalue1.selectedIndex].text;
    timing[1].innerText =
      "Lunch Time:" + " " + invalue2.options[invalue2.selectedIndex].text;
    timing[2].innerText =
      "Nap Time:" + " " + invalue3.options[invalue3.selectedIndex].text;
    timing[3].innerText =
      "Sleep Time:" + " " + invalue4.options[invalue4.selectedIndex].text;
  }
  