document.getElementById("runButton").addEventListener("click", function() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
  
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        outputDiv.innerHTML += "FizzBuzz<br>";
      } else if (i % 3 === 0) {
        outputDiv.innerHTML += "Fizz<br>";
      } else if (i % 5 === 0) {
        outputDiv.innerHTML += "Buzz<br>";
      } else {
        outputDiv.innerHTML += i + "<br>";
      }
    }
  });