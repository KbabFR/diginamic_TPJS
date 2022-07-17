// Fonction anonyme
(function () {

  // on stock dans la constante select l'element select du document HTML
  const select = document.getElementById("country_select");
  // on stock dans la constante link le corp du lien
  const link = "http://universities.hipolabs.com/search?country=";
  // on cree une variable country et on y stock la valeur du pays défini par l'element select
  let country = select.selectedOptions[0].value;

  // on appelle updateFetch() une première fois à la création de la page pour ajouter du contenu
  updateFetch();

  // on ajoute un EventListener qui s'active à chaqua fois que l'on change la valeur du select
  // en executant la fonction updateFetch
  select.addEventListener("input", updateFetch);

  /**
   * Recupere le lien avec le pays du select
   * Verifie que la reponse est un json
   * Puis execute sortUnivesities(data)
   * Sinon lance une erreur
   */
  function updateFetch() {
    // Met a jour le pays du select
    country = select.selectedOptions[0].value;
    fetch(link + country)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        sortuniversities(data);
      })
      .catch((error) => {
        console.log(`Error: `, error);
      });
  }

  /**
   * Si il y a au maximum 50 univesite dans le pays, affiche toutes les universites
   * Sinon affiche une barre de recherche pour chercher les universite par leur nom
   * @param {Array} data 
   */
  function sortuniversities(data) {
    cleanPage(); // netoyage de la page
    // Creation d'un titre qui donne le nombre d'universites dans le pays
    createDOMElement("h2", "universities in " + country + ": " + data.length, document.querySelector("#page"));
    if (data.length < 51) renderuniversities(data); // Affiche les universite si il y en a 50 ou moins
    else {
      // Creation de la barre de recherche
      const searchBar = createDOMElement("div", "", document.querySelector("#page"));
      createDOMElement("p", "Search by name: ", searchBar, [{ name: "style", value: "display: inline" }]);
      createDOMElement("input", "", searchBar, [
        { name: "id", value: "searchName" },
        { name: "type", value: "text" },
        { name: "placeholder", value: "Search a university" },
        { name: "size", value: "30px" },
        { name: "style", value: "display: inline" }
      ])
        // On ajoute un EventListener a la barre de text
        // pour quelle appelle la fonction filterUniversities à chaque modification du texte
        .addEventListener("input", () => { filteruniversities(data) });
    }
  }

  /**
   * Filtre les universites a l'aide de la barre de recherche et
   * affiche un text ou les ecoles en fonction du nombre trouve
   * @param {Array} data 
   */
  function filteruniversities(data) {
    cleanSections(); // Supprime toutes les sections
    // On stock le text dans la barre de recherche dans la constante searchName
    const searchName = document.querySelector(`#searchName`).value;
    // Si il y a au moins 2 characteres
    if (searchName.length > 1) {
      // Creation d'un tableau sortedData
      const sortedData = [];
      // Pour chaque universite dans data
      data.forEach((university) => {
        // Si le nom de l'universite contient la recherche
        // On met toLowerCase devant les valeurs pour rendre includes() case insensitive
        if (university.name.toLowerCase().includes(searchName.toLowerCase()))
          // On ajoute l'universite a sortedData
          sortedData.push(university);
      });
      // Si il n'y a pas d'universite
      if (sortedData.length == 0) {
        // Cree une section avec un texte expliquant qu'il n'y a pas d'universite
        section = createDOMElement("section", "", document.querySelector(`#page`), [
          {
            name: "style",
            value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
          }]);
        createDOMElement("h2", "There is no university with this search in its name.", section);
      }
      // Si il y a 50 universites ou moins, affiche les universites
      else if (sortedData.length < 51) renderuniversities(sortedData);
      // Sinon, si il y en a plus que 50
      else {
        // Cree une section avec un texte donnant le nombre d'universite correspondant a la recherche
        section = createDOMElement("section", "", document.querySelector(`#page`), [
          {
            name: "style",
            value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
          }]);
        createDOMElement("h2", "There is " + sortedData.length + " university with this search in its name.", section);
      }
    }
  }

  /**
   * Cree le rendu d'affichage des universite donnees en paramètre
   * @param {Array} data 
   */
  function renderuniversities(data) {
    // Creation d'une section que l'on stock dans la constante section
    section = createDOMElement("section", "", document.querySelector(`#page`), [
      {
        name: "style",
        value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
      }]);
    // Pour chaque universite cree un article avec le nom de l'ecole a l'interieur
    data.forEach((university) => {
      const article = createDOMElement("article", "", section, [
        {
          name: "style",
          value: "border: 1px solid blue; padding: 20px; margin: 30px 0; flex-basis: 28%;",
        }
      ]);
      const title = createDOMElement("h2", university.name, article);
    });
  }

  /**
   * Supprime tous les elements dans le div d'id="page"
   */
  function cleanPage() {
    const elements = document.querySelectorAll(`#page>*`);
    elements.forEach((elements) => elements.remove())
  }

  /**
   * Supprime tous les elements section
   */
  function cleanSections() {
    const elements = document.querySelectorAll(`section`);
    elements.forEach((elements) => elements.remove())
  }

  /**
   * Cree un élément dans le dom à l'emplacement voulue
   * @param {String} balise
   * @param {String} text
   * @param {DomElement} parent
   * @param {Array} tab
   * @return {DomElement} l'élement créé
   */
  function createDOMElement(balise, text, parent, tab = []) {
    const element = document.createElement(balise);
    element.textContent = text;
    parent.appendChild(element);
    tab.forEach((attribute) => {
      if (attribute.name && attribute.value)
        element.setAttribute(attribute.name, attribute.value);
    });
    return element;
  }
})();