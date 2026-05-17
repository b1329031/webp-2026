var container = document.getElementById('container');

function randomChars(min, max) {
  var len = Math.floor(Math.random() * (max - min + 1)) + min;
  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  return result;
}

window.onload = function() {
  container.textContent = randomChars(0, 2);
};

window.addEventListener('keyup', function(e) {
  console.log(e.key);

  if (e.key) {
    var str = container.textContent;
    // 檢查第一個字元是否和 e.key 一樣，一樣的話把第一個字元消除
    if (str.length > 0 && e.key === str[0]) {
      container.textContent = str.substring(1);
    }
  }

  add_new_chars();
});

function add_new_chars() {
  container.textContent += randomChars(1, 3);
}
