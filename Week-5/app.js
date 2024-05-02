// app.js

const { orderOnline, supermarketCheckout, fetchSomeDataFromExternalSource, login, fetchUsers } = require('./synch-asynch');

async function runApplication() {
    console.log("Running application...");
    await orderOnline();
    await supermarketCheckout();
    const data = await fetchSomeDataFromExternalSource();
    console.log(data);
    const loginMessage = await login('user', 'password123');
    console.log(loginMessage);
    const users = await fetchUsers();
    console.log(users);
}

runApplication();
