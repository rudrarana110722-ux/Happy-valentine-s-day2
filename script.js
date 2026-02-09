const screens = document.querySelectorAll(".screen");
const correctBtns = document.querySelectorAll(".correct");
let current = 0;

correctBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    screens[current].classList.add("hidden");
    current++;
    screens[current].classList.remove("hidden");
  });
});

document.getElementById("yesBtn").addEventListener("click", ()=>{
  screens[current].classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
});
