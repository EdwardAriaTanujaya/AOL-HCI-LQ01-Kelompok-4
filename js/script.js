const detail_order = document.getElementById("detail-order");

detail_order.addEventListener("click", function(event) {
    event.preventDefault();

    const popupOrder = document.getElementById("popup-succeed");
    popupOrder.style.display = "flex";
});

const closePopup = document.getElementById("close-succeed");
closePopup.addEventListener("click", function() {
    const popupOrder = document.getElementById("popup-succeed");
    popupOrder.style.display = "none";
});

const popupOrder = document.getElementById("popup-succeed");
popupOrder.addEventListener("click", function(event) {
    if (event.target === popupOrder) {
        popupOrder.style.display = "none";
    }
});

const detail_payment = document.getElementById("detail-payment");
detail_payment.addEventListener("click", function(event) {
    event.preventDefault();

    const popupPayment = document.getElementById("popup-pending");
    popupPayment.style.display = "flex";
}); 

const closePopupPayment = document.getElementById("close-pending");
closePopupPayment.addEventListener("click", function() {
    const popupPayment = document.getElementById("popup-pending");
    popupPayment.style.display = "none";
});
const popupPayment = document.getElementById("popup-pending");
popupPayment.addEventListener("click", function(event) {
    if (event.target === popupPayment) {
        popupPayment.style.display = "none";
    }
});

const copy_btn = document.getElementById("copy-btn");
copy_btn.addEventListener("click", function() {
    const copyText = document.getElementById("copy-text");
    navigator.clipboard.writeText(copyText.textContent)
        .then(() => {
            alert("Copied to clipboard: " + copyText.textContent);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
});