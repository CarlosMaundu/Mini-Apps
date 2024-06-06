document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem("jobs")) {
        const storedJobs = JSON.parse(sessionStorage.getItem("jobs"));
        displayJobs(storedJobs);
        updateJobCount(storedJobs.length);
    } else {
        fetchJobs();
    }
});

async function fetchJobs() {
    const pageSize = document.getElementById('pageSize').value;
    const response = await fetch(`/api/jobs?limit=${pageSize}`);
    const data = await response.json();
    sessionStorage.setItem("jobs", JSON.stringify(data.results));
    updateJobCount(data.results.length);
    displayJobs(data.results);
}

function updateJobCount(count) {
    const countElement = document.getElementById('job-count');
    countElement.innerHTML = `${count} Jobs Found`;
}

function displayJobs(jobs) {
    const jobsContainer = document.getElementById('jobs-container');
    jobsContainer.innerHTML = ''; 
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job';
        jobElement.innerHTML = `
            <h3>${job.name}</h3>
            <p>${job.company ? job.company.name : 'No company info'}</p>
            <p>${job.levels ? job.levels[0].name : 'No level info'}</p>
            <p>${job.categories ? job.categories[0].name : 'No category info'}</p>
            <p>${job.locations ? job.locations[0].name : 'No location info'}</p>
            <button onclick="displayJobDetails(${JSON.stringify(job).replace(/"/g, '&quot;')})">View More</button>
        `;
        jobsContainer.appendChild(jobElement);
    });
}

function displayJobDetails(job) {
    const jobsContainer = document.getElementById('jobs-container');
    jobsContainer.innerHTML = `
        <div class="job-detail">
            <h2>${job.name} at ${job.company ? job.company.name : 'No company info'}</h2>
            <p>${job.contents}</p>
            <button onclick="goBack()">Back to Listings</button>
        </div>
    `;
}

function goBack() {
    const storedJobs = JSON.parse(sessionStorage.getItem("jobs"));
    displayJobs(storedJobs);
    updateJobCount(storedJobs.length);
}

function filterByCategory(category) {
    const storedJobs = JSON.parse(sessionStorage.getItem("jobs"));
    const filteredJobs = storedJobs.filter(job => job.categories.some(cat => cat.name.includes(category)));
    displayJobs(filteredJobs);
    updateJobCount(filteredJobs.length);
}

function searchJobs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const locationInput = document.getElementById('locationInput').value.toLowerCase();
    const storedJobs = JSON.parse(sessionStorage.getItem("jobs"));
    const filteredJobs = storedJobs.filter(job => {
        return (
            job.name.toLowerCase().includes(searchInput) ||
            (job.company && job.company.name.toLowerCase().includes(searchInput)) ||
            (job.locations && job.locations.some(loc => loc.name.toLowerCase().includes(locationInput)))
        );
    });
    displayJobs(filteredJobs);
    updateJobCount(filteredJobs.length);
}

// Carousel functionality
let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-inner .company');
    if (slideIndex >= slides.length) currentSlide = 0;
    if (slideIndex < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
