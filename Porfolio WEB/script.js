let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const phTime = now.toLocaleString("en-US", { timeZone: "Asia/Philippines" });
const [date, time] = phTime.split(", ");
timeText.textContent = `${time} UTC+8`

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;