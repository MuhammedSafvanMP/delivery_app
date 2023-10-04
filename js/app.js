// Nav bar toggle code

const toggleShow = document.querySelector(".show");
const menu = document.querySelector(".hide");

toggleShow.addEventListener("click", function () {
  menu.classList.toggle("show");
});

// Dark & Light theme code

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
};

//  Form toggle

// show

const showForm = document.querySelector('.showForm');
const sform = document.querySelector('.form');

showForm.addEventListener('click', function () {
    sform.classList.add('seeForm')
})

// hide

const hideForm = document.querySelector('.close');
const hform = document.querySelector('.form');

hideForm.addEventListener('click', function () {
    hform.classList.remove('seeForm')
})

    // Form vaidation

const message = document.getElementById('error');
        const form = document.getElementById('myForm');
        const toggleButton = document.querySelector('button');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const cpassword = document.getElementById('cpassword').value;

            message.style.display = 'none';

            if (name.length === 0) {
                message.innerText = "Please enter your full name";
                message.style.display = 'block';
                return false;
            } else if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
                message.innerText = "This email is not valid";
                message.style.display = 'block';
                return false;
            } else if (!/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(phone)) {
                message.innerText = "This number is wrong";
                message.style.display = "block";
                return false;
            } else if (password.length < 8) {
                message.innerText = "Password length must be greater than 8";
                message.style.display = "block";
                return false;
            } else if (password !== cpassword) {
                message.innerText = "Passwords do not match";
                message.style.display = "block";
                return false;
            }
            alert("Your order was successful!");
            return false;
        });

        function show(inputId) {
            const input = document.getElementById(inputId);
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        }

        function toggleForm() {
            const formToShow = document.querySelector('.form-show');
            if (formToShow.style.display === 'block') {
                formToShow.style.display = 'none';
                toggleButton.textContent = 'Show';
            } else {
                formToShow.style.display = 'block';
                toggleButton.textContent = 'Hide';
            }
        }

