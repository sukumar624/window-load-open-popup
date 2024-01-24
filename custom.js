// Window Load pdf popup Open JS
let popup_overlay = document.querySelector('.popup_overlay');
let modal_box = document.querySelector('.modal_box');

window.onload = function () {
  setTimeout(function () {
    popup_overlay.style.display = 'grid';
  }, 1000)
}
modal_box.addEventListener('click', function () {
  popup_overlay.style.display = 'none';
});

let close_btn = document.querySelector('.close_btn');

close_btn.addEventListener('click',function(){
  popup_overlay.style.display = 'none';
})
