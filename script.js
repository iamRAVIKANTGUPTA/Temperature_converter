document.addEventListener("DOMContentLoaded", function () {
    const valueInput = document.getElementById("value");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const convertButton = document.getElementById("convert-button");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const value = parseFloat(valueInput.value);
        const fromUnit = fromSelect.value;
        const toUnit = toSelect.value;

        let result;
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (value * 9 / 5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (value - 32) * 5 / 9;
        } else {
        }

        if (!isNaN(result)) {
            resultElement.textContent = `${value} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
        } else {
            resultElement.textContent = "Invalid input";
        }

        resultElement.style.opacity = "0";
        setTimeout(() => {
            resultElement.style.opacity = "1";
        }, 100);
    });
});
