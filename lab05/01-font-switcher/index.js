const makeBigger = () => {
   console.log("bigger");
   let para = document.querySelector('h1');
   let temp_font = window.getComputedStyle(para).fontSize;
   document.querySelector("h1").style.fontSize = (parseFloat(temp_font) + 10) + 'px';

   let para1 = document.querySelector('.content');
   let temp_font1 = window.getComputedStyle(para1).fontSize;
   document.querySelector(".content").style.fontSize = (parseFloat(temp_font1) + 10) + 'px';
};

const makeSmaller = () => {
   console.log("smaller");
   let para = document.querySelector('h1');
   let temp_font = window.getComputedStyle(para).fontSize;
   document.querySelector("h1").style.fontSize = (parseFloat(temp_font) - 10) + 'px';

   let para1 = document.querySelector('.content');
   let temp_font1 = window.getComputedStyle(para1).fontSize;
   document.querySelector(".content").style.fontSize = (parseFloat(temp_font1) - 10) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

