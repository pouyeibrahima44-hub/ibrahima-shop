let nom = localStorage.getItem("produit_nom");
let prix = localStorage.getItem("produit_prix");
let taille = localStorage.getItem("produit_taille");
let quantite = localStorage.getItem("quantiteProduit");

document.getElementById("nom").innerText =
  "Produit : " + (nom || "Aucun produit");

document.getElementById("prix").innerText =
  "Prix : " + (prix || "0") + " FCFA";

document.getElementById("taille").innerText =
  "Taille : " + (taille || "Non choisie");

document.getElementById("quantite").innerText =
  "Quantité : " + (quantite || "0");

function payer() {

  let methode = document.querySelector("select").value;

  let numero = document.querySelector("input").value;

  if (!numero) {

    alert("Entre ton numéro de téléphone !");

    return;
  }

  alert(
    "Paiement en cours...\n" +
    "Méthode : " + methode + "\n" +
    "Numéro : " + numero + "\n" +
    "Produit : " + nom + "\n" +
    "Prix : " + prix + " FCFA\n" +
    "Taille : " + taille + "\n" +
    "Quantité : " + quantite
  );

  localStorage.removeItem("produit_nom");
  localStorage.removeItem("produit_prix");
  localStorage.removeItem("produit_taille");
  localStorage.removeItem("quantiteProduit");

}