// script.js

document.addEventListener("DOMContentLoaded", function() {
    const orderBtn = document.getElementById("order-btn");
    const checkboxes = document.getElementsByClassName("menu-checkbox");
  
    orderBtn.addEventListener("click", function() {
      const selectedItems = [];
  
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          const item = checkboxes[i].parentNode;
          const itemName = item.querySelector("span").innerText;
          const itemPrice = item.querySelector(".price").innerText;
          selectedItems.push(itemName + " - " + itemPrice);
        }
      }
  
      if (selectedItems.length > 0) {
        const orderSummary = selectedItems.join("\n");
        alert("Your order:\n" + orderSummary);
      } else {
        alert("Please select items to place an order.");
      }
    });
  });
  