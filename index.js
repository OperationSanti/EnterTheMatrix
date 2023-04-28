function calculateTip() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    let numPeople = parseInt(document.getElementById("numPeople").value);
  
    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || numPeople <= 0) {
      document.getElementById("tipAmount").innerHTML = "Please enter valid numbers.";
      document.getElementById("totalAmount").innerHTML = "";
      document.getElementById("splitAmount").innerHTML = "";
      return;
    }
  
    let tipAmount = 0;
    switch (tipPercentage) {
      case 0:
        tipAmount = billAmount * 0; // 0% tip
        break;
      case 1:
        tipAmount = billAmount * 0.05; // 5% tip
        break;
      case 2:
        tipAmount = billAmount * 0.25; // 25% tip
        break;
    }
  
    let totalAmount = billAmount + tipAmount;
    let splitAmount = totalAmount / numPeople;
  
    document.getElementById("tipAmount").innerHTML = "Tip Amount: $" + tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerHTML = "Total Amount: $" + totalAmount.toFixed(2);
    document.getElementById("splitAmount").innerHTML = "Amount per Person: $" + splitAmount.toFixed(2);
  }
  
  function updateEmoticon() {
    let tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    let emoticonText = "";
  
    switch (tipPercentage) {
      case 0:
        emoticonText = "Sad (0%)";
        break;
      case 1:
        emoticonText = "Ok (5%)";
        break;
      case 2:
        emoticonText = "Happy (25%)";
        break;
    }
  
    document.getElementById("emoticon").innerText = emoticonText;
  }
  
  function handleSignatureInput() {
    const signatureInput = document.getElementById("signature");
    const enteredSignature = signatureInput.value;

    if (enteredSignature) {
        const signatureDisplay = document.querySelector(".signature-display");
        const currentDate = getCurrentDateString();
        signatureDisplay.innerHTML = `${enteredSignature} - ${currentDate}`;
        signatureInput.style.display = 'none';
    }
}





function getCurrentDateString() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = currentDate.getFullYear();

    return `${month}/${day}/${year}`;
}

function resetCalculator() {
    document.getElementById("billAmount").value = "";
    document.getElementById("numPeople").value = "";
    document.getElementById("tipPercentage").value = "0";
    updateEmoticon();
    document.getElementById("tipAmount").innerHTML = "";
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("splitAmount").innerHTML = "";
    document.getElementById("signature").value = "";
    document.getElementById("signature").style.display = "block";
  }
  