let red = document.getElementById('red'),
green = document.getElementById('green'),
blue = document.getElementById('blue'),
opacity = document.getElementById('opacity'),
result = document.getElementById('result'),
copy = document.querySelector('.copy');

function changeColor(control) {
  control.oninput = function() {
    result.value = `rgb(${red.value} ${green.value} ${blue.value} / ${opacity.value}%)`;

    document.documentElement.style.setProperty('--bg-Color', result.value);
  }
}
changeColor(red)
changeColor(green)
changeColor(blue)
changeColor(opacity)

copy.addEventListener('click', function() {
  result.select();
  document.execCommand('copy');
})
