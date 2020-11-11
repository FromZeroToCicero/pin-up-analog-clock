const degrees = 6;
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * degrees;
  const ss = day.getSeconds() * degrees;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});
