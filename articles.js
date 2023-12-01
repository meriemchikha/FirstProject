// fonction pour calculer le total de panier 

const calculateTotal = () => {
    let total = 0;
    const notificationQuantity = document.querySelector(".notification-quantity")
    const productItems = document.querySelectorAll(".product-in-cart");
    if (productItems > 0) notificationQuantity.style.display = "flex"
    productItems.forEach((item) => {

        const splitPrice = item.querySelector(".price").textContent.split("€")[0]
        const price = parseFloat(splitPrice);
        const quantity = parseInt(item.querySelector(".quantity").textContent);

        total += price * quantity;

    });

    return total.toFixed(2); // Pour arrondir à deux décimales
};

const products = [
    {
        id: 1,
        src: "images/Capture web_17-11-2023_10611_www.miel-lacourcelle.fr.jpeg",
        alt: "product 1",
        price: 6.5,
        description: "Miel de bourdaine Bio origine France",
        weight: 250

    },
    {
        id: 2,
        src: "images/Capture web_17-11-2023_11037_www.miel-lacourcelle.fr.jpeg",
        alt: "product 2",
        price: 14,
        description: "Miel d'acacia Bio origine France",
        weight: 500
    },
    {
        id: 3,
        src: "images/Capture web_17-11-2023_93212_www.miel-lacourcelle.fr.jpeg",
        alt: "product 3",
        price: 23.90,
        description: "Miel de montagne Bio origine France",
        weight: 1000
    },
    {
        id: 4,
        src: "images/Capture web_17-11-2023_103116_www.miel-lacourcelle.fr.jpeg",
        alt: "product 4",
        price: 7.90,
        description: "Miel de chataignier Bio origine France",
        weight: 250
    },
    {
        id: 5,
        src: "images/Capture web_19-11-2023_15376_www.miel-lacourcelle.fr.jpeg",
        alt: "product 5",
        price: 13.50,
        description: "Miel de chataignier Bio origine France",
        weight: 500
    },
    {
        id: 6,
        src: "images/Capture web_19-11-2023_15346_www.miel-lacourcelle.fr.jpeg",
        alt: "product 6",
        price: 8.50,
        description: "Miel de bruyère Bio origine France",
        weight: 250
    },
    {
        id: 7,
        src: "images/Capture web_19-11-2023_154024_www.miel-lacourcelle.fr.jpeg",
        alt: "product 7",
        price: 11.40,
        description: "Miel toutes fleurs Bio origine France",
        weight: 500
    },
    {
        id: 8,
        src: "images/Capture web_19-11-2023_154024_www.miel-lacourcelle.fr.jpeg",
        alt: "product 8",
        price: 6.50,
        description: "Miel de montagne Bio origine France",
        weight: 250
    },
    {
        id: 9,
        src: "images/Capture web_19-11-2023_154625_www.miel-lacourcelle.fr.jpeg",
        alt: "product 9",
        price: 22.95,
        description: "Miel d'acacia Bio origine France",
        weight: 1000
    },
    {
        id: 10,
        src: "images/Capture web_19-11-2023_154752_www.miel-lacourcelle.fr.jpeg",
        alt: "product 10",
        price: 18.27,
        description: "Miel toutes fleurs Bio origine France",
        weight: 500
    },
    {
        id: 11,
        src: "images/Capture web_19-11-2023_161038_www.miel-lacourcelle.fr.jpeg",
        alt: "product 11",
        price: 26.20,
        description: "Pack découverte - (4x250g)",
        weight: 1000
    },
    {
        id: 12,
        src: "images/Capture web_19-11-2023_15376_www.miel-lacourcelle.fr.jpeg",
        alt: "product 12",
        price: 13.50,
        description: "Miel de chataignier Bio origine France",
        weight: 500
    }
]
// cibler la balise parent des cards
const parentCard = document.querySelector(".product")

// fonction pour generer des cars
const creatCard = (src, description, alt, price, weight, id) => {
    // create card
    const divCard = document.createElement("div")
    divCard.classList.add("card")
    // create card-header
    const cardHeaderImg = document.createElement("div")
    cardHeaderImg.classList.add("card-header")
    const cardImg = document.createElement("img")
    cardImg.src = src
    cardImg.alt = alt
    cardHeaderImg.appendChild(cardImg)
    // create card-body
    const divBody = document.createElement("div")
    divBody.classList.add("card-body")

    // create div Body Description
    const divBodyDescription = document.createElement("p")
    divBodyDescription.textContent = `${description}`
    divBody.appendChild(divBodyDescription)
    // create div Body Description
    const divBodyPrice = document.createElement("span")
    divBodyPrice.classList.add("card-body-price")

    const divBodyWeight = document.createElement("span")
    divBodyWeight.classList.add("card-body-weight")

    const divPriceWeight = document.createElement("div")
    divPriceWeight.classList.add("card-body-price-weight")
    divBodyPrice.textContent = `${price} €`
    divBodyWeight.textContent = `Pot de ${weight}g`
    divPriceWeight.appendChild(divBodyWeight)
    divPriceWeight.appendChild(divBodyPrice)
    divBody.appendChild(divPriceWeight)

    // create card-footer
    const divCardFooter = document.createElement("div")
    divCardFooter.classList.add("card-footer")

    const cardFooter = document.createElement("button")
    cardFooter.classList.add("add")
    cardFooter.id = `cart-item-${id}`
    cardFooter.setAttribute("data-description", description);
    cardFooter.setAttribute("data-price", price);
    cardFooter.setAttribute("data-img", src);

    cardFooter.textContent = "Ajouter au panier"
    divCardFooter.appendChild(cardFooter)
    divCard.appendChild(cardHeaderImg)
    divCard.appendChild(divBody)
    divCard.appendChild(divCardFooter)
    parentCard.appendChild(divCard)
}


// parcourir l'array products
products.map(({ src, description, alt, price, weight, id }) => {
    creatCard(src, description, alt, price, weight, id)
})


const btns = document.querySelectorAll(".add");
const ul = document.querySelector("#products-list");
const cart = document.querySelector("#panier");
const EmptyCart = document.createElement("p")
EmptyCart.textContent = "Votre panier est vide !"
EmptyCart.classList.add("empty-cart")
cart.appendChild(EmptyCart)
const displayTotalAndBtn = () => {
    const totalPrice = document.createElement("span")
    totalPrice.textContent = `Total : 0 €`
    totalPrice.classList.add("total-price")
    cart.appendChild(totalPrice)
    const btnCart = document.createElement("button")
    btnCart.type = "button"
    btnCart.textContent = "Passer votre commande"
    btnCart.classList.add("btn-cart")
    cart.appendChild(btnCart)
    const getBtn = document.querySelector(".empty-cart")
    getBtn.style.display = "none"

}


const createCartItem = (id, description, price, src) => {
    // créer les elements du panier
    const li = document.createElement("li");
    li.classList.add("product-in-cart");
    li.id = `cart-item-${id}`;
    const div = document.createElement("div")
    div.classList.add("container-img")
    const img = document.createElement("img");
    img.src = src;
    div.appendChild(img)
    const p = document.createElement("p");
    p.textContent = description;

    const spanPrice = document.createElement("span");
    spanPrice.textContent = `${price} €`;
    spanPrice.classList.add("price")
    const spanQuantity = document.createElement("span");
    spanQuantity.textContent = 1;
    spanQuantity.classList.add("quantity");

    li.appendChild(div);
    li.appendChild(p);
    li.appendChild(spanPrice);
    li.appendChild(spanQuantity);

    ul.appendChild(li);


    const notificationQuantity = document.querySelector(".notification-quantity")
    const productItems = document.querySelectorAll(".product-in-cart");
    if (productItems.length > 0) {
        const totalPrice = document.querySelector(".total-price")
        if (!totalPrice) {
            displayTotalAndBtn()
        }
        notificationQuantity.style.display = "flex"
        notificationQuantity.textContent = productItems.length
    }
    // mettre à jour le total panier
    const totalPriceItem = document.querySelector(".total-price");
    totalPriceItem.textContent = `Total : ${calculateTotal()} €`;
};

const animateShowToast = () => {
    const showtoast = document.querySelector("#show-toast")
    showtoast.classList.add("show")
    setTimeout(() => showtoast.classList.remove("show"), 3000)

}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // on recuper l'id du bout clické
        // plus les informations de produit
        const itemId = e.target.id;
        const itemDescription = e.target.getAttribute("data-description");
        const itemPrice = e.target.getAttribute("data-price");
        const itemImg = e.target.getAttribute("data-img");
        // on cible l'element 
        const existingCartItem = document.querySelector(`#cart-item-${itemId}`);

        if (existingCartItem) {
            let itemTextContent = parseInt(existingCartItem.querySelector(".quantity").textContent);
            itemTextContent++;
            existingCartItem.querySelector(".quantity").textContent = itemTextContent;
        } else {
            createCartItem(itemId, itemDescription, itemPrice, itemImg);
            animateShowToast()

        }
        // mettre à jour le total panier
        const totalPriceItem = document.querySelector(".total-price");
        totalPriceItem.textContent = `Total : ${calculateTotal()} €`;
    });
});




