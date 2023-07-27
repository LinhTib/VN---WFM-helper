if (document.location.search.includes("GCARE_WEBTECH")){
    var waiting =  document.querySelector('body > table > tbody > tr:nth-child(8) > td:nth-child(2)').innerText;
    var wait_time = document.querySelector('body > table > tbody > tr:nth-child(8) > td:nth-child(3)').innerText;
    var available = document.querySelector('body > table > tbody > tr:nth-child(8) > td:nth-child(4)').innerText;
    var on_call = document.querySelector('body > table > tbody > tr:nth-child(8) > td:nth-child(5)').innerText;
    var after_call = document.querySelector('body > table > tbody > tr:nth-child(8) > td:nth-child(6)').innerText;
    var not_ready = document.querySelector('body > table > tbody > tr:nth-child(8) > td:nth-child(7)').innerText;
    
      sessionStorage.setItem("waiting", waiting);
      sessionStorage.setItem("wait_time", wait_time);
      sessionStorage.setItem("available", available);
      sessionStorage.setItem("on_call", on_call);
      sessionStorage.setItem("after_call", after_call);
      sessionStorage.setItem("not_ready", not_ready);
    
    var url = 'https://chat.googleapis.com/v1/spaces/AAAANuXXRCc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=22YYP7Spi9z-OQ4KYV8ZQ75F6k-QXOcmR6_jjkUSZY8';
    
    trigger_point = sessionStorage.getItem('waiting');
    if (trigger_point !='0'){
        text = "waiting: " + trigger_point + "\n" + "on_call: " + wait_time + "\n" + "after_call: " + after_call + "\n" + "not_ready: " + not_ready;
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      const body = JSON.stringify({
        text: text
      });
      xhr.onload = () => {
        console.log(xhr)
      }
      xhr.send(body);
    }
    
}
