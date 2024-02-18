export function tipsCalculator({ bill, tip, numberPeople }) {
  let tipAmount;
  let total;
  if (bill > 0) {
    tipAmount = (bill * tip) / 100 / numberPeople;
    total = bill / numberPeople + tipAmount;
  } else {
    tipAmount = 0;
    total = 0;
  }

  return {
    tipAmount,
    total,
  };
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
