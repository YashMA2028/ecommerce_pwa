$(document).ready(function () {
    $(".add-to-cart").click(function () {
        $("#cart-items").append("<li>Smartphone - $699</li>").listview("refresh");
        alert("Item added to cart!");
    });
});