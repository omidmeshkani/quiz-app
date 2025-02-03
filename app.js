const timerElement = document.getElementById('timer');
const selectTime = document.getElementById('time');
let timerInterval;

// تابع برای شروع تایمر
function startTimer() {
  // پاک کردن interval قبلی (اگر وجود دارد)
  clearInterval(timerInterval);

  // دریافت زمان انتخاب شده توسط کاربر
  const valueTime = parseInt(selectTime.options[selectTime.selectedIndex].value);
  let timeLeft = valueTime;

  // نمایش زمان اولیه
  timerElement.textContent = formatTime(timeLeft);

  // شروع تایمر
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "زمان به پایان رسید!";
      // عملکرد بعد از پایان زمان (مثلاً رفتن به سوال بعدی)
      // alert("زمان به پایان رسید!");
    } else {
      timeLeft--;
      timerElement.textContent = formatTime(timeLeft);
    }
  }, 1000);
}

// تابع برای فرمت زمان به صورت MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// فراخوانی تابع startTimer هنگام شروع آزمون یا نمایش سوال جدید
startTimer();