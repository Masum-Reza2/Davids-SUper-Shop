let itemOneCardOne = document.getElementById('itemOneCardOne');

itemOneCardOne.addEventListener('click', (()=>{
    //task 01
    let itemName = itemOneCardOne.children[1].children[1].innerText;
    let selectedItemsParent = document.getElementById('selectedItemsParent');
    let li = document.createElement('li');
    li.innerText = itemName;
    li.classList = 'border text-sm';
    selectedItemsParent.appendChild(li);

    //task 02
    let itemPrice = itemOneCardOne.children[1].children[2].innerText.split(' ')[0];
    let itemPriceNumber = Number.parseFloat(itemPrice);
    console.log(itemPriceNumber)

    let totalPrice = document.getElementById('totalPrice');
    let totalPriceStr = totalPrice.innerText;
    let totalPriceNum = Number.parseFloat(totalPriceStr);
    console.log(totalPriceNum);

    let total = itemPriceNumber + totalPriceNum;
    totalPrice.innerText = total;

}))