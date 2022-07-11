let users = JSON.parse(localStorage.getItem("Users")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", getData);

function getData (e){
    e.preventDefault();
    let obj={
        name : form.name.value,
        email : form.email.value,
        pwd : form.password.value
    }
    
    let flag = 'not-matched'
    users.forEach((el)=>{
        if(el.email == obj.email){
            flag = 'matched';
        }
    })

    if(flag == 'not-matched'){
        users.push(obj);
        localStorage.setItem('Users', (JSON.stringify(users)));
        alert("Sign-up Successful!")
        form.name.value = null;
        form.email.value = null;
        form.password.value = null;
    }else{
        alert("User already exists");
        form.name.value = null;
        form.email.value = null;
        form.password.value = null;
    }
}