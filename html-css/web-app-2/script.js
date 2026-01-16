const products = [
  {
    name: "Product 1",
    desc: "This is a sample description",
    price: 45,
    imgUrl: "https://images.pexels.com/photos/20406203/pexels-photo-20406203.jpeg",
  },
  {
    name: "Product 2",
    desc: "This is a sample description",
    price: 50,
    imgUrl: "https://images.pexels.com/photos/29319422/pexels-photo-29319422.jpeg",
  },
];

function showProducts() {
  let str = `<div class="row">`;
  products.map(e=>{
    str = str + `
    <div class="box">
    <img src=${e.imgUrl} height=100 width=200/>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <h5>${e.price}</h5>
    <p><button>Add to cart</button></p>
    </div>
      `
  })
  str = str + `</div>`;
  root.innerHTML = str;
}