// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let themeBtn = document.querySelector('.theme-btn');
let section = document.querySelector('.section');
let title = document.querySelector('.title');
let description = document.querySelector('.description');
let pwdBtn = document.querySelector('.pwd-btn');
let pwd1 = document.querySelector('.pwd1');
let pwd2 = document.querySelector('.pwd2');
let slider = document.querySelector('.slider');
let output = document.querySelector('.pwd-range');

// set and show password range
output.textContent = `Pwd Range: ${slider.value}`;
slider.oninput = function () {
  output.textContent = `Pwd Range: ${slider.value}`;
};

// Toggle white and dark theme
function darkTheme() {
  themeBtn.textContent = 'Dark Theme';
  themeBtn.classList.add('dark');
  section.classList.add('white');
  title.classList.add('white');
  description.classList.add('white');
}

function whiteTheme() {
  themeBtn.textContent = 'White Theme';
  themeBtn.classList.remove('dark');
  section.classList.remove('white');
  title.classList.remove('white');
  description.classList.remove('white');
}

themeBtn.addEventListener('click', () => {
  if (themeBtn.textContent === 'White Theme') {
    darkTheme();
  } else {
    whiteTheme();
  }
});

// generate and display password
function generateRandomPwd() {
  let pwd = '';
  for (let i = 0; i < slider.value; i++) {
    let char = Math.floor(Math.random() * characters.length);
    pwd += characters[char];
  }
  return pwd;
}

pwdBtn.addEventListener('click', () => {
  pwd1.textContent = generateRandomPwd();
  pwd1.style.cursor = 'pointer';
  pwd2.textContent = generateRandomPwd();
  pwd2.style.cursor = 'pointer';
});

// Copy password when click
pwd1.addEventListener('click', () => {
  navigator.clipboard.writeText(pwd1.textContent);
  alert('Password one has been copied to clipboard.');
});

pwd2.addEventListener('click', () => {
  navigator.clipboard.writeText(pwd2.textContent);
  alert('Password two has been copied to clipboard.');
});
