// synch-asynch.test.js
const { fetchSomeDataFromExternalSource, login, fetchUsers } = require('./synch-asynch');

// Test fetching data from an external source
test('fetchSomeDataFromExternalSource succeeds', async () => {
    await expect(fetchSomeDataFromExternalSource(true)).resolves.toBe('This is data that was fetched from an external source');
});

// Test login function
test('login with correct credentials', async () => {
    await expect(login('user', 'password123')).resolves.toBe('Login successful');
});

test('login with incorrect credentials', async () => {
    await expect(login('user', 'wrongpassword')).rejects.toThrow('Invalid username or password');
});


// Test fetching users
test('fetchUsers succeeds', async () => {
    await expect(fetchUsers(true)).resolves.toEqual([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]);
});

