let count = 0;
const button = document.getElementById("button-clicker");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
button.disabled = false;
function timer() {
  setTimeout(() => {
    button.disabled = true;
  }, 5000);
}
 
button.addEventListener("click", () => {
  count++;
  result.textContent = count;
  timer();
});
 
reset.addEventListener("click", () => {
  result.textContent = 0;
  location.reload();
});
 
 
 


