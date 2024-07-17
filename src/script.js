window.addEventListener('load', function () {
    loadItemsFromStorage();
});

function addItem(event) {
    if (event.key === "Enter" || event.type === "click") {
        var inputField = document.getElementById("itemInput");
        var itemText = inputField.value.trim();

        if (itemText !== "") {
            if (!isItemDuplicate(itemText)) {
                var newItem = document.createElement("li");
                newItem.textContent = itemText;

                var itemList = document.getElementById("itemList");
                itemList.appendChild(newItem);

                saveItemToStorage(itemText);

                inputField.value = "";
            } else {
                alert("Dieses Element ist bereits in der Liste vorhanden!");
            }
        }
    }
}

function saveItemToStorage(item) {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
}

function loadItemsFromStorage() {
    var items = JSON.parse(localStorage.getItem("items")) || [];

    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    items.forEach(function (itemText) {
        var newItem = document.createElement("li");
        newItem.textContent = itemText;
        itemList.appendChild(newItem);
    });
}

function isItemDuplicate(item) {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    return items.includes(item);
}

document.getElementById("itemInput").addEventListener("keydown", addItem);

document.querySelector("button").addEventListener("click", addItem);
