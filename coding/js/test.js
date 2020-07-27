/* TASK 1*/
// function getValue() {
//   var y = document.getElementById("boo");
//   var x = document.getElementById("foo").value;
//   if (x == "") {
//     window.alert((y.innerHTML = "Please try again!"));
//     // window.alert('Enter your name');
//     return false;
//   } else if(x === "Bobby"){
//     window.alert((y.innerHTML = "Bobby is not allowed to use it as your name"));
//   } else if (x.length > 20) {
//     window.alert((y.innerHTML = "Your name should be less than 20 characters"));
//     return false;
//   } else {
//     y.innerHTML = x + ` ` + `is a good name!`;
//     return true;
//   }
// }


/* TASK 2*/
// const button = document.getElementById("start");

// button.onclick = function checkNumber(){
//     for(let i = 0; i <= 99; i++){
//         if((i == 0) || (i > 90) || (i >= 10 && i <= 20) || (i >= 42 && i <= 43) || (i >= 60 && i <= 80)){
//             document.write(i + ', ');
//         }
//     }
// }

// const button = document.getElementById("start");

// button.onclick = function startButtonClicked() {

// };


/* TASK 3*/
var a = 100;
var sum = 0;
const button = document.getElementById('start');

button.onclick = function startButtnClicked(){
    for(a = 100; a <= 200; a++){
        sum = sum+a;
        document.write(sum + ' ');
    }
}
