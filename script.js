
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const question = document.querySelector('.question');

const gifYes1 = document.querySelector('.gif-yes1');
const gifYes2 = document.querySelector('.gif-yes2');
const gifNo = document.querySelector('.gif-no');

// YES button click
yesBtn.addEventListener('click', () => {
  // Change question text
  question.textContent = "Aww, my busy bae , love loving you my 28 yo ! ❤️";

  // Show yes GIFs
  gifYes1.src = 'yes1.gif';
  gifYes2.src = 'yes2.gif';
  gifYes1.style.display = 'inline-block';
  gifYes2.style.display = 'inline-block';

  // Hide no GIF
  gifNo.style.display = 'none';
});

// NO button click
noBtn.addEventListener('click', () => {
  // Change question text
  question.textContent = "why u clicked no u made me cry ";

  // Show no GIF
  gifNo.src = 'no1.gif';
  gifNo.style.display = 'inline-block';

  // Hide yes GIFs
  gifYes1.style.display = 'none';
  gifYes2.style.display = 'none';
});

