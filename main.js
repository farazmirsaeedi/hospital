const button = document.getElementById('btn');
const form = document.getElementById('form');
const user = document.getElementById('user');
const password = document.getElementById('password');
const spanPass = document.getElementById('span-password');
const userSpan = document.getElementById('span-user');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    check()
    checkPass()
});

const check = () => { 
    if (user.value ===""){
       userSpan.classList.remove("hidden")
       userSpan.innerHTML="لطفا نام را وارد کنید"
     
    }else if (user.value.length <=6){
        userSpan.classList.remove("hidden")
        userSpan.innerHTML="لطفا نام را کامل وارد کنید"
      
     }else{
       userSpan.classList.add("hidden")
        
    };
   
    
}
const checkPass = ()=>{
    if (password.value ===""){
        spanPass.classList.remove("hidden")
        spanPass.innerHTML="لطفا رمز را وارد کنید"
        
    }else if (password.value.length <8){
        spanPass.classList.remove("hidden")
        spanPass.innerHTML="لطفا 8 عدد کاراکتر وارد کنید"
      
     }
    else {
        spanPass.classList.add("hidden")
        return false
     }
}
