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
    toastMsg.innerHTML = "<p>You have entered:</p>";
    if (username != "") {
      toastMsg.innerHTML += "<p>Username: " + username + "</p>";
    } else {
      toastMsg.innerHTML += "<p>Username: not entered</p>";
    }

    if (email != "") {
      toastMsg.innerHTML += "<p>Email: " + email + "</p>";
    } else {
      toastMsg.innerHTML += "<p>Email: no email entered</p>";
    }

    if (message != "") {
      toastMsg.innerHTML += "<p>Message: " + message + "</p>";
    } else {
      toastMsg.innerHTML += "<p>Message: no message at all</p>";
    }
  } else {
    toastMsg.innerHTML = "<p>You must enter some data to submit this form</p>";
  }

  const msg = new bootstrap.Toast(toast);
  msg.show();
  
  // Make sure the default event will not be called
  event.preventDefault();
}
