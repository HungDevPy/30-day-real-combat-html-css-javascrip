const getclick = document.querySelectorAll(".image img");
const getRight = document.querySelector(".right");
const getLeft = document.querySelector(".left");
const getClose = document.querySelector(".close");
const galleryImg = document.querySelector(".gallery__inner img");
const galleries = document.querySelector(".gallery");

let currentIndex = 0;

function show(params) {
  galleryImg.src = getclick[currentIndex].src;
    galleries.classList.add("show");
    if (currentIndex === 0) {
      getLeft.style.display = "none";
    } else {
      getLeft.style.display = "block";
    }
    if (currentIndex === getclick.length -1) {
      getRight.style.display = "none";
    } else {
      getRight.style.display = "block";
    }
}
getclick.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    show()
  });
});
getClose.addEventListener("click",()=>{
  galleries.classList.remove('show')
})
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) galleries.classList.remove("show");
})
getLeft.addEventListener("click",()=>{
  if(currentIndex >0){
    currentIndex--
    show()
  }
})
getRight.addEventListener("click",()=>{
  if(currentIndex > 0){
    currentIndex++
    show()
  }
})
