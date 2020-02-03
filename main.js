const displayDate = document.getElementById('display-date');

setInterval(() => snow(), 65);
setInterval(() => calculateDate(), 1000);

function snow(){
  const newElement = document.createElement('i');
  newElement.setAttribute('class', 'far fa-snowflake');
  newElement.style.left = Math.random() * window.innerWidth + 'px';
  newElement.style.animationDuration = Math.random() * 3 + 2 + 's';
  newElement.style.fontSize = Math.random() * 10 + 10 + 'px';
  newElement.style.opacity = Math.random();
  
  document.body.appendChild(newElement);
  setTimeout(() => newElement.remove(), 5000);
}

function calculateDate(){
  const date = new Date();
  displayDate.innerHTML = `<div class="container">
                            <div class="col"><span class="number">${date.toLocaleString('en-us', {  weekday: 'short' })}</span><span class="unit">Day</span></div>: 
                            <div class="col"><span class="number">${date.getHours()}</span><span class="unit">Hours</span></div>: 
                            <div class="col"><span class="number">${date.getMinutes()}</span><span class="unit">Minutes</span></div>: 
                            <div class="col"><span class="number">${date.getSeconds()}</span><span class="unit">Secondes</span></div>
                          </div>`;
}