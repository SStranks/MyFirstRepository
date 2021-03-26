const btn = document.querySelector('.share-icon');

const share = () => {
  var element = document.querySelector('.share-nav');
  var iconbackground = document.querySelector('.share-icon');
  var icon = document.querySelector('.share-icon img');
  element.classList.toggle('display');
  iconbackground.classList.toggle('share-icon-color');
  icon.classList.toggle('img-color');
}

btn.addEventListener('click', share)