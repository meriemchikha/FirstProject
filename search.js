const searchInput = document.querySelector('#search');
const productList = document.querySelectorAll('.product');  

searchInput.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase().trim();

    // Filtrer les produits  
    productList.forEach((product) => {
        const productName = product.textContent.toLowerCase();
        if (productName.includes(search)) {
            product.style.display = 'block'; 
            // Afficher le produit
            console.log(product)
        } else {
            product.style.display = 'none'; 
            // Masquer le produit
            const p = document.createElement("p")
            p.textContent ="Produit n'existe pas !!"
           
            console.log(p);
        }
    });
});