const wrapper = document.querySelector(".carousel-inner");
const menuItems = document.querySelectorAll(".nav-link");

const products = [
  {
    id: 1,
    title: "Heels",
    price: 4500,
    colors: [
      {
        code: "silver",
        img: "./images/heels1",
      },
      {
        code: "black",
        img: "./images/heels2",
      },
    ],
  },
  {
    id: 2,
    title: "sneakers",
    price: 4000,
    colors: [
      {
        code: "gray",
        img: "./images/smeaker3.jpg",
      },
      {
        code: "white",
        img: "./images/sneaker1",
      },
    ],
  },
  {
    id: 3,
    title: "Sandals",
    price: 3500,
    colors: [
      {
        code: "golden",
        img: "./images/fancy1.jpg",
      },
      {
        code: "silver",
        img: "./images/fancy1.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Effortless Elegance",
    price: 3000,
    colors: [
      {
        code: "black",
        img: "./images/flat2.jpg",
      },
      {
        code: "red",
        img: "./images/flat3.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Classic Canvas",
    price: 3000,
    colors: [
      {
        code: "light blue",
        img: "./images/canvas2.jpg",
      },
      {
        code: "black",
        img: "./images/canvas1.jpg",
      },
      {
        code: "aqua",
        img: "./images/canvas3.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Runners",
    price: 5000,
    colors: [
      {
        code: "orange",
        img: "./images/runners1-new-balance.jpg",
      },
      {
        code: "gray",
        img: "./images/runners2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of current Product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs. " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});