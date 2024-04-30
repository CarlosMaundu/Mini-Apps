import { fetchUserDataWithCallback, fetchUserDataAsync, fetchUserDataPromise } from './index.js';

describe('fetchUserDataWithCallback', () => {
    test('fetches data correctly', done => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
        fetchUserDataWithCallback(apiUrl, (error, data) => {
            expect(data).toBeDefined();
            expect(error).toBeNull();
            done();
        });
    });
});

describe('fetchUserDataAsync', () => {
    test('fetches data using async/await', async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
        const data = await fetchUserDataAsync(apiUrl);
        expect(data).toBeDefined();
    });
});

describe('fetchUserDataPromise', () => {
    test('fetches data using promises', async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
        const data = await fetchUserDataPromise(apiUrl);
        expect(data).toBeDefined();
    });
});
