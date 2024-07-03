window.onload=function(){
    document.getElementById('btn1').onclick = function(){
        alert("This is the second method of the event handling")
    };
    
    function showAlert(){
        alert("Hello Meet..!!");
    };
    
    document.getElementById('btn1').onclick = showAlert;
    
    document.getElementById('btn2').addEventListener('click',showAlert);
    document.getElementById('btn2').addEventListener('click',function(){
        alert("Seneca College");
    });
};

