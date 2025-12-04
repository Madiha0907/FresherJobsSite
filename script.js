// Sample job data (in a real app, fetch from a database)
const jobs = [
    { title: "Software Engineer", location: "Remote", skills: "JavaScript, Python", description: "Entry-level role for freshers.", companyName: "TechCorp Inc.", companyDetails: "A leading tech company specializing in web development. Contact: hr@techcorp.com | Headquarters: San Francisco." },
    { title: "Marketing Intern", location: "New York", skills: "Social Media, Content", description: "Learn marketing basics.", companyName: "BrandBoost Agency", companyDetails: "Creative agency focused on digital marketing. Contact: jobs@brandboost.com | Headquarters: New York." },
    { title: "Data Analyst", location: "Bangalore", skills: "Excel, SQL", description: "Analyze data for insights.", companyName: "DataInsights Ltd.", companyDetails: "Data-driven company in analytics. Contact: recruit@datainsights.com | Headquarters: Bangalore." }
];

// Load jobs on page load
document.addEventListener('DOMContentLoaded', () => {
    displayJobs(jobs);
});

// Display jobs
function displayJobs(jobList) {
    const jobListEl = document.getElementById('job-list');
    jobListEl.innerHTML = '';
    jobList.forEach(job => {
        const jobEl = document.createElement('div');
        jobEl.className = 'job-item';
        jobEl.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.companyName}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Skills:</strong> ${job.skills}</p>
            <p>${job.description}</p>
            <p><strong>Company Details:</strong> ${job.companyDetails}</p>
            <button onclick="applyForJob('${job.title}', '${job.companyName}', '${job.companyDetails}')">Apply Now</button>
        `;
        jobListEl.appendChild(jobEl);
    });
}

// Search jobs
function searchJobs() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.skills.toLowerCase().includes(query) || 
        job.location.toLowerCase().includes(query) ||
        job.companyName.toLowerCase().includes(query)
    );
    displayJobs(filtered);
}

// Handle registration
document.getElementById('reg-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration successful! (In a real app, save to database)');
    // Here, send data to server
});

// Handle application
document.getElementById('apply-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const jobTitle = document.getElementById('job-title-input').value;
    
    // Hide form and details, show success message
    document.getElementById('apply-form').style.display = 'none';
    document.getElementById('selected-job-details').style.display = 'none';
    const successEl = document.getElementById('application-success');
    successEl.style.display = 'block';
    
    // In a real app, send application data (including company details) to server here
    console.log(`Application submitted for: ${jobTitle}`); // For debugging
});

// Quick apply from job list
function applyForJob(title, companyName, companyDetails) {
    // Show selected job details
    const detailsEl = document.getElementById('selected-job-details');
    detailsEl.innerHTML = `
        <h3>Applying for: ${title}</h3>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Details:</strong> ${companyDetails}</p>
    `;
    detailsEl.style.display = 'block';
    
    // Pre-fill job title and show form
    document.getElementById('job-title-input').value = title;
    document.getElementById('apply-form').style.display = 'flex'; // Ensure form is visible
    document.getElementById('application-success').style.display = 'none'; // Hide success if shown
    
    // Scroll to apply section
    document.getElementById('apply').scrollIntoView();
}

// Reset application form for another application
function resetApplication() {
    document.getElementById('apply-form').reset();
    document.getElementById('apply-form').style.display = 'flex';
    document.getElementById('selected-job-details').style.display = 'none';
    document.getElementById('application-success').style.display = 'none';
}