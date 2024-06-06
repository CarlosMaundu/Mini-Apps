# Job Board Application

This project is a simple job board application that fetches and displays job listings from The Muse API.

## Project Specifications

### API Interaction

- The application uses the Fetch API to make asynchronous calls, handling promises and potentially chaining them to handle complex sequences of asynchronous operations.
- The Muse API supports CORS and returns JSON.
- An `.env` file is used to manage environment variables securely.

### Application Structure

- **UI Logic**: Handles DOM interactions and UI updates.
- **Service Logic**: Manages API requests and response handling.
- **Business Logic**: Processes data and implements the core functionalities of the application.

## Setup Instructions

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your The Muse API key like this: `API_KEY=your_api_key`.
4. Run the application using `npm start`.

## Dependencies

- Node.js
- Express.js
- dotenv

## API Configurations
### Environment Variables
Create a `.env` file in the root of the project and include the following:

`PORT=3000          # The port the server will listen on
API_KEY=your_api_key_here   # Your API key for The Muse API`

## API Rate Limits
The Muse API imposes rate limits. Here's how they are handled:

- API Key: Include your API key in requests to increase your rate limit to 3600 requests per hour.
- Rate Limit Info: Each API response includes headers that provide information about your current rate limit status:
- - X-RateLimit-Remaining: The number of requests left for the current period
- - X-RateLimit-Limit: The maximum number of requests that can be made in the current period
- - X-RateLimit-Reset: The number of seconds until the rate limit is reset

## Running Tests

You can run tests using the `npm test` command.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
