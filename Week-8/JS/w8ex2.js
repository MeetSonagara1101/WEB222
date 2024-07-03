function showTime(){
    let currentDate = new Date();
    document.getElementById('output').innerHTML = currentDate.toLocaleTimeString();
};

window.onload = function(){
    showTime();
    let t;
    document.getElementById('btn').onclick = function(){
        if(this.value == "START"){
            t = setInterval(showTime, 1000);
            this.value = "STOP";
        } else if(this.value == "STOP"){
            clearInterval(t);
            this.value = "START";
        }
    }
};
