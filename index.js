let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  let username = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let toast = document.getElementById('liveToast');
  let toastMsg = document.getElementById('toast-msg');

  let input = document.getElementsByTagName('input');
  let inputs = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value != "" && input[i].type != "submit" && input[i].type != "reset") {
      inputs = inputs + 1;
    }
  }

  let text = document.getElementsByTagName('textarea');
  for (let i = 0; i < text.length; i++) {
    if (text[i].value != "") {
      inputs = inputs + 1;
    }
  }
  

  if (inputs > 0) {
    toastMsg.innerHTML = "";
    if (username == "") {
      toastMsg.innerHTML += "<p>Please enter your name.</p>";
    }

    if (email == "") {
      toastMsg.innerHTML += "<p>Please enter your email.</p>";
    }

    if (message == "") {
      toastMsg.innerHTML += "<p>Please enter your message.</p>";
    }

    if (toastMsg.innerHTML == "") {
      toastMsg.innerHTML = "<p>Thank you for your email. Talk to you soon.</p>";
    }
  } else {
    toastMsg.innerHTML = "<p>You must enter some data to submit this form.</p>";
  }

  const msg = new bootstrap.Toast(toast);
  msg.show();
  
  // Make sure the default event will not be called
  event.preventDefault();
}

function changeNavBarOrientation() {
  let width = document.getElementById('main').offsetWidth;
  let navBar = document.getElementById('navbar');

  if (width <= 567) {
    navBar.classList.add("navbar-expand");
  } else {
    navBar.classList.remove("navbar-expand");
  }
}

window.addEventListener('resize', changeNavBarOrientation);
window.onload = changeNavBarOrientation;
