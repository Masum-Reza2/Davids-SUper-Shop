//function innerText to number getter
let innerTextToNum = (id) => {
    let idName = document.getElementById(id);
    let text = idName.innerText;
    let num = Number.parseFloat(text);
    return num;
}

// button operations
let btnApply = document.getElementById('btnApply');
btnApply.disabled = true;

// reUseable function onclick 
let myUniversalFunc = (id) => {
    let idName = document.getElementById(id);

    //task 01
    let itemName = idName.children[1].children[1].innerText;
    let selectedItemsParent = document.getElementById('selectedItemsParent');
    let li = document.createElement('li');
    li.innerText = itemName;
    li.classList = 'border text-sm';
    selectedItemsParent.appendChild(li);

    //task 02
    let itemPrice = idName.children[1].children[2].innerText.split(' ')[0];
    let itemPriceNumber = Number.parseFloat(itemPrice);

    let totalPrice = document.getElementById('totalPrice');
    //here i called my build function
    let totalPriceNum = innerTextToNum('totalPrice');

    let total = itemPriceNumber + totalPriceNum;
    totalPrice.innerText = total.toFixed(2);

}