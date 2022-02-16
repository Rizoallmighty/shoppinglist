var tempContainer = document.getElementById("temp-container");
var tempList = document.getElementById("temp-list");

tempArray = [];

function addToTemp() {
  let tempNameInput = document.getElementById("temp-name-input").value;
  tempArray.push({
    name: tempNameInput,
  });

  console.log("NYTT ARRAY:", tempArray);
  listTemp();
}

function listTemp() {
  tempList.innerHTML = "";
  for (let i = 0; i < tempArray.length; i++) {
    tempList.innerHTML += `<li>${tempArray[i].name}
    <button id="delete-btn" onclick="deleteTemp(${i})">-</button></li>`;
  }
}

function deleteTemp(i) {
  var areYouSure = prompt("Are you sure? yes/no ");
  if (areYouSure == "yes") {
    tempArray.splice(i, 1);
    listTemp();
  } else {
    console.log("nothing happens");
  }
}
