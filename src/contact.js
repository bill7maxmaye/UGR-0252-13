function validate() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var firstNameValid = validateName(firstName);
    var lastNameValid = validateName(lastName);
    
    
 
 
     if( document.myForm.fname.value == "" ) {
        alert( "Please provide your FIRST name!" );
        document.myForm.fname.focus() ;
        return false;
     }
     if( document.myForm.lname.value == "" ) {
         alert( "Please provide your LAST name!" );
         document.myForm.lname.focus() ;
         return false;
      }
      if (!firstNameValid) {
       alert("Invalid first name. Please enter only letters.");
       return false;
   }
 
   if (!lastNameValid) {
       alert("Invalid last name. Please enter only letters.");
       return false;
   }
     if( document.myForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
     }
     var emailID = document.myForm.email.value;
     atpos = emailID.indexOf("@");
     dotpos = emailID.lastIndexOf(".");
     
     if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email")
        document.myForm.Email.focus() ;
        return false;
     }
     alert(" Your email has been sent successfully!");
     return( true );
 
 }
 function validateName(name) {
     var nameRegex = /^[a-zA-Z]+$/;
     return nameRegex.test(name);
 }