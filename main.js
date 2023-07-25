let email=document.getElementById('email');
let btn=document.getElementById('btn');
let confirm=document.getElementById('confirm');
let gg=document.getElementById('signUp')
btn.onclick = function(){
    let regex = /\w+@\w+.com/gi;
    if(email.value.match(regex)){
       gg.style.display='none';
       document.getElementById('successM').style.zIndex='12';
       confirm.innerHTML =email.value
        email.value=''
    }
    else{
        let p=document.createElement('p')
        p.innerHTML="Valid Email required"
        p.setAttribute('style','color:red;font-size:10px;margin-top:5px;')
        document.getElementsByClassName('input')[0].appendChild(p);
        email.style.border='1px solid red'
        email.style.backgroundColor='white';
    }
}