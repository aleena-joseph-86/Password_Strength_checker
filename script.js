const passw = document.getElementById("Password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

passw.addEventListener('input',function(){
    if(passw.value.length>0){
    msg.style.display="block";
    passw.style.color="red";
    passw.style.borderColor="red";
    msg.style.color="red";
    str.innerHTML="weak";

    if(passw.value.length<=4){
    msg.style.display="block";
    passw.style.color="red";
    passw.style.borderColor="red";
    msg.style.color="red";
    str.innerHTML="weak";
    }
    }

    if(passw.value.length>4&&passw.value.length<8){
    msg.style.display="block";
    passw.style.color="yellow";
    passw.style.borderColor="yellow";
    msg.style.color="yellow";
    str.innerHTML="medium";
    }

    if(passw.value.length>=8){
    msg.style.display="block";
    passw.style.color="lightgreen";
    passw.style.borderColor="lightgreen";
    msg.style.color="lightgreen";
    str.innerHTML="strong";
    }
});
