let readMore = document.querySelector(".read-more");
let brandsList = document.querySelector(".brands__list")

readMore.addEventListener("click", function(){
  showMore()
})
function showMore(){
 if(readMore.textContent === "Показать все") {
  brandsList.style.height = `${brandsList.scrollHeight}px`;
  readMore.textContent = "Скрыть"
}
 else {
 readMore.textContent = "Показать все"
 brandsList.style.height = 160 + "px";
 }
}
