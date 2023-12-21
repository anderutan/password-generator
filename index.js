// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let themeBtn = document.querySelector('.theme-btn');
let section = document.querySelector('.section');
let title = document.querySelector('.title');
let description = document.querySelector('.description');

themeBtn.addEventListener('click', () => {
  if (themeBtn.textContent === 'White Theme') {
    themeBtn.textContent = 'Dark Theme';
    themeBtn.classList.add('dark');
    section.classList.add('white');
    title.classList.add('white');
    description.classList.add('white');
  } else {
    themeBtn.textContent = 'White Theme';
    themeBtn.classList.remove('dark');
    section.classList.remove('white');
    title.classList.remove('white');
    description.classList.remove('white');
  }
});
