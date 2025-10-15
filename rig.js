const form = document.getElementById("form");
const UserName = document.getElementById("UserName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const age = document.getElementById("age");
const collage = document.getElementById("collage");

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      errorInput(input, "please fill the form ");
    } else {
      successInput(input);
    }
  });
}

function errorInput(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "from-group error";
  const p = formGroup.querySelector("p");
  p.innerHTML = message;
}
function successInput(input) {
  const formGroup = input.parentElement;
  formGroup.className = "from-group success";
  const p = formGroup.querySelector("p");
  p.innerHTML = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([UserName, email, phoneNumber, age, collage]);
});
