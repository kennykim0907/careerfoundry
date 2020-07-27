function getValue() {
  var y = document.getElementById("boo");
  var x = document.getElementById("foo").value;
  if (x == "") {
    y.innerHTML = "Please enter a name";
    return false;
  } else {
    y.innerHTML = `That is a good name!` + ` ` + x;
    return true;
  }
}
