// 01-timer.js

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let defaultDate;

let defaultDateMs;
let userSelectedDateMs;
let ms;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const flatpickrOnClose = selectedDates => {
  defaultDate = selectedDates[0];
  userSelectedDate = selectedDates[1];

  if ( det)


  // Ms
  defaultDateMs = Date.parse(defaultDate);
  userSelectedDateMs = Date.parse(userSelectedDate);
  ms = userSelectedDateMs - defaultDateMs;
  console.log('Ms: ', ms);
  if (!ms) {
  } else {
    document.querySelector('button').disabled = false;
  }
};

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),

  minuteIncrement: 1,
  mode: 'range',
  onClose: flatpickrOnClose,
});

document.querySelector('button').addEventListener('click', e => {
  let result = convertMs(ms);
  console.log(result);
  document.querySelector('span[data-days]').textContent = result.days;
  document.querySelector('span[data-hours]').textContent = result.hours;
  document.querySelector('span[data-minutes]').textContent = result.minutes;
  document.querySelector('span[data-seconds]').textContent = result.seconds;
});
