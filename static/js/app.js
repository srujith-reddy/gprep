const totalsubjects=document.getElementById('totalsubjects');
const totalsubjectsbuttons=document.getElementById('totalsubjectsubmit');
const form=document.getElementById('formdynamic');
const showresult=document.getElementById('showresult');
var number_of_subjects=1;
const confettiContainer = document.getElementById('confetti-container');
const celebrateButton = document.getElementById('celebrate-button');

const imagepage=document.getElementById('imagedemo');
imagepage.addEventListener('click',function(){
  window.location.href='/upload';
})

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confettiContainer.appendChild(confetti);
  setTimeout(() => {
    confetti.remove();
  }, 1000);
}
totalsubjectsbuttons.addEventListener('click',function(){
            number_of_subjects=totalsubjects.value;
            console.log(number_of_subjects);
            totalsubjects.value="";
            const InputHeading = document.createElement('h4');
            InputHeading.innerText="Enter the Grade and Credits";
            InputHeading.setAttribute('class','InputHeading');
            form.appendChild(InputHeading);
            



            for(var i=0;i<number_of_subjects;i++)
            {
                const formElement = document.createElement('div');
                formElement.setAttribute('method', 'post');
                formElement.setAttribute('action', '/submit-form');
                formElement.setAttribute('class','gradeandcreditdiv');

                const inputElement = document.createElement('input');
                inputElement.setAttribute('type', 'text');
                inputElement.setAttribute('name', 'myInput');
                inputElement.setAttribute('id',`${i}grade`);
                inputElement.setAttribute('placeholder', 'Grade');
                inputElement.setAttribute('required', true);

                const inputcreditElement = document.createElement('input');
                inputcreditElement.setAttribute('type', 'number');
                inputcreditElement.setAttribute('name', 'myInput');
                inputcreditElement.setAttribute('id',`${i}credit`);
                inputcreditElement.setAttribute('placeholder', 'Credits');
                inputcreditElement.setAttribute('required', true);



                formElement.appendChild(inputElement);
                formElement.appendChild(inputcreditElement);

                form.appendChild(formElement);

            }

            const calculatebutton=document.createElement('button');
            calculatebutton.setAttribute('id','calculatebutton');
            calculatebutton.setAttribute('class','calculatebutton')
            calculatebutton.innerHTML='Calculate';
            form.appendChild(calculatebutton);

            calculatebutton.addEventListener('click',function(){
                    
                let result=0;
                let totalcredits=0;
                let numerator=0;
                let middle=0;
    
                 for(var i=0;i<number_of_subjects;i++){
    
                        tempgrade=document.getElementById(`${i}grade`);
                        tempcredit=document.getElementById(`${i}credit`);
                        tempgrade=parseInt(tempgrade.value);
                        tempcredit=parseInt(tempcredit.value);

                        console.log(`${tempgrade}\t${tempcredit}`);
                        totalcredits+=tempcredit;
                        middle=(tempgrade*tempcredit);
                        numerator=numerator+middle;
                 }
                 console.log(`${totalcredits}`);
                 console.log(`numerator is ${numerator}`);
                 result=numerator/totalcredits;    
                 console.log(result);
                 const resultcard=document.createElement('div');
                 const resulttext=document.createElement('h4');
                 resultcard.setAttribute('class','resultcard');
                 resultcard.setAttribute('id','resultcard');
                 resulttext.innerText=`Your CGPA is ${result}`;
                 resultcard.appendChild(resulttext);
                 showresult.appendChild(resultcard);
                //  if(result>7.5){
                 for (let i = 0; i < 50; i++) {
                    setTimeout(createConfetti, i * 50);
                  }
                // }




    
    });
    




});




