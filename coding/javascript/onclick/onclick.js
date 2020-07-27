const content = document.getElementById("content");
const button = document.getElementById("show_more");

button.onclick = function () {
  if (content.className == "open") {
    //shrink the box
    content.className = "";
    button.innerHTML = "Show More";
  } else {
    content.className = "open";
    button.innerHTML = "Show Less";
  }
};
