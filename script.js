'use strict';

const API_URL = 'https://api.adviceslip.com/advice';
const tip = document.querySelector('.advice');
const btn = document.querySelector('.btn');
let adviceID = document.querySelector('.advice-id');
let adviceMessage = document.querySelector('.advice-message');
const img = document.querySelector('.img');

const getAdvice = async () => {
  try {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  renderAdvice(data);  
  } catch (err) {
    console.error(err)
  }
};

const renderAdvice = (data) => {
  adviceID.innerHTML = `ADVICE #${Object.entries(data.slip)[0][1]}`;
  adviceMessage.innerHTML = `"${Object.entries(data.slip)[1][1]}"`;
  img.style.opacity = 1;
};

window.onload = getAdvice();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getAdvice();
});
 