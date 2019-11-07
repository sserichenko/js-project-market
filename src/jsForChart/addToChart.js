let chart = [];
if (localStorage.getItem("good") !== null) {
  chart = JSON.parse(localStorage.getItem("good"));
}

console.log("chart :", chart);
export default function(e, picArr) {
  // console.log('picArr :', picArr);

  if (e.target.nodeName === "BUTTON") {
    const el = picArr.find(el => el.id === e.target.dataset.id);

    if (chart.includes(el)) {
      return;
    } else {
      chart.push(el);
      // console.log('chart', chart);
      localStorage.setItem("good", JSON.stringify(chart));
    }
  }
}

const cartRef = document.querySelector(".modal-cart");
const buttonCart = document.querySelector(".button-cart");
const modalCartClose = document.querySelector(".modal-cart__close");

buttonCart.addEventListener("click", () => {
  cartRef.classList.add("show");
});
modalCartClose.addEventListener("click", () => {
  cartRef.classList.remove("show");
});

// if(chart.length > 0) {
//   const markup = chart.reduce((acc, el) =>{
//     return `<li class="cart-item">
//     <div class="modal-item">
//     <img class="cart-list__img" src="${el.image}">
//     <span class="cart-list__name">${el.name}</span>
//     <span class="cart-list__price">$${el.price}</span>
//     </div>
//     </li>`
//   }, '');

//   cartRef.querySelector('.cart-list').innerHTML = markup;
// }
//=================================


const cartUl = document.querySelector('.cart-list');
if (chart.length > 0) {
 const renderingGallery = (goodsArr) =>{
    const frag = document.createDocumentFragment();
    chart.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.insertAdjacentHTML('beforeend', `
        <div class="modal-item">
            <img class="cart-list__img" src="${el.image}">
             <span class="cart-list__name">${el.name}</span>
             <span class="cart-list__price">$${el.price}</span>
             </div>
        `);
        frag.appendChild(li);
      });
      cartUl.appendChild(frag);
  }
 renderingGallery(chart);
};

