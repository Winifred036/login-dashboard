const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



loginLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})


    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Winifred103" && password === "123456") {
                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect username or password");
            }


    });

