var needContainer = document.getElementById("need-container");
var needList = document.getElementById("need-list");
let totalPrice = document.getElementById("total-price");
let sumTotal = 0;

needArray = [];

function addToNeed() {
  let needNameInput = document.getElementById("need-name-input").value;
  let needPriceInput = parseInt(
    document.getElementById("need-price-input").value
  );
  needArray.push({
    name: needNameInput,
    price: needPriceInput,
  });

  console.log("NYTT ARRAY:", needArray);
  listNeed();
}

function listNeed() {
  needList.innerHTML = "";
  for (let i = 0; i < needArray.length; i++) {
    if (needArray[i].price == 0) {
      alert("ERROR");
    } else if (needArray.price = NaN) {
      alert("ERROR");
    } else {
      needList.innerHTML += `<li>${needArray[i].name} - ${needArray[i].price}kr
    <button id="delete-btn" onclick="deleteNeed(${i})">-</button></li>`;
    }
  }
  summerizePrice();
}

function summerizePrice() {
  let sumTotal = 0;
  for (let i = 0; i < needArray.length; i++) {
    sumTotal += needArray[i].price;
    totalPrice.innerHTML = sumTotal + "kr" ;
  }
}

function deleteNeed(i) {
  var areYouSure = prompt("Are you sure? yes/no ");
  if (areYouSure == "yes") {
    needArray.splice(i, 1);
    listNeed();
  } else {
    console.log("nothing happens");
  }
}
