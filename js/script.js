
//variables

let submit = document.querySelector('#submit');
let submitOtp = document.querySelector('#submitOtp');
let enroll;
let stdName;
let otp;
let stdOtp;
let attendance = 'P';
let heading = document.querySelector('.heading');



// Submit click event && Enrollment Verification 

submit.addEventListener('click',(e)=>{
    e.preventDefault();
     x =2;
    enroll = document.querySelector('#enrolnum').value;

    fetch('https://opensheet.elk.sh/1hzoUeSCr7RuX6fMSheOGVwzqtH0qAswsPDvtsQt4gJY/mscitdb')
    .then(response=> response.json())
    .then(data=>{

        for(let i=0; i < data.length; i++){
        let check = data[i].enroll;
        console.log(check);
       if(enroll == check){
         $('#enrollForm').hide();
         $('#matchEnrol').show();
        heading.innerHTML="Student information !";
        document.querySelector('#stdName').value=data[i].name;
        stdName= data[i].name;
        document.querySelector('#stdEnrol').value=data[i].enroll;
    }
    }
    })
    
});


//OTP verification function && Present Ajax function 

submitOtp.addEventListener('click', function(e){
  e.preventDefault();
  
  stdOtp = document.querySelector('#OTP').value;
  fetch('https://opensheet.elk.sh/1rCgup_JYwynDpkwuhQE0E9V0QYwpUVvOUI9oBDZoSBo/otp')
  .then(response=> response.json())
  .then(data=>{
    let otp = data[0].code;
    if(otp == stdOtp){
   
       $.ajax({
    url: " https://docs.google.com/forms/u/0/d/e/1FAIpQLSdDJWKVIF8Wtfw2YWZnV5gVTBxJgE8vAunXBQ002K6RydFUUw/formResponse",
    data: {
      "entry.639844031": enroll,
      "entry.1494585417":stdName,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
    error: function (x, y, z) {
      // $('#form').hide();
    
    alert('data sent successfully');
      --window.location.reload();
    },
  });
      
    }
    else{
      alert('wrong code');
    }
  })
});''







// https://docs.google.com/forms/u/0/d/e/1FAIpQLSexu87iArcDCKdRkyJCpf2azXq0tA0cVImLC7zc5U0UvvhQ2A/formResponse
// entry.1476947470    
    