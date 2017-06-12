function setPrice(parent, value) {
    element = document.querySelector("#" + parent + " .enemybox .pricetag");
    element.innerHTML = value;
};

function setQuantity(parent, value) {
    element = document.querySelector("#" + parent + " .enemybox .quantity");
    element.innerHTML = value;
};

function setTotal(parent, value) {
    element = document.querySelector("#" + parent + " .enemybox .total");
    element.innerHTML = value;
};

function setPQT(parent, price, quantity, total) {
    setPrice(parent, price);
    setQuantity(parent, quantity);
    setTotal(parent, total);
};

function generate() {
    var goombaStats = [price[0], quantity[0], (price[0] * quantity[0])];
    var bombombStats = [price[1], quantity[1], (price[1] * quantity[1])];
    var cheepcheepStats = [price[2], quantity[2], (price[2] * quantity[2])];
    setPQT("goombas", goombaStats[0], goombaStats[1], goombaStats[2]);
    setPQT("bombombs", bombombStats[0], bombombStats[1], bombombStats[2]);
    setPQT("cheepcheeps", cheepcheepStats[0], cheepcheepStats[1], cheepcheepStats[2]);
    setGrandTotal(goombaStats[2] + bombombStats[2] + cheepcheepStats[2]);

};

function decrease(index) {
    console.log("Decrease: "+index);
    quantity[index] = Math.max(quantity[index] - 1, 0);
    generate();
};

function increase(index) {
    console.log("Increase: "+index);
    quantity[index] = quantity[index] + 1;
    generate();
};

function setupButtonSet(parent, index) {
    document.querySelector("#"+parent+" .enemybox .increase").addEventListener("click", function(){increase(index)});
    document.querySelector("#"+parent+" .enemybox .decrease").addEventListener("click", function(){decrease(index)});
};
function setGrandTotal(value) {
    document.querySelector("#grandtotal").innerHTML = value;
}
function setupButtons() {
    setupButtonSet("goombas", 0);
    setupButtonSet("bombombs", 1);
    setupButtonSet("cheepcheeps", 2);
};
// End of Functions
var price = [5, 7, 11];
var quantity = [12, 8, 5];
generate();
setupButtons();
