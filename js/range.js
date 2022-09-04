var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
<<<<<<< HEAD
  rangeBullet.style.left = (bulletPosition * 88) + "%";
=======
  rangeBullet.style.left = (bulletPosition * 75) + "%";
>>>>>>> e2e751d40363457b39f7beeea870c8c433d793fe
}