function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    let email = document.forms["contactForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false
    }
    let message = document.forms["contactForm"]["message"].value;
    if (message == "") {
        alert("Message must be filled out")
        return false
    }
    if (message != "" || email != "" || name != "") {
        alert("Form filled out successfully!");
    }
}