// Show cart
const btnShowCart = document.querySelector("#show-cart")

btnShowCart.addEventListener("click", () => {

    if (cart.style.transform === "translateY(-500%)") {
        cart.style.transform = "translateY(0%)"
    } else {
        cart.style.transform = "translateY(-500%)"
    }

})


document.body.querySelector("main").addEventListener("click", () => {
    cart.style.transform = "translateY(-500%)"
})