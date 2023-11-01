const scrollBtn1 = document.getElementById('scroll1');
const scrollBtn2 = document.getElementById('scroll2');
const scrollBtn3 = document.getElementById('scroll3');
const scrollBtn4 = document.getElementById('scroll4');
const secondPage = document.getElementById('page2');
const firstPage = document.getElementById('page1');
const thirdPage = document.getElementById('page3');
const fourthPage = document.getElementById('page4');



scrollBtn1.addEventListener('click', () =>{
  secondPage.style.display = 'none';
  firstPage.style.display = 'flex';
  thirdPage.style.display = 'none';
  fourthPage.style.display = 'none';
  console.log('clicked');
})


scrollBtn2.addEventListener('click', () =>{
  secondPage.style.display = 'flex';
  firstPage.style.display = 'none';
  thirdPage.style.display = 'none';
  fourthPage.style.display = 'none';
  console.log('clicked');
})

scrollBtn3.addEventListener('click', () =>{
  secondPage.style.display = 'none';
  firstPage.style.display = 'none';
  thirdPage.style.display = 'flex';
  fourthPage.style.display = 'none';
  console.log('clicked');
})

scrollBtn4.addEventListener('click', () =>{
  secondPage.style.display = 'none';
  firstPage.style.display = 'none';
  thirdPage.style.display = 'none';
  fourthPage.style.display = 'flex';
  console.log('clicked');
})