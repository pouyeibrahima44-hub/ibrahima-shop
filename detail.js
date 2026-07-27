const images = document.querySelectorAll("img");

images.forEach(function(image) {

    image.addEventListener("click", function() {
        const nomProduit = this.nextElementSibling.textContent;

        const prixProduit = this.nextElementSibling.nextElementSibling.textContent;

        const imageProduit = this.src;

        // Enregistrer les informations du produit
        localStorage.setItem("produit_nom", nomProduit);
        localStorage.setItem("produit_prix", prixProduit);
        localStorage.setItem("imageProduit", imageProduit);
        window.location.href = "Detail.html";

    });

});
const nomProduit = localStorage.getItem("produit_nom");
const prixProduit = localStorage.getItem("produit_prix");
const imageProduit = localStorage.getItem("imageProduit");
if (document.getElementById("nomProduit")) {
    document.getElementById("nomProduit").textContent = nomProduit;
}
if (document.getElementById("prixProduit")) {
    document.getElementById("prixProduit").textContent = prixProduit;
}
if (document.getElementById("imageProduit")) {
    document.getElementById("imageProduit").src = imageProduit;
}

const boutonAcheter = document.getElementById("acheter");

if (boutonAcheter) {

    boutonAcheter.addEventListener("click", function() {

        
        const taille = document.getElementById("taille").value;

    
        const quantite = document.getElementById("quantite").value;
        if (taille === "") {

            alert("Veuillez choisir une taille.");

            return;
        }
        localStorage.setItem("produit_taille", taille);
        localStorage.setItem("quantiteProduit", quantite);
        window.location.href = "Paiement.html";

    });

}