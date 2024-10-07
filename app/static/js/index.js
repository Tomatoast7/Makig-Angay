document.getElementById("login").onclick = function() {
    let expectedUsername = "JohnLov";
    let expectedPassword = "pogi";

    let enteredUsername = document.getElementById("user").value;
    let enteredPassword = document.getElementById("pass").value;

    if (enteredUsername === expectedUsername && enteredPassword === expectedPassword) {
        alert("Access Granted");
  
    } 
    else if(enteredUsername != expectedUsername && enteredPassword === expectedPassword){
        document.getElementById("note").textContent = `The Password is Correct but The Username is Incorrect`;
    }
    else if(enteredUsername === expectedUsername &&  enteredPassword != expectedPassword){
        document.getElementById("note").textContent = `The Username is Correct but The Password is Incorrect`;
    }
    else{
        document.getElementById("note").textContent = `Invalid Input`;
    }

}
