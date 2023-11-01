const closeBtn = document.getElementById("close-btn");
const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
  navigation.style.display = "flex";
})

closeBtn.addEventListener("click", () => {
  navigation.style.display = "none";
})
