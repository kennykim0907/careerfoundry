const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* TASK 1*/
function getValue() {
  var y = document.getElementById("boo");
  var x = document.getElementById("foo_1").value;
  if (x == "") {
    window.alert((y.innerHTML = "Please try again!"));
    // window.alert('Enter your name');
    return false;
  } else if (x.length > 20) {
    window.alert((y.innerHTML = "Your name should be less than 20 characters"));
    return false;
  } else {
    window.alert((y.innerHTML = "I will get back to you as soon as I can!"));
    return false;
  }

  function getValue() {
    var y = document.getElementById("boo");
    var x = document.getElementById("foo_2").value;
    if (x == "") {
      window.alert((y.innerHTML = "Please try again!"));
      // window.alert('Enter your name');
      return false;
    } else if (x.length > 20) {
      window.alert((y.innerHTML = "Your name should be less than 20 characters"));
      return false;
    } else {
      window.alert((y.innerHTML = "I will get back to you as soon as I can!"));
      return false;
    }

    function getValue() {
      var y = document.getElementById("boo");
      var x = document.getElementById("foo_3").value;
      if (x == "") {
        window.alert((y.innerHTML = "Please try again!"));
        // window.alert('Enter your name');
        return false;
      } else if (x.length > 20) {
        window.alert((y.innerHTML = "Your name should be less than 20 characters"));
        return false;
      } else {
        window.alert((y.innerHTML = "I will get back to you as soon as I can!"));
        return false;
      }
}
