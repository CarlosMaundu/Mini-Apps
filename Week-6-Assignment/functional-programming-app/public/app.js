import { countCoinsRecursive } from '../src/CoinCounter.js';
import { intToRoman } from '../src/RomanNumerals.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateCoins').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('coinInput').value);
        if (isNaN(amount) || amount < 0) {
            document.getElementById('coinOutput').textContent = "Please enter a valid amount.";
            return;
        }
        try {
            const coins = countCoinsRecursive(amount);
            const coinOutput = `
                Quarters: ${coins[25] || 0}<br>
                Dimes: ${coins[10] || 0}<br>
                Nickels: ${coins[5] || 0}<br>
                Pennies: ${coins[1] || 0}
            `;
            document.getElementById('coinOutput').innerHTML = coinOutput;
        } catch (error) {
            document.getElementById('coinOutput').textContent = error.message;
        }
    });

    document.getElementById('convertToRoman').addEventListener('click', () => {
        const number = parseInt(document.getElementById('romanInput').value, 10);
        if (isNaN(number) || number < 1 || number > 3999) {
            document.getElementById('romanOutput').textContent = "Please enter a valid number between 1 and 3999.";
            return;
        }
        try {
            const roman = intToRoman(number);
            document.getElementById('romanOutput').textContent = roman;
        } catch (error) {
            document.getElementById('romanOutput').textContent = error.message;
        }
    });
});
