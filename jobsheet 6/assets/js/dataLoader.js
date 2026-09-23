function loadData(jsonFile, keys) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";
      data.forEach(item => {
        let row = "<tr>";
        keys.forEach(key => {
          row += `<td>${item[key]}</td>`;
        });
        row += "</tr>";
        tbody.innerHTML += row;
      });
    });
}