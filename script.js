document.getElementById('calculate-btn').addEventListener('click', function() {
    const billInput = document.getElementById('bill').value;
    const tipPercentageInput = document.getElementById('tip-percentage').value;
    const splitCountInput = document.getElementById('split-count').value;

    const billAmount = parseFloat(billInput);
    const tipPercentage = parseFloat(tipPercentageInput);
    const splitCount = parseInt(splitCountInput);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(splitCount) || billAmount < 0 || tipPercentage < 0 || splitCount < 1) {
        alert("Mohon masukkan angka yang valid untuk semua input.");
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = billAmount + tipAmount;

    const tipPerPerson = tipAmount / splitCount;
    const totalPerPerson = totalBill / splitCount;

    document.getElementById('tip-amount').textContent = 'Rp ' + tipPerPerson.toFixed(2);
    document.getElementById('total-bill').textContent = 'Rp ' + totalPerPerson.toFixed(2);
});