const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
let readMore = document.querySelector(".read-more");
let brandsMain = document.querySelector(".brands__swiper-wrapper");

readMore.addEventListener("click", function(){
  showMore()
});

function showMore(){
 if(readMore.textContent === "Показать все") {
  brandsMain.style.height = `${brandsMain.scrollHeight}px`;
  readMore.textContent = "Скрыть";
  readMore.classList.toggle('read-more--arrow-up');
}
 else {
 readMore.textContent = "Показать все"
 brandsMain.style.height = 160 + "px";
 readMore.classList.toggle('read-more--arrow-up');
 }
}


