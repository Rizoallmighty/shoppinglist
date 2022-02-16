var storageContainer = document.getElementById("storage-container");
var storageList = document.getElementById("storage-list");

storageArray = [];

function addToStorage() {
  let storageNameInput = document.getElementById("storage-name-input").value;
  storageArray.push({
    name: storageNameInput,
  });

  console.log("NYTT ARRAY:", storageArray);
  listStorage();
}

function listStorage() {
  storageList.innerHTML = "";
  for (let i = 0; i < storageArray.length; i++) {
    storageList.innerHTML += `<li>${storageArray[i].name}
    <button id="delete-btn" onclick="deleteStorage(${i})">-</button></li>`;
  }
}

function deleteStorage(i) {
  var areYouSure = prompt("Are you sure? yes/no ");
  if (areYouSure == "yes") {
    storageArray.splice(i, 1);
    listStorage();
  } else {
    console.log("nothing happens");
  }
}
