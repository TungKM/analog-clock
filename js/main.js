const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90; //need to offset by 90deg as it had been initialized in style
  const minDegrees = (min / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //cant perform correnctly as the style had been offset by 90deg
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
