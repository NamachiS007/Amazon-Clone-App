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
