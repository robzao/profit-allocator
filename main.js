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
  const value = rawValue.replace(/[^\d.]/g, '');
  const parts = value.split('.');
  return parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : value;
};

const parseCurrency = (sanitizedValue) => {
  const numericValue = parseFloat(sanitizedValue);
  return isNaN(numericValue) ? 0 : numericValue;
};

const calculateShares = (grossProfit, discounts) => {
  const netProfit = grossProfit - discounts;
  const investments = netProfit * INVESTMENT_FRACTION;
  const cash = netProfit * CASH_FRACTION;
  const general = netProfit - investments - cash;
  return { netProfit, investments, cash, general };
};

const handleCalculation = () => {
  const sanitizedGrossProfit = sanitizeInput(grossProfit.value);
  grossProfit.value = sanitizedGrossProfit;
  const sanitizedDiscounts = sanitizeInput(discounts.value);
  discounts.value = sanitizedDiscounts;
  const grossProfitValue = parseCurrency(sanitizedGrossProfit); 
  const discountsValue = parseCurrency(sanitizedDiscounts);
  const result = calculateShares(grossProfitValue, discountsValue);
  updateDisplay(result);
};

const setupEventListeners = () => {
  grossProfit.addEventListener('input', handleCalculation);
  discounts.addEventListener('input', handleCalculation);
  resetButton.addEventListener('click', clearAll);
};

const init = () => {
  setupEventListeners();
  handleCalculation();
};

document.addEventListener('DOMContentLoaded', init);
