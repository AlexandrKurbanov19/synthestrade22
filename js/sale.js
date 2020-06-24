document.addEventListener('click', function (e) {
    if (e.target.classList.contains("btn")) {
      ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease")) {
      --e.target.parentElement.querySelector("input").value;
    }
  })

  var I = document.getElementById('elem');
  var counts = document.getElementById('count');
 
  
