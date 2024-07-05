// Recursive function to calculate the number of coins needed for a given amount.
export const countCoinsRecursive = (amount) => {
    if (amount < 0) {
        throw new Error('Amount must be a positive number');
    }

    // Helper recursive function to calculate coins
    const helper = (amount, denominations) => {
        if (amount === 0) return {};
        const [coin, ...rest] = denominations;
        const count = Math.floor(amount / coin);
        const remainder = amount % coin;
        // Recursive call for the remainder with the rest of the coins
        return { [coin]: count, ...helper(remainder, rest) };
    };

    const denominations = [25, 10, 5, 1];
    const amountInCents = Math.round(amount * 100);
    return helper(amountInCents, denominations);
};

// Function using closures to count coins
export const coinCounterClosure = (amount) => {
    if (amount < 0) {
        throw new Error('Amount must be a positive number');
    }

    const amountInCents = Math.round(amount * 100);

    // Curried function to create a coin counter
    const makeCounter = (coinValue) => (amount) => {
        const count = Math.floor(amount / coinValue);
        return [count, amount % coinValue];
    };

    // Define counters for each denomination using the curried function.
    const counters = [
        { coin: 25, counter: makeCounter(25) },
        { coin: 10, counter: makeCounter(10) },
        { coin: 5, counter: makeCounter(5) },
        { coin: 1, counter: makeCounter(1) },
    ];

    // Use reduce to apply each counter to the amount, accumulating the results.
    return counters.reduce((acc, { coin, counter }) => {
        const [count, remainder] = counter(acc.remainder);
        return { ...acc, [coin]: count, remainder };
    }, { remainder: amountInCents });
};

