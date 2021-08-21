// update  memory cost
const memoryCost = document.getElementById("memory-cost");
function updateMemoryCost(ram) {
  if (ram == "16gb") {
    memoryCost.innerText = "180";
  } else {
    memoryCost.innerText = "0";
  }
  // update totals
  updateTotal();
  updateGrandTotal();
}

// update storage cost
const storageCost = document.getElementById("storage-cost");
function updateStorageCost(disk) {
  if (disk == "512GB") {
    storageCost.innerText = "100";
  } else if (disk == "1TBGB") {
    storageCost.innerText = "180";
  } else {
    storageCost.innerText = "0";
  }
  // update totals
  updateTotal();
  updateGrandTotal();
}

// update delivery charge
const deliveryCost = document.getElementById("delivery-cost");
function updateDeliveryCharge(date) {
  if (date == "Aug21") {
    deliveryCost.innerText = "20";
  } else {
    deliveryCost.innerText = "0";
  }
  // update totals
  updateTotal();
  updateGrandTotal();
}

// update total price
const totalPrice = document.getElementById("total-price");
function updateTotal() {
  const bestPrice = document.getElementById("raw-price");
  totalPrice.innerText =
    parseFloat(bestPrice.innerText) +
    parseFloat(memoryCost.innerText) +
    parseFloat(storageCost.innerText) +
    parseFloat(deliveryCost.innerText);
}

// update grand total
const grandTotal = document.getElementById("grand-total");
const inputCode = document.getElementById("code-input");
function updateGrandTotal() {
  grandTotal.innerText = totalPrice.innerText;
  inputCode.value = "";
}
// get discount on total price with promo code
function getDiscount() {
  const promoCode = "stevekaku";
  if (inputCode.value != promoCode) {
    grandTotal.innerText = totalPrice.innerText;
    inputCode.value = "";
    window.alert("wrong promo code");
  } else if (inputCode.value == promoCode) {
    const discountAmount = parseFloat(totalPrice.innerText) / 5;
    console.log(discountAmount);
    const newTotal = parseFloat(totalPrice.innerText) - discountAmount;
    console.log(newTotal);
    grandTotal.innerText = newTotal;
    inputCode.value = "";
  }
}
