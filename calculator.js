// Simple Calculator JavaScript
// This file contains all the logic for our calculator

// Get references to HTML elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('history');
const clearHistoryBtn = document.getElementById('clearHistory');

// Array to store calculation history
let calculationHistory = [];

/**
 * Add two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Get the numbers from input fields
 * @returns {object} Object containing num1 and num2
 */
function getInputNumbers() {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    return { num1, num2 };
}

/**
 * Display the result on the screen
 * @param {number} result - The result to display
 */
function displayResult(result) {
    resultDisplay.textContent = result;
    
    // Add animation effect
    resultDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultDisplay.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Add calculation to history
 * @param {string} calculation - The calculation string to add
 */
function addToHistory(calculation) {
    calculationHistory.unshift(calculation); // Add to beginning of array
    
    // Keep only last 10 calculations
    if (calculationHistory.length > 10) {
        calculationHistory.pop();
    }
    
    updateHistoryDisplay();
}

/**
 * Update the history display on the page
 */
function updateHistoryDisplay() {
    historyList.innerHTML = '';
    
    calculationHistory.forEach(calc => {
        const li = document.createElement('li');
        li.textContent = calc;
        historyList.appendChild(li);
    });
}

/**
 * Clear all calculation history
 */
function clearHistory() {
    calculationHistory = [];
    updateHistoryDisplay();
}

/**
 * Handle addition button click
 */
function handleAdd() {
    const { num1, num2 } = getInputNumbers();
    const result = add(num1, num2);
    displayResult(result);
    addToHistory(`${num1} + ${num2} = ${result}`);
}

/**
 * Handle subtraction button click
 */
function handleSubtract() {
    const { num1, num2 } = getInputNumbers();
    const result = subtract(num1, num2);
    displayResult(result);
    addToHistory(`${num1} - ${num2} = ${result}`);
}

/**
 * Handle multiplication button click
 */
function handleMultiply() {
    const { num1, num2 } = getInputNumbers();
    const result = multiply(num1, num2);
    displayResult(result);
    addToHistory(`${num1} × ${num2} = ${result}`);
}

/**
 * Handle Enter key press in input fields
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleAdd(); // Default to addition on Enter
    }
}

// Add event listeners to buttons
addBtn.addEventListener('click', handleAdd);
subtractBtn.addEventListener('click', handleSubtract);
multiplyBtn.addEventListener('click', handleMultiply);
clearHistoryBtn.addEventListener('click', clearHistory);

// Add event listeners for Enter key
number1Input.addEventListener('keypress', handleKeyPress);
number2Input.addEventListener('keypress', handleKeyPress);

// Initialize with a welcome message
console.log('🧮 Simple Calculator loaded successfully!');
console.log('👥 Want to contribute? Check out BEGINNER_GUIDE.md');

// Load history from localStorage if available
window.addEventListener('load', () => {
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
        calculationHistory = JSON.parse(savedHistory);
        updateHistoryDisplay();
    }
});

// Save history to localStorage when it changes
window.addEventListener('beforeunload', () => {
    localStorage.setItem('calculatorHistory', JSON.stringify(calculationHistory));
});

// Made with Bob
