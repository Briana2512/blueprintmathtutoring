function sendMessage() {
  let name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("confirmation").innerText = "Please enter your name first.";
  } else {
    document.getElementById("confirmation").innerText = "Thanks, " + name + "! Your message has been received.";
  }
}