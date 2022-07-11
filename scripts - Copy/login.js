let users = JSON.parse(localStorage.getItem("Users")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", getData);

function getData(e) {
    e.preventDefault();
    let obj = {
        email: form.email.value,
        pwd: form.password.value
    }

    let mflag = 'not-matched';
    users.forEach((el) => {
        if (el.email == obj.email) {
            mflag = 'matched';
        }
    })

    if (mflag == 'matched') {
        let pflag = 'not-matched';
        users.forEach((el) => {
            if (el.pwd == obj.pwd) {
                pflag = 'matched';
            }
        })

        if (pflag == 'matched') {
            localStorage.setItem("login", true);
            alert("Login successful!")
            form.email.value = null;
            form.password.value = null;
        }else{
            alert("Wrong credentials")
            form.email.value = null;
            form.password.value = null;
        }

    } else {
        alert("User doesn't exist, Sign Up");
        form.email.value = null;
        form.password.value = null;
    }
}