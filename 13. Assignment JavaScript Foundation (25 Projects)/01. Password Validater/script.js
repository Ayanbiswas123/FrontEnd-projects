const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("re-password2");
const check = document.getElementById("check");
const sub = document.getElementById("sub");

function aa(){
    sub.value = "Submit";
    sub.style.marginLeft = "40%";
    sub.style.backgroundColor = "white";
    sub.style.color = "black";
};

check.addEventListener('click', () => {
    if (pass1.type === "password") {
        pass1.type = "text";
    } else {
        pass1.type = "password";
    }
});

sub.addEventListener('click', () => {
    if (pass1.value === pass2.value && pass1.value != "") {
        sub.style.marginLeft = "40px";
        sub.value = "Password match";
        sub.style.backgroundColor = "green";
        sub.style.color = "white";
        setTimeout(aa, 2000);
    } else {
        sub.style.marginLeft = "40px";
        sub.value = "Password Not match";
        sub.style.backgroundColor = "red";
        sub.style.color = "white";
        setTimeout(aa,2000);
        
    }
});
