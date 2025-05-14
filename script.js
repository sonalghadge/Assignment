
document.querySelectorAll('input[name="unit"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const prices = {
      "1": "$10.00 USD",
      "2": "$18.00 USD",
      "3": "$24.00 USD"
    };
    document.getElementById("totalPrice").textContent = prices[radio.value];
  });
});
