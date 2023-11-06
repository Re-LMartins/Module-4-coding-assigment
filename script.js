// Array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Function to greet a user-entered name
function greetByName() {
  var userName = document.getElementById("nameInput").value;
  var greeting = document.getElementById("greeting");
  var found = false;

  for (var i = 0; i < names.length; i++) {
    if (userName === names[i]) {
      found = true;
      if (userName.charAt(0) === 'J' || userName.charAt(0) === 'j') {
        greeting.textContent = "Good Bye " + userName;
      } else {
        greeting.textContent = "Hello " + userName;
      }
      break;
    }
  }

  if (!found) {
    greeting.textContent = "Name not found in the list.";
  }
}

document.getElementById("greetButton").addEventListener("click", greetByName);
