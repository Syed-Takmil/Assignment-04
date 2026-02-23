




// Logic for Count Holder Section

// function updateCounts() {
//     const totalJobs = document.getElementById("total-count");
//     const interviewCount = document.getElementById("interview-count");
//     const rejectedCount = document.getElementById("rejected-count");
    
//     totalJobs.innerText = totalCount("all-section");
//     interviewCount.innerText = totalCount("interview-jobs");
//     rejectedCount.innerText = totalCount("rejected-jobs");
// }
function totalCount(id){
    const count = document.getElementById(id).childElementCount;
    console.log(count);
} 
document.getElementById("interview-button").addEventListener("click", function() {
    console.log("Interview button clicked");
})

// Logic for Delete Button

const AllDeleteButtons = document.querySelectorAll('.delete-btn');
AllDeleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.job-card');
        card.remove();

        const JobCount = document.getElementById('job-count');
        JobCount.innerText = document.querySelectorAll('.job-card').length;
        UpdateCounts();
        const totalJobs = document.getElementById("total-count");
      if (JobCount.innerText === "0") {
            document.getElementById("no-jobs-section").classList.remove("hidden");
        }
    });
    })
    
      




    