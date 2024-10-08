const redColor = document.querySelector(".red");
const grayColor = document.getElementById("gray");
const itemTag = document.getElementsByTagName("h3")[0];
const blackColor = document.getElementById("black");
const cartBtn = document.getElementById("button");
const imageCard = document.querySelector("img");
const feedbackBtn = document.querySelector(".feedback");
console.log(grayColor, itemTag, redColor, blackColor, imageCard);

redColor.addEventListener("click", function () {
  cartBtn.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.src =
    "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg";
});

blackColor.addEventListener("click", function () {
  cartBtn.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  itemTag.style.color = "white";
  imageCard.src =
    "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg;";
});
grayColor.addEventListener("click", function () {
  cartBtn.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.src = "./image/img.png";
});