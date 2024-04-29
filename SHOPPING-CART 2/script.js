let minusButtons = document.querySelectorAll(".minus-button");
let plusButtons = document.querySelectorAll(".plus-button");
let inputQuantities = document.querySelectorAll(".input-quantity");
let itemDisplay = document.querySelector(".item-display");

function updateItemDisplay() {
  let itemCount = 0;
  inputQuantities.forEach((inputQuantity) => {
    itemCount += parseInt(inputQuantity.value);
  });
  itemDisplay.textContent = "Items: " + itemCount;
}

minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let inputQuantity = button.parentElement.querySelector(".input-quantity");
    let currentValue = parseInt(inputQuantity.value);
    if (currentValue > 0) {
      inputQuantity.value = currentValue - 1;
    }
    updateTotalCost(button);
    updateItemDisplay();
  });
});

plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let inputQuantity = button.parentElement.querySelector(".input-quantity");
    let currentValue = parseInt(inputQuantity.value);
    let maxValue = parseInt(inputQuantity.getAttribute("max"));
    if (currentValue < maxValue) {
      inputQuantity.value = currentValue + 1;
    }
    updateTotalCost(button);
    updateItemDisplay();
  });
});

function updateTotalCost(button) {
  let itemCost = parseFloat(
    button.parentElement.parentElement.querySelector("[data-price]").dataset.price
  );
  let quantity = parseFloat(
    button.parentElement.querySelector(".input-quantity").value
  );
  let totalCost = itemCost * quantity;
  button.parentElement.nextElementSibling.querySelector(".input-cost").textContent = "R" + totalCost.toFixed(2);
}

const deleteBtns = document.querySelectorAll(".delete-button");
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    item.remove();
    updateItemDisplay();
  });
});

updateItemDisplay();


let cart = [];
function addtocart(i) {
  cart.push({...categories[a]});
}
