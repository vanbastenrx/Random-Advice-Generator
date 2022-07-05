'use strict';

const API_URL = 'https://api.adviceslip.com/advice';
const tip = document.querySelector('.tip');
const btn = document.querySelector('.btn');
let tipId = document.querySelector('.tip-id');
let tipMessage = document.querySelector('.tip-message');
const title = document.querySelector('.title');

const getAdivisorTip = async () => {
  try {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  console.log(data);
  renderTip(data);  
  } catch (err) {
    console.error(err)
  }
};

const renderTip = (data) => {
  tipId.innerHTML = `ADVICE #${Object.entries(data.slip)[0][1]}`;
  tipMessage.innerHTML = `${Object.entries(data.slip)[1][1]}`;
  title.innerHTML = '';
};


btn.addEventListener('click', (e) => {
  e.preventDefault();
  getAdivisorTip();
})
 