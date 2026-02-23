




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

// Value Assign
   TotalCount.innerText=TotalJobs;
   InterviewCount.innerText=InterviewJobs;
   RejectedCount.innerText=rejectedJobs;
}
UpdateCounts();
// For All-Button (already clicked when page is load)
document.addEventListener("DOMContentLoaded", function () {
    Toggle('all-button');
        ShowOnly('all-section');
});

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

function ShowNoJobsMessage() {
    // Sections
    const noJobsSectionAll = document.getElementById('no-jobs-section-all');
    const noJobsSectionInterview = document.getElementById('no-jobs-section-interview');
    const noJobsSectionRejected = document.getElementById('no-jobs-section-rejected');

    //  ALL section
    if(allSection.querySelectorAll('.job-card').length === 0){
        noJobsSectionAll.classList.remove('hidden');
    } else {
        noJobsSectionAll.classList.add('hidden');
    }

    //  for INTERVIEW section
    if(interview.length === 0){
        noJobsSectionInterview.classList.remove('hidden');
    } else {
        noJobsSectionInterview.classList.add('hidden');
    }

    //  for REJECTED section
    if(rejected.length === 0){
        noJobsSectionRejected.classList.remove('hidden');
    } else {
        noJobsSectionRejected.classList.add('hidden');
    }
}

    // For Interview Section
// Event-delegate
document.querySelectorAll('#all-section, #interview-section, #rejected-section').forEach(section => {
    section.addEventListener('click', function(event) {
        const jobCard = event.target.closest('.job-card');
        if(!jobCard) return; // Ignore clicks outside cards

        const companyName = jobCard.querySelector('.company-name').innerText;
        const JobTitle = jobCard.children[1].children[0].innerText;
        const Desc = jobCard.querySelector('.description').innerText;
        const work = jobCard.querySelector('.work').innerText;

        //  INTERVIEW BUTTON
        if(event.target.classList.contains('apply-btn')){
            const status = jobCard.querySelector('.apply-status');
            status.innerText = 'Applied';
            status.style.backgroundColor = '#10B981';
            status.style.color = 'white';
            rejected = rejected.filter(job => job.JobTitle !== JobTitle);

        
            if(!interview.find(job => job.JobTitle === JobTitle)){
                interview.push({ companyName, JobTitle, Desc, work, status:'Applied' });
            }

            renderInterviewSection();
            renderRejectedSection();
        }

        // REJECT BUTTON
        if(event.target.classList.contains('reject-btn')){
            const status = jobCard.querySelector('.apply-status');
            status.innerText = 'Rejected';
            status.style.backgroundColor = '#EF4444';
            status.style.color = 'white';

            // Remove from interview
            interview = interview.filter(job => job.JobTitle !== JobTitle);

            // Add to rejected if not already there
            if(!rejected.find(job => job.JobTitle === JobTitle)){
                rejected.push({ companyName, JobTitle, Desc, work, status:'Rejected' });
            }

            renderInterviewSection();
            renderRejectedSection();
        }

        // Update counts
        UpdateCounts();
    });
});

// Rendering Interview Section
function renderInterviewSection(){
    interviewSection.innerHTML='';
    interview.forEach(job=>{
        const div=document.createElement('div');
        div.classList.add('job-card','border','border-[#F1F2F4]','p-6','rounded-lg','mb-4','bg-white');

        div.innerHTML=`
            <div class="company-name font-semibold text-[18px] mb-1">
            ${job.companyName}
            </div>

  <div class="flex items-center justify-between">
               <div class="job title font-regular text-[16px] text-[#64748B] mb-5">
               ${job.JobTitle}</div>
                <div class="rounded-full border border-[#F1F2F4] p-2 btn delete-btn">
                    <i class="fa-regular fa-trash-can  "></i>
                
</div>
 </div>

<div class="description flex text-[#64748B] font-regular text-[14px] mb-5">${job.Desc}</div>
        
            <div class="applied-btn btn bg-green-600 font-medium text-[14px] text-white mb-2 apply-status" >
                ${job.status}
            </div>
            <p class="work text-[#323B49] font-regular text-[14px] mb-5">
                ${job.work}
            </p>

            <div class="buttons flex gap-2">
                <button class="btn py-3 px-2 border-[#10B981] text-[#10B981] rounded-[4px] apply-btn">INTERVIEW</button>
                <button class="btn border-[#EF4444] text-[#EF4444] rounded-[4px] reject-btn">REJECTED</button></div>
          </div>
        `;
        interviewSection.appendChild(div);
    });

    UpdateCounts();

}

// Rendering Rejected Section

function renderRejectedSection(){
    rejectedSection.innerHTML='';
    rejected.forEach(job=>{
        const div=document.createElement('div');
        div.classList.add('job-card','border','border-[#F1F2F4]','p-6','rounded-lg','mb-4','bg-white');

        div.innerHTML=`
            <div class="company-name font-semibold text-[18px] mb-1">
            ${job.companyName}
            </div>

  <div class="flex items-center justify-between">
               <div class="job title font-regular text-[16px] text-[#64748B] mb-5">
               ${job.JobTitle}</div>
                <div class="rounded-full border border-[#F1F2F4] p-2 btn delete-btn">
                    <i class="fa-regular fa-trash-can  "></i>
                
</div>
 </div>

<div class="description flex text-[#64748B] font-regular text-[14px] mb-5">${job.Desc}</div>
        
            <div class="applied-btn btn bg-red-500 font-medium text-[14px] text-white mb-2 apply-status" >
                ${job.status}
            </div>
            <p class="work text-[#323B49] font-regular text-[14px] mb-5">
                ${job.work}
            </p>

            <div class="buttons flex gap-2">
                <button class="btn py-3 px-2 border-[#10B981] text-[#10B981] rounded-[4px] apply-btn">INTERVIEW</button>
                <button class="btn border-[#EF4444] text-[#EF4444] rounded-[4px] reject-btn">REJECTED</button></div>
          </div>
        `;
        rejectedSection.appendChild(div);
    });

    UpdateCounts();

}

const count=document.getElementById('job-count');
document.getElementById('interview-button').addEventListener('click', function(){
    count.innerText=interview.length;
});
document.getElementById('rejected-button').addEventListener('click', function(){
    count.innerText=rejected.length;
});
document.getElementById('all-button').addEventListener('click', function(){
    count.innerText=document.querySelectorAll('.job-card').length;
});

document.querySelectorAll('.delete-btn')
.forEach(btn=>{
    btn.addEventListener('click', function(){
        const jobCard = btn.closest('.job-card');
        jobCard.remove();
            UpdateCounts();
             const jobCount = document.getElementById("job-count");
            jobCount.innerText = parseInt(jobCount.innerText) - 1;
            ShowNoJobsMessage();
    })});