

// // Task 1

const email = document.getElementById('emailInput')


form.addEventListener('submit', (e) =>{
    let messages = []
    if (email.value === '' || email.value == null) {
        alert('Email input required')
    }

    if (email.value.length > 20) {
        alert('Email should not be longer than 20 characters')
    }

    if(messages.length > 0 ) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})

// // -------------------------------------------------------------------------------
// // DON'T CHANGE ANYTHING BELOW THIS LINE!
// // -------------------------------------------------------------------------------



// function submitFunction() {
//     validate(document.getElementById("emailInput").value);
//   }

// Task 2

function checkNumber(value) {
    for (let value = 0; value <= 100; value++){
        if (value < 100) console.log(value);
        else console.log("False");
    }
  }
  checkNumber(99);
  // ---------------------------------------------------------
//   // DONT CHANGE ANYTHING BELOW THIS LINE!
//   // ---------------------------------------------------------

  function addToOutput(text) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML += "<br>" + text;
  }

  document.getElementById("start").onclick = function() {
    for(var i = 0; i < 100; i++) {
      if(checkNumber(i)) {
        addToOutput(i);
      }
    }
  }

// Task 3
function startButtonClicked() {
    for (let i = 100; i <= 200; i++)
    if (i >= 100 && i <= 200);
  }

  textOutput('This is 2.2 assignment');

  // ---------------------------------------------------------
  // DONT CHANGE ANYTHING BELOW THIS LINE!
  // ---------------------------------------------------------

  function textOutput(text) {
    var output = document.getElementById("output");
    output.innerHTML = output.innerHTML += "<br>" + text;
  }

  document.getElementById("start").onclick = function() {
    startButtonClicked();
  }