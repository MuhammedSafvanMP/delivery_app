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
