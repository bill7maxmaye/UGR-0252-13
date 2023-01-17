


function validate() {
    let userName = document.getElementById("uname").value;
   
 
    let firstNameValid = validateName(userName);
  
    
 
 
     if( document.myForm.username.value == "" ) {
        alert( "Please provide your User name!" );
        document.myForm.use.focus() ;
        return false;
     }

      if (!firstNameValid) {
       alert("Invalid username. Please enter only letters.");
       return false;
   }
 
   validatePassword();
}
function validateName(name) {
    let nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}
function validatePassword() { 
    let Password1 = document.myForm.password.value; 
    
    if (Password1 == "") { 
    alert("Please enter a valid password!"); 
    return false; 
    } 
    
    if (Password1.length < 6) { 
    alert("Password must be atleast 6 charaters long!"); 
    return false; 
    } 
    
    if (!/[A-Z]/.test(Password1)) { 
    alert("Password should contain at least one capital letter!"); 
    return false; 
    } 
    
    if (!/[a-z]/.test(Password1)) { 
    alert("Password should contain at least one small letter!"); 
    return false; 
    } 
    
    if (!/\d/.test(Password1)) { 
    alert("Password should contain at least one number!"); 
    return false; 
    } 
    
    if (!/[!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]/.test(Password1)) { 
    alert("Password should contain at least one special character!"); 
    return false; 
    }
    
    alert("Password validation completed successfully!");
    return true; 
    } 