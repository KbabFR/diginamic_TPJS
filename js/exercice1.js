// Fonction anonyme
(function () {
  //On éxécute la fonction wannaSeeIt lorsque le document HTML à terminé d'etre chargé.
  window.onload = wannaSeeIt;

  /**
   * La fonction masque le paragraphe dans ma page html et demande via un prompt si l'on veut voir le contenu.
   * Si l'utilisateur retourne "o" ou "O" le contenu sera affiché.
   * Sinon, si l'utilisateur retourne n'importe quel autres String le contenue ne s'affichera pas
   */
  function wannaSeeIt() {
    // on stocke le domElement dans la constante para.
    const para = document.querySelector("p");

    // on masque l'element par un attribut de style.
    para.setAttribute("style", "display: none");

    // on affiche un prompt et stock son retour dans une constante show.
    const show = window.prompt(
      "Voulez-vous voir le contenu de cette page (o/n) ?"
    );

    // on affiche le contenu si la condition est remplie.
    if (show.toLowerCase() == "o") para.setAttribute("style", "display: block");
  }
})();
