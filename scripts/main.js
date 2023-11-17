var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cats.png") {
    myImage.setAttribute("src", "images/cats2.png");
  } else {
    myImage.setAttribute("src", "images/cats.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Fuck off, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Fuck off, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

