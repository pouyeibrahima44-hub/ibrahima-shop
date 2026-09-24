document.addEventListener("DOMContentLoaded", function () {

    const boutons = document.querySelectorAll("button");

    boutons.forEach(function (bouton) {

        if (bouton.textContent.trim().toUpperCase() !== "ACHETEZ") return;

        const carte = bouton.closest("div");
        if (!carte) return;

        let nom = "Produit";
        const titre = carte.querySelector("h3");

        if (titre) {
            nom = titre.textContent.trim();
        }

        // Récupérer le prix
        let prix = "";
        const paragraphes = carte.querySelectorAll("p");

        paragraphes.forEach(function (p) {
            if (p.textContent.toUpperCase().includes("PRIX")) {
                prix = p.textContent.replace(/[^0-9]/g, "");
            }
        });

        if (!prix) {
            console.warn("Carte sans prix, ignorée :", carte);
            return;
        }

        bouton.addEventListener("click", function () {

            localStorage.setItem("produit_nom", nom);
            localStorage.setItem("produit_prix", prix);

            window.location.href = "paiement.html";
        });
    });

});
