const slidepage = document.querySelector('.slidepage');
const firxtnxtbtn = document.querySelector('.firxtnxtbtn');
const prevbtnsec = document.querySelector('.prev-1');
const nextbtnsec = document.querySelector('.next-1');
const prevbtnThird = document.querySelector('.prev-2');
const nextbtnThird = document.querySelector('.next-2');
const prevbtnFourth = document.querySelector('.prev-3');
const submit = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
let max = 4;
let current = 1;


firxtnxtbtn.addEventListener('click',function(){
    slidepage.style.marginLeft = '-25%';
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current += 1; 
})
nextbtnsec.addEventListener('click',function(){
    slidepage.style.marginLeft = '-50%';
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current += 1; 
})
nextbtnThird.addEventListener('click',function(){
    slidepage.style.marginLeft = '-75%';
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current += 1; 
})
submit.addEventListener('click',function(){
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current += 1; 
    setTimeout(function(){
        alert("Sign in Successfully.")
        location.reload();
    },800)
})

prevbtnsec.addEventListener('click',function(){
    slidepage.style.marginLeft = '0%';
   
    bullet[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    progressText[current-2].classList.remove('active');
    current -= 1; 
})
prevbtnThird.addEventListener('click',function(){
    slidepage.style.marginLeft = '-25%';
  
    bullet[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    progressText[current-2].classList.remove('active');
    current -= 1; 
})
prevbtnFourth.addEventListener('click',function(){
    slidepage.style.marginLeft = '-50%';
     
    bullet[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    progressText[current-2].classList.remove('active');
    current -= 1; 
})