// on va cibler la balise article
const btns = document.querySelectorAll(".add")
const ul = document.querySelector("#products-list")
const productsInCart = document.querySelectorAll(".product-in-cart")
console.log(productsInCart)
// parcourir les btns pour ajout un ecouteur sur 
// chaque btn
btns.forEach((btn, i)=> {

btn.addEventListener("click", (e) => {
const quantityProductsInCart = document.querySelectorAll(".product-in-cart")
quantityProductsInCart.forEach((item)=> {
    
    if (quantityProductsInCart.length > 0 && item.id === e.target.id ){
        console.log(item.textContent)
        let itemTextcontent = parseInt(item.textContent)
        itemTextcontent++
        item.textContent = itemTextcontent
       
    }
     
})

const li = document.createElement("li")
li.classList.add("product-in-cart")
const img = document.createElement("img")
img.src="images/Capture web_19-11-2023_154752_www.miel-lacourcelle.fr.jpeg"
const p = document.createElement("p")
p.textContent ="je suis un produit"
const spanPrice =  document.createElement("span")
spanPrice.textContent="15"
const spanQuantity =  document.createElement("span")
spanQuantity.textContent = 1
spanQuantity.id = id =`img-${i}`
spanQuantity.classList.add("product-in-cart")
li.appendChild(img)
li.appendChild(p)
li.appendChild(spanPrice)
li.appendChild(spanQuantity)
ul.appendChild(li)


})
})