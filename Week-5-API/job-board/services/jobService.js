const fetchJobs = async (page = 1) => {
    const API_KEY = process.env.API_KEY;
    const API_URL = `https://www.themuse.com/api/public/jobs?page=${page}&api_key=${API_KEY}`;
  
    try {
      const fetch = (await import('node-fetch')).default;  
      const response = await fetch(API_URL);
      const rateLimit = response.headers.get('X-RateLimit-Remaining');
      const rateLimitReset = response.headers.get('X-RateLimit-Reset');
      
      console.log(`Rate Limit Remaining: ${rateLimit}`);
      console.log(`Rate Limit Resets in: ${rateLimitReset} seconds`);

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch jobs: ${errorDetails.error}`);
      }
      // directly return the JSON data
      return await response.json(); 
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return null; 
    }
  };
  
  module.exports = { fetchJobs };
  