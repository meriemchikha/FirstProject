// const products = [
//     { name: "Acacia", weight: 500 , weight: 1000},
//     { name: "Chataignier", weight: 250 ,weight: 500 },
//     { name: "Bourdainer", weight: 500, weight: 250 },
//     { name: "Montagne", weight: 250, weight: 1000 },
//     { name: "Bruyère", weight: 250 },
//     { name: "Toutes fleurs", weight: 500, weight: 1000 },
// ];

// document.getElementById("productFilterForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const filterByName = document.getElementById("filterByName").checked;
//     const filterByWeight = document.getElementById("filterByWeight").checked;

//     const filteredProducts = products.filter(product => {
//         if (filterByName = "Acacia" && filterByWeight > 400) {
//             // Filtrer par nom et poids
//             // Remplacez les conditions ci-dessous par vos critères spécifiques
//             return product.name.includes("Acacia") && product.weight > 400 ;
//         } else if (filterByName) {
//             // Filtrer par nom uniquement
//             return product.name.includes("Acacia");
//         } else if (filterByWeight) {
//             // Filtrer par poids uniquement
//             return product.weight > 400;
//         }
//     });

//     // Affichez les produits filtrés dans la liste
//     const productList = document.getElementById("productList");
//     productList.innerHTML = filteredProducts.map(product => `<p>${product.name} (${product.weight} g)</p>`).join("");
// });