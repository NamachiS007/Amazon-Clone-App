document.getElementById("signin-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(email && password) {
        alert("Form submitted!");
    } else {
        alert("Please fill out both fields.");
    }
});

function validationForm(event){
    event.preventDefault(); // Prevent default form submission behavior

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var splChars = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/

    if(email == "" || password == ""){
        alert("Username and Password can't be empty");
        return false;
    }

    if(password.length < 5){
        alert("Password must contain at least 5 characters");
        return false;
    }

    if (!splChars.test(email)){
        alert("Username should contains Special Characters");
        return false;
    }

    if(!splChars.test(password)){
        alert("Password should contains Special Characters");
        return false;
    }

    window.location.href = "E-com Home.html";

    //Method for create a account
    const createAccountBtn = document.querySelector('.create-account-btn');

    createAccountBtn.addEventListener('click', function() {
    // No further action needed within the function
    });

}