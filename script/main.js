function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    let convertedAmount = (amount * exchangeRate).toFixed(2);
    document.getElementById("convertedAmount").textContent = `${convertedAmount} ${toCurrency}`;
  }

  function getExchangeRate(fromCurrency, toCurrency) {
    let exchangeRates = {
        PHP: { EUR: 0.017, GBP: 0.014, USD: 0.018, PHP: 1 },
        USD: { PHP: 54.92, EUR: 0.91, GBP: 0.78, USD: 1 },
        EUR: { USD: 1.10, PHP: 60.61, GBP: 0.86, EUR: 1 },
        GBP: { USD: 1.28, EUR: 1.16, PHP: 70.55, GBP: 1 }
    };

    return exchangeRates[fromCurrency][toCurrency];
  }