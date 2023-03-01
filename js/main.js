let hiddees = document.querySelector(".Discount");

function hideen() {
  hiddees.style.display = "none";
}

var typeing = new Typed(".MYspan", {
  strings: ["MAN", "WOMEN", "KIDS", "SPORTS", "ZARA"],
  loop: true,
  typeSpeed: 110,
  backSpeed: 100,
});

let login = document.querySelector(".login");
let x = document.querySelector(".xnot");
let over = document.querySelector(".overVloue");
let lsn = document.getElementById("log");

const on = () => {
  over.classList.remove("hidden");
  login.classList.remove("hidden");
};

const off = () => {
  over.classList.add("hidden");
  login.classList.add("hidden");
};

lsn.addEventListener("click", on);
x.addEventListener("click", off);
over.addEventListener("click", off);

let Btn = document.getElementById("sginBtn");
let sig = document.querySelector(".sign");
let s = document.querySelector(".xnot2");

const openSign = () => {
  sig.classList.remove("hidden");
  over.classList.remove("hidden");
};

const closeSign = () => {
  sig.classList.add("hidden");
  over.classList.add("hidden");
};

Btn.addEventListener("click", openSign);
s.addEventListener("click", closeSign);
over.addEventListener("click", closeSign);

let get = document.getElementById("allprodaect");

fetch("https://fakestoreapi.com/products")
  .then((r) => r.json())
  .then((pro) => {
    pro.forEach((ele) => {
      get.innerHTML += `
      <div class="prdect">
      <img src=${ele.image} alt="">
      <h4>${ele.title.substring(0, 15)}</h4>
      <p>${ele.description.substring(0, 20)} .... Read </p>
      <button>PRICE : ${
        ele.price
      }$ <i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    `;
    });
  });

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 600
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
