let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let number = document.querySelector(".number")
let reset = document.querySelector(".reset");

number.innerHTML = "0";

for (i = -1; i < 0; i++){
  plus.addEventListener('click', function() {
   i++;
   number.innerHTML=(i);
});
  minus.addEventListener('click', function() {
    i--;
    number.innerHTML=(i);
});
  reset.addEventListener('click', function () {
  i = 0;
    number.innerHTML=(0);
    
});
};