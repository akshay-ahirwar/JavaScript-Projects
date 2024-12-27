let h2 = document.querySelector('h2');
let btn = document.querySelector('button');

let flag = 0;
btn.addEventListener("click", function(){
    h2.innerHTML = "response is sending...";
    btn.innerHTML = "requesting...";
    if(flag==0){
        setTimeout(function(){
           h2.innerHTML = 'FRIEND';
           btn.innerHTML = 'remove';
        },3000)
        flag = 1;
    }else{
        h2.innerHTML = 'stranger';
        btn.innerHTML = 'add friend';
        flag = 0;
    }
})
