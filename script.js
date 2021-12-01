var coll = document.getElementsByClassName("collapsible"); /*for about page to collapse the collapsible on click*/
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


/*function buttonSubmit() { popup notification for contact page to verify the message is sent
  alert("Message sent!");
}
*/

function formFunction() {
  // Get the value of the input field with id="numb"
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  // If x is Not a Number or less than one or greater than 10
  if (name == "") {
    alert("Enter your name!");
    return false;
  } else if (email == "") {
    alert("Enter your email address!");
    return false;
  } else if (subject == "") {
    alert("Write something for the subject!")
    return false;
  }
   else {
    alert("Your message has been sent!"); 
  }
}