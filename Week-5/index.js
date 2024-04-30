let initialized = false;
let fetch;

const init = async () => {
    if (!initialized) {
        const module = await import('node-fetch');
        fetch = module.default;
        initialized = true;
    }
}


    // Asynchronous function using a callback
    export async function fetchUserDataWithCallback(url, callback) {
        await init();
        fetch(url)
            .then(response => response.json())
            .then(data => callback(null, data))
            .catch(error => callback(error, null));
    }
    

    // Function that mimics a synchronous API call using async/await
    export async function fetchUserDataAsync(url) {
        await init();
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            return null;
        }
    }

    // Function to fetch user data using promises directly
    export async function fetchUserDataPromise(url) {
        await init();
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    // URL to fetch data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

    // Demonstrate using a callback
    fetchUserDataWithCallback(apiUrl, (error, data) => {
        console.log('Callback - User Data:', data);
    });

    // Demonstrate using promises directly
    fetchUserDataPromise(apiUrl)
        .then(data => console.log('Promise - User Data:', data))
        .catch(error => console.error('Promise Error:', error));

    // Demonstrate using async/await
    (async function() {
        const data = await fetchUserDataAsync(apiUrl);
        console.log('Async/Await - User Data:', data);
    })();
});
