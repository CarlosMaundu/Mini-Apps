import { countCoinsRecursive, coinCounterClosure } from '../src/CoinCounter.js';
import { intToRoman } from '../src/RomanNumerals.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateCoins').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('coinInput').value);
        try {
            const coins = countCoinsRecursive(amount);
            document.getElementById('coinOutput').textContent = JSON.stringify(coins);
        } catch (error) {
            document.getElementById('coinOutput').textContent = error.message;
        }
    });

    // Make sure the conversion function is called when the button is clicked
    document.getElementById('convertToRoman').addEventListener('click', () => {
        const number = parseInt(document.getElementById('romanInput').value, 10);
        if (isNaN(number)) {
            document.getElementById('romanOutput').textContent = "Please enter a valid number";
            return;
        }
        try {
            const roman = intToRoman(number);
            document.getElementById('romanOutput').textContent = roman || "Input out of range (1-3999)";
        } catch (error) {
            document.getElementById('romanOutput').textContent = error.message;
        }
    });
});
