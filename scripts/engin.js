//function innerText to number getter
let innerTextToNum = (id) => {
    let idName = document.getElementById(id);
    let text = idName.innerText;
    let num = Number.parseFloat(text);
    return num;
}


//errorHandler 
let errorHandler = () => {
    let errorMessage = document.getElementById('errorMessag');
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 2500);
}


// reUseable function onclick for my each cards
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
    let grandTotal = document.getElementById('grandTotal');

    let total = itemPriceNumber + totalPriceNum;
    totalPrice.innerText = total.toFixed(2);
    grandTotal.innerText = total.toFixed(2);

    //task 03 button opt
    let btnApply = document.getElementById('btnApply');
    let discountAmount = document.getElementById('discountAmount');
    let couponText = document.getElementById('couponText');

    if (total > 200) {
        btnApply.classList.remove('btn-disabled');
        btnApply.addEventListener('click', (() => {
            if (couponText.value === 'SELL200') {
                let priceDisc = (total / 100) * 20;
                discountAmount.innerText = priceDisc.toFixed(2);

                let grandTotalPrice = total - priceDisc
                grandTotal.innerText = grandTotalPrice.toFixed(2);
            }
            else {
                errorHandler()
            }
        }))
    }

}


// Modal button Go home operation
document.getElementById('modalGoHome').addEventListener('click', (() => {
    window.location.href = 'index.html'
}))


// function for purchasebtnAnable
let selectedItemsParent = document.getElementById('selectedItemsParent');
let purchaseAnable = () => {
    if (selectedItemsParent.childElementCount > 0) {
        let btnPurchase = document.getElementById('btnPurchase');
        btnPurchase.classList.remove('btn-disabled');
    }
}