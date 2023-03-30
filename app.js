var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", function() {
  var searchTerm = searchInput.value;
  if (searchTerm === "") {
    alert("Please enter a search term.");
  } else {
    search(searchTerm);
  }
});

function search(searchTerm) {
  // Use Fetch API to search a data source, such as a JSON file or a database
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      var results = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      displayResults(results);
    });
}

function displayResults(results) {
  resultsDiv.innerHTML = "";
  results.forEach(result => {
    var p = document.createElement("p");
    p.innerHTML = result.name;
    resultsDiv.appendChild(p);
  });
}
