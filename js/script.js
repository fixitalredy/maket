let readMore = document.querySelector(".read-more");
let brandsList = document.querySelector(".brands__list")
readMore.addEventListener('click',function(){
brandsList.style.height = `${brandsList.scrollHeight}px`;
})
 
