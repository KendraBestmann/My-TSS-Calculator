// script.js
function calculateTSS() {
    let wf = parseFloat(document.getElementById("wf").value);
    let wi = parseFloat(document.getElementById("wi").value);
    let volume = parseFloat(document.getElementById("volume").value);
    let resultDiv = document.getElementById("result");

    // Validation: Ensure values are not empty or negative
    if (isNaN(wf) || isNaN(wi) || isNaN(volume) || wf <= 0 || wi < 0 || volume <= 0) {
        resultDiv.innerHTML = "Please enter valid positive values.";
        resultDiv.style.color = "red";
        return;
    }

    if (wf <= wi) {
        resultDiv.innerHTML = "Final weight must be greater than initial weight.";
        resultDiv.style.color = "red";
        return;
    }

    // Calculate TSS (mg/L)
    let tss = (wf - wi) / volume;

    // Display result
    resultDiv.innerHTML = `Total Suspended Solids (TSS): <strong>${tss.toFixed(2)}</strong> mg/L`;
    resultDiv.style.color = "green";
}
