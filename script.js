



let interview=[];
let rejected=[];


// Section Variables

const allSection = document.getElementById("all-section");
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");

function UpdateCounts() {
// Count Holders

const TotalJobs=allSection.querySelectorAll('.job-card').length;
const InterviewJobs=interviewSection.querySelectorAll('.job-card').length;
const rejectedJobs=rejectedSection.querySelectorAll('.job-card').length;


let TotalCount=document.getElementById('total-count');
let InterviewCount=document.getElementById('interview-count');
let RejectedCount=document.getElementById('rejected-count');
console.log(TotalJobs,InterviewJobs,rejectedJobs);
// Value Assign
   TotalCount.innerText=TotalJobs;
   InterviewCount.innerText=InterviewJobs;
   RejectedCount.innerText=rejectedJobs;
}
UpdateCounts();

function ShowOnly(id){
    allSection.classList.add('hidden')
    interviewSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');

    const section=document.getElementById(id);
    section.classList.remove('hidden');

}


// Toggle Function
function Toggle(id){
    const AllButton=document.getElementById('all-button');
    const interviewButton=document.getElementById('interview-button');
    const rejectedButton=document.getElementById('rejected-button');

    AllButton.classList.remove('bg-blue-400','text-white');
    interviewButton.classList.remove('bg-blue-400','text-white');
    rejectedButton.classList.remove('bg-blue-400','text-white');
    document.getElementById(id).classList.add('bg-blue-400','text-white');
}
// For All-Button (already clicked when page is load)
document.addEventListener("DOMContentLoaded", function () {
    Toggle('all-button');
});

if(TotalJobs===0){
    const noJobsSection=document.getElementById('no-jobs-section');
    noJobsSection.classList.remove('hidden');
}

