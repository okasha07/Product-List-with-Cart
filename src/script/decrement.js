import { addProductToOrders } from "./addProductToOrders.js";
import { addToCartBtn } from "../components/product.js";

export function decrement(product) {
  // Change To Counter Btn
  let addBtn = product.querySelector(".product-btn.add");
  if (addBtn) addBtn.outerHTML = counterBtn();

  // Declare Counter Btn
  let btn = product.querySelector(".product-btn.counter");

  let amount = btn.querySelector(".product-amount");

  let productImg = product.querySelector(".product-img");

  let productName = product.querySelector(".product-name").textContent;
  let productAmount = Number(amount.textContent);
  let productPrice = Number(
    product.querySelector(".product-price").textContent.match(/\d+(\.\d+)?/g)
  );
  let productTotal = productAmount * productPrice;
  let productId = product.dataset.id;

  if (amount.textContent >= 1) {
    --amount.textContent;
    --productAmount;

    addProductToOrders(
      productName,
      productAmount,
      productPrice,
      productTotal,
      productImg.srcset,
      productId
    );
  }
  if (amount.innerHTML < 1) {
    btn.outerHTML = addToCartBtn();
    productImg.classList.remove("active");
  }
}
