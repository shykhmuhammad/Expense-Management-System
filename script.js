var getItem = document.getElementById('item');
var getprice = document.getElementById("price");
var getlist = document.getElementById('li');
var getTotal = document.getElementById('total');
var total = 0;

function addItem() {
    let price = parseFloat(getprice.value);
    
    // Fix: Correct condition logic (should be !getItem.value)
    if (!getItem.value || isNaN(price)) {
        alert("Please enter valid item and price.");
        return;
    }

    total += price;
    updateTotal();

    let li = document.createElement('li');
    li.innerHTML +=
        `${getItem.value} - <span class='price'>${price.toFixed(2)}</span>
        <button onclick='del(this)'>Delete</button> 
        <button onclick='editItem(this)'>Edit</button>
        `;
    getlist.appendChild(li);
    getItem.value = '';
    getprice.value = '';
}

function clr(){
    getlist.innerHTML = ''
}

function del(button) {
    let btn = button.closest('li'); // Fix: li undefined before
    let span = btn.querySelector('.price');
    let price = parseFloat(span.textContent);

    total -= price;
    updateTotal();
    btn.remove(); // Fix: should be btn.remove(), not li.remove()
}

function editItem(button) {
    let btn = button.closest('li'); // Fix: typo .closet -> .closest
    let itemText = btn.childNodes[0].textContent.split('=')[0];
    let price = btn.querySelector('.price');
    let oldPrice = parseFloat(price.textContent);

    let newItem = prompt('Enter a new Item', itemText);
    let newPrice = prompt('Enter a price', oldPrice);

    if (newItem && !isNaN(newPrice)) {
        btn.childNodes[0].textContent = newItem;
        price.textContent = parseFloat(newPrice).toFixed(2);
        total = total - oldPrice + parseFloat(newPrice);
        updateTotal();
    }
}

function updateTotal() {
    getTotal.textContent = 'Total' + ' ' + total.toFixed(2);
}







// function addItem(){
//     if(getItem.value === ''|| isNaN(getprice.value)){
//         alert('Enter put items and price')
//    }else {

    
//         getlist.innerHTML += `<li>${getItem.value} ${getprice.value} <button onclick='this.parentNode.remove()'>Delete</button> <button onclick='editItem(this)'>Edit</button> </li>`
//         getTotal.innerHTML += total+getprice.value 
//         getItem.value = ''
//         getprice.value = ''

// }}
// function clr(){
//     getlist.innerHTML = ''
// }
// function editItem(e){
//     var getValue = prompt('Enter a Edit item',e.parentNode.firstChild.textContent)
//     e.parentNode.firstChild.textContent = getValue
// }



