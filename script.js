let placenames = {};

fetch('placenames.json')
  .then(res => res.json())
  .then(data => placenames = data);

function searchName() {
  const input = document.getElementById("search").value.trim();
  const resultDiv = document.getElementById("result");
  const entry = placenames[input];

  if (entry) {
    resultDiv.innerHTML = `
      <h2>${input} → <i>${entry.irish}</i></h2>
      <p><strong>Grammar:</strong> ${entry.grammar}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>No result found for "${input}".</p>`;
  }
}
