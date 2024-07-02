function validate() {
    try {
        // Retrieve input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirm").value;

        // Retrieve locations for error messages
        var namelocation = document.getElementById("namelocation");
        var emaillocation = document.getElementById("emaillocation");
        var passwordlocation = document.getElementById("passwordlocation");
        var confirmlocation = document.getElementById("confirmlocation");

        // Clear any previous error messages
        namelocation.innerHTML = "";
        emaillocation.innerHTML = "";
        passwordlocation.innerHTML = "";
        confirmlocation.innerHTML = "";

        // Validate name
        if (name === "") {
            namelocation.innerHTML = "Please enter your name";
        }

        // Validate email
        if (email === "") {
            emaillocation.innerHTML = "Please enter your email";
        }

        // Validate password
        if (password === "") {
            passwordlocation.innerHTML = "Please enter your password";
        } else if (password.length < 6) {
            passwordlocation.innerHTML = "Password length must be greater than 6 characters";
        }

        // Validate confirm password
        if (confirmpassword === "") {
            confirmlocation.innerHTML = "Please enter the password again";
        } else if (confirmpassword !== password) {
            confirmlocation.innerHTML = "Confirm password does not match";
        }
    } catch (err) {
        // Display any caught errors
        document.getElementById("result").innerHTML = err.message;
    }
}
