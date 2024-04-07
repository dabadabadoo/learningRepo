console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533ccc"));

function calcFactAge(year) {
  const currecntYear = new Date().getFullYear();
  const age - currentYear - year;
  return age;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020))
console.log(calcFactAge(2019))

