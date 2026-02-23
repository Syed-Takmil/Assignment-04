



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

// function ShowNoJobsMessage(){
//     if(interview.length===0){   
//     const noJobsSection=document.getElementById('no-jobs-section');
//     noJobsSection.classList.remove('hidden');
// }}
// if(TotalJobs===0){
//     const noJobsSection=document.getElementById('no-jobs-section');
//     noJobsSection.classList.remove('hidden');
// }

    // For Interview Section
// Event-delegate
document.addEventListener('click', function(event){
 if(event.target.classList.contains('apply-btn')){
    const jobCard=event.target.closest('.job-card');
    const companyName=jobCard.querySelector('.company-name').innerText;
    const JobTitle=jobCard.children[1].children[0].innerText;
    const Desc=jobCard.querySelector('.description').innerText;
    const work=jobCard.querySelector('.work').innerText;
    jobCard.querySelector('.apply-status').innerText='Applied';
    const jobData={
        companyName,
        JobTitle,
        Desc,
        work,
            status:'Applied'
    }
    const isAlreadyInInterview=interview.find(job=>job.JobTitle===JobTitle);
   if(!isAlreadyInInterview){
    interview.push(jobData);
}


rejected = rejected.filter(job => job.JobTitle !== JobTitle);
jobCard.querySelector('.apply-status').innerText='Applied';
renderInterviewSection();
renderRejectedSection();
}
renderInterviewSection();});
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
        
            <div class="applied-btn btn bg-blue-200 font-medium text-[14px] text-[#002C5C] mb-2 apply-status" >
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

// For Rejected Section

// Event-delegate

document.addEventListener('click', function(event){
 if(event.target.classList.contains('reject-btn')){
    const jobCard=event.target.closest('.job-card');
    const companyName=jobCard.querySelector('.company-name').innerText;
    const JobTitle=jobCard.children[1].children[0].innerText;
    const Desc=jobCard.querySelector('.description').innerText;
    const work=jobCard.querySelector('.work').innerText;
jobCard.querySelector('.apply-status').innerText='Rejected';
    const jobData={
        companyName,
        JobTitle,
        Desc,
        work,
        status:'Rejected'
    }
    const isAlready=rejected.find(job=>job.JobTitle===JobTitle);
   if(!isAlready){
    rejected.push(jobData);
}

interview = interview.filter(job => job.JobTitle !== JobTitle);

renderInterviewSection();
renderRejectedSection();
}
renderRejectedSection();});

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
        
            <div class="applied-btn btn bg-blue-200 font-medium text-[14px] text-[#002C5C] mb-2 apply-status" >
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