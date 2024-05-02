// Synchronous Function - The code is evaluated line by line
function makeToastedBread() {
    console.log('1: Put bread in toaster');
    console.log('2: Wait for the bread to toast');
    console.log('3: Take out the toasted bread');
}

// Asynchronous Function - The code continues running while waiting for a certain operation to be finished
// Example 1
async function orderOnline() {
    console.log('1: Logged into online app to place an order');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    console.log('2: Food has been delivered');
    console.log('3: I am doing something else while waiting for food');
}

// Example 2
async function supermarketCheckout() {
    console.log('1: We have shopped and we\'re at the checkout stage');
    console.log('2: Mpesa payment via STK initiated');
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate payment confirmation
    console.log('3: Payment via Mpesa is confirmed');
    console.log('4: Packing our things, while waiting for confirmation');
}

// Async function to fetch some data from an external source
async function fetchSomeDataFromExternalSource(alwaysSucceed = false) {
    return new Promise((resolve, reject) => {
        const success = alwaysSucceed || Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve('This is data that was fetched from an external source');
            } else {
                reject(new Error('There was a problem retrieving the data'));
            }
        }, 2000);
    });
}

// Async function to simulate a login operation
async function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'password123') {
                resolve('Login successful');
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000);
    });
}

// Async function to simulate fetching user data
async function fetchUsers(alwaysSucceed = false) {
    return new Promise((resolve, reject) => {
        const success = alwaysSucceed || Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]);
            } else {
                reject(new Error('Failed to fetch users'));
            }
        }, 3000);
    });
}


module.exports = {
    orderOnline, supermarketCheckout, fetchSomeDataFromExternalSource, login, fetchUsers
};
