function checkQuiz() {
    let score = 0;
    const totalQuestions = 5;
    let resultsHTML = "<h2>Results</h2>";

    const q1 = document.getElementById("q1").value.trim().toLowerCase();
    if (q1 === "data") {
        score++;
        resultsHTML += "<p style='color: #22372b;'>Q1: Correct! (Answer: data)</p>";
    } else {
        resultsHTML += "<p style='color: #6b4a3a;'>Q1: Incorrect. (Answer: data)</p>";
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "Fiber") {
        score++;
        resultsHTML += "<p style='color: #22372b;'>Q2: Correct! (Answer: Fiber Optic)</p>";
    } else {
        resultsHTML += "<p style='color: #6b4a3a;'>Q2: Incorrect. (Answer: Fiber Optic)</p>";
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "1") {
        score++;
        resultsHTML += "<p style='color: #22372b;'>Q3: Correct! (Answer: 1-1.5%)</p>";
    } else {
        resultsHTML += "<p style='color: #6b4a3a;'>Q3: Incorrect. (Answer: 1-1.5%)</p>";
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "Obsolescence") {
        score++;
        resultsHTML += "<p style='color: #22372b;'>Q4: Correct! (Answer: Planned Obsolescence)</p>";
    } else {
        resultsHTML += "<p style='color: #6b4a3a;'>Q4: Incorrect. (Answer: Planned Obsolescence)</p>";
    }

    const q5 = document.querySelectorAll('input[name="q5"]:checked');
    let q5Values = Array.from(q5).map(cb => cb.value);
    if (q5Values.includes("Fonts") && q5Values.includes("Minimal") && q5Values.length === 2) {
        score++;
        resultsHTML += "<p style='color: #22372b;'>Q5: Correct! (Answer: System Fonts and Lightweight Code)</p>";
    } else {
        resultsHTML += "<p style='color: #6b4a3a;'>Q5: Incorrect. (Answer: System Fonts and Lightweight Code)</p>";
    }

    const passFail = score >= 3 ? "PASS" : "FAIL";
    resultsHTML = `<h3>Overall Result: ${passFail}</h3><p>Total Score: ${score}/${totalQuestions}</p>` + resultsHTML;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultsHTML;
    resultsDiv.style.display = "block";
}

function resetQuiz() {
    document.getElementById("results").style.display = "none";
    document.getElementById("results").innerHTML = "";
    document.getElementById("ecoQuiz").reset();
}
