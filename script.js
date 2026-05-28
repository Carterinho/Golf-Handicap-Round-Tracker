const form = document.getElementById("scoreForm");
const table = document.getElementById("scoreTable");

const averageDisplay = document.getElementById("averageScore");
const handicapDisplay = document.getElementById("handicap");

let scores = [];

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const player = document.getElementById("playerName").value;

    const course = document.getElementById("courseName").value;

    const score = Number(
        document.getElementById("scoreInput").value
    );

    scores.push(score);

    // CREATE TABLE ROW
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${player}</td>
        <td>${course}</td>
        <td>${score}</td>
    `;

    table.appendChild(row);

    // CALCULATE AVERAGE
    const total =
        scores.reduce((sum, value) => sum + value, 0);

    const average =
        (total / scores.length).toFixed(1);

    averageDisplay.textContent = average;

    // SIMPLE HANDICAP ESTIMATE
    const handicap =
        (average - 72).toFixed(1);

    handicapDisplay.textContent = handicap;

    // RESET FORM
    form.reset();

});
