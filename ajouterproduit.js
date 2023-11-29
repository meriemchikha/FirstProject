      // Fonction pour ajouter un produit au panier
      function ajouterAuPanier(nomProduit, prixProduit) {
        const listePanier = document.getElementById('listePanier');
        const totalPanier = document.getElementById('totalPanier');

        // Créer un nouvel élément de liste pour le produit
        const nouvelElement = document.createElement('li');
        nouvelElement.textContent = `${nomProduit} - ${prixProduit} €`;
        listePanier.appendChild(nouvelElement);

        // Mettre à jour le total du panier
        const totalActuel = parseFloat(totalPanier.textContent);
        totalPanier.textContent = (totalActuel + prixProduit).toFixed(2) + ' €';
    }










 