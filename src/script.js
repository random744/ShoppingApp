function addItem() {
    var inputField = document.getElementById("itemInput");
    var itemText = inputField.value.trim();
    if (itemText !== "") {

        var newItem = document.createElement("li");
        newItem.textContent = itemText;

        var itemList = document.getElementById("itemList");
        itemList.appendChild(newItem);

        inputField.value = "";
    }
}