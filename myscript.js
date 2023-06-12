
function myFunction() {
    var field1 = document.getElementById("firstName").value;
    var field2 = document.getElementById("lastName").value;
    var field3 = document.getElementById("services").value;
    var field4 = document.getElementById("stylists").value;
    var field5 = document.getElementById("date").value;
    var field6 = document.getElementById("time").value;
  
    if (field1 !== "" && field2 !== "" && field3 !== "" && field4 !== "" && field5 !== "" && field6 !== "") 
    {
      // All fields are filled, perform the desired action here
      alert("Your booking with #OurStylist has been confirmed You will get a reminder before your appointment.");  
      alert(" An e-mail with your appointment details has been sent to your adress");
      document.getElementById('appointmentForm').reset();
    } 
    else {
      alert("Please fill in all fields.");
    }
  }
  document.getElementById('appointmentForm').reset();
  
   
  
