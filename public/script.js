function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function send() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let body = document.getElementById("message").value;
  if (name.trim() !== "" && body.trim() !== "") {
    document.getElementById("danger").style.display = "none";

    window.location.href =
      "mailto:hello@nawasera.id?subject=" +
      name +
      " - Solusiinaja Inquiry" +
      "&body=" +
      body;
  } else {
    document.getElementById("danger").style.display = "block";
  }
}
