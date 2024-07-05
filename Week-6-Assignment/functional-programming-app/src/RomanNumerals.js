// Mapping of Roman numeral symbols to their respective values.
const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];

// Recursive function to convert an integer to Roman numerals.
export const intToRoman = (num) => {
    if (typeof num !== 'number' || !Number.isFinite(num) || isNaN(num) || num % 1 !== 0) {
        throw new Error('Input must be a positive integer');
    }

    if (num < 1 || num > 3999) {
        throw new Error('Input must be a positive integer between 1 and 3999');
    }

    // Helper function with a base case to handle the recursion.
    const helper = (num) => {
        if (num === 0) return '';
        // Find the highest value from the romanNumerals array that fits into num.
        const { value, symbol } = romanNumerals.find(({ value }) => num >= value);
        // Recur with the remainder of num - value and append the symbol.
        return symbol + helper(num - value);
    };

    return helper(num);
};
