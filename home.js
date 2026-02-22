


const AllDeleteButtons = document.querySelectorAll('.delete-btn');

AllDeleteButtons.forEach(b => {
    b.addEventListener("click", function() {
        const jobCard = this.closest(".job-card");
        jobCard.classList.add("hidden");
        
const totalJobs = document.getElementById("total-count");
        totalJobs.innerText = parseInt(totalJobs.innerText) - 1;
        const jobCount = document.getElementById("job-count");
        jobCount.innerText = parseInt(jobCount.innerText) - 1;
        }
    )
    })