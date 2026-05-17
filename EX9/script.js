var api_key = 'ca370d51a054836007519a00ff4ce59e';

var imglist_Url =
  'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent' +
  '&api_key=' + api_key +
  '&per_page=10&format=json&nojsoncallback=1';

function getImgs() {
  var container = document.getElementById('container');
  container.innerHTML = '';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', imglist_Url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var photos = data.photos.photo;
      photos.forEach(function(photo) {
        getSizes(photo.id);
      });
    }
  };
}

function getSizes(photo_id) {
  var img_Url =
    'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes' +
    '&api_key=' + api_key +
    '&photo_id=' + photo_id +
    '&format=json&nojsoncallback=1';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', img_Url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var sizes = data.sizes.size;
      var target = sizes.find(function(s) { return s.label === 'Medium 640'; });
      if (!target) target = sizes[sizes.length - 1];
      addImg(target.source);
    }
  };
}

function addImg(src) {
  var container = document.getElementById('container');
  var img = document.createElement('img');
  img.src = src;
  img.className = 'photo';
  container.appendChild(img);
}
