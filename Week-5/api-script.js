// Synchronous Function - The code is evaluated line by line
function makeToastedBread() {
    console.log('1: Put bread in toaster');
    console.log('2: Wait for the bread to toast');
    console.log('3: Take out the toasted bread');
}

// Asynchronous Function - The code continues running while waiting for a certain operation to be finished
// Example 1
function orderOnline() {
    console.log('1: Logged into online app to place an order');
    setTimeout(function() {
        console.log('2: Food has been delivered');
    }, 1000); // Time is in milliseconds
    console.log('3: I am doing something else while waiting for food');
}

// Example 2
function supermarketCheckout() {
    console.log('1: We have shopped and we\'re at the checkout stage');
    console.log('2: Mpesa payment via STK initiated');
    setTimeout(function() {
        console.log('3: Payment via Mpesa is confirmed');
    }, 5000);
    console.log('4: Packing our things, while waiting for confirmation');
}

// Promise 1: Fetch some data from an external source
function fetchSomeDataFromExternalSource() {
    console.log('Initiated fetching data from external source');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchedData = 'This is data that was fetched from an external source';
            resolve(fetchedData);
        }, 2000);
    });
}

// Promise 2: Simulate a login operation
function login(username, password) {
    console.log('Attempting to login');
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

// Promise 3: Simulate fetching user data
function fetchUsers() {
    console.log('Fetching users...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [{ id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob', age: 30 }];
            resolve(users);
        }, 3000);
    });
}

// Chaining Promises
function performDependentOperations() {
    login('user', 'password123')
        .then((loginResult) => {
            console.log(loginResult);
            return fetchSomeDataFromExternalSource();
        })
        .then((fetchedData) => {
            console.log(fetchedData);
            return fetchUsers();
        })
        .then((users) => {
            console.log(users);
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

// Testing Functions Based on Command Line Arguments
const command = process.argv[2];

switch (command) {
    case 'makeToastedBread':
        makeToastedBread();
        break;
    case 'orderOnline':
        orderOnline();
        break;
    case 'supermarketCheckout':
        supermarketCheckout();
        break;
    case 'fetchData':
        fetchSomeDataFromExternalSource().then(console.log).catch(console.error);
        break;
    case 'login':
        login('user', 'password123').then(console.log).catch(console.error);
        break;
    case 'fetchUsers':
        fetchUsers().then(console.log).catch(console.error);
        break;
    case 'dependentOperations':
        performDependentOperations();
        break;
    default:
        console.log('No valid command specified');
}


