document.getElementById("circleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var radius = parseFloat(document.getElementById("radiusInput").value);

    fetch(`/?radius=${radius}`)
      .then(response => response.text())
      .then(resultHTML => {
        document.getElementById("result").innerHTML = resultHTML;
      })
      .catch(error => console.log(error));
});
