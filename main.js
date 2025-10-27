const grossProfit = document.getElementById('gross-profit');
const discounts = document.getElementById('discounts');
const netProfitDisplay = document.getElementById('net-profit');
const investmentsDisplay = document.getElementById('investments');
const cashDisplay = document.getElementById('cash');
const generalDisplay = document.getElementById('general');
const resetButton = document.getElementById('reset');

const INVESTMENT_FRACTION = 1 / 3;
const CASH_FRACTION = 1 / 6;

const formatCurrency = (value) => `$ ${value.toFixed(2)}`;

const updateDisplay = (result) => {
  netProfitDisplay.textContent = formatCurrency(result.netProfit);
  investmentsDisplay.textContent = formatCurrency(result.investments);
  cashDisplay.textContent = formatCurrency(result.cash);
  generalDisplay.textContent = formatCurrency(result.general);
};

const clearAll = () => {
  grossProfit.value = '';
  discounts.value = '';
  handleCalculation();
};

const sanitizeInput = (rawValue) => {
  let value = rawValue.replace(/[^\d.]/g, '');
  const parts = value.split('.');
  if (parts.length > 2) value = parts[0] + '.' + parts.slice(1).join('');
  if (value.startsWith('-')) value = value.substring(1);
  return value;
};

const parseCurrency = (sanitizedValue) => {
  const numericValue = parseFloat(sanitizedValue);
  return (isNaN(numericValue) || numericValue < 0) ? 0 : numericValue;
};

const calculateShares = (grossProfit, discounts) => {
  const netProfit = grossProfit - discounts;
  const allocableProfit = netProfit > 0 ? netProfit : 0;
  const investments = allocableProfit * INVESTMENT_FRACTION;
  const cash = allocableProfit * CASH_FRACTION;
  const general = allocableProfit - investments - cash;
  return { netProfit, investments, cash, general };
};

const handleCalculation = () => {
  const grossProfitValue = parseCurrency(grossProfit.value);
  const discountsValue = parseCurrency(discounts.value);
  const result = calculateShares(grossProfitValue, discountsValue);
  updateDisplay(result);
};

const handleInput = (e) => {
  const input = e.target;
  input.value = sanitizeInput(input.value);
  handleCalculation();
};

const setupEventListeners = () => {
  grossProfit.addEventListener('input', handleInput);
  discounts.addEventListener('input', handleInput);
  resetButton.addEventListener('click', clearAll);
};

const init = () => {
  setupEventListeners();
  handleCalculation();
};

document.addEventListener('DOMContentLoaded', init);
