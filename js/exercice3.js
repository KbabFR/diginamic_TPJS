// Fonction anonyme
(function () {

  const select = document.getElementById("country_select");
  const link = "http://universities.hipolabs.com/search?country=";
  let country = select.selectedOptions[0].value;

  updateFetch();

  select.addEventListener("input", updateFetch);

  function updateFetch() {
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

  function sortuniversities(data) {
    cleanPage();
    createDOMElement("h2", "universities in " + country + ": " + data.length, document.querySelector("#page"));
    if (data.length < 51) renderuniversities(data);
    else {
      const searchBar = createDOMElement("div", "", document.querySelector("#page"));
      createDOMElement("p", "Search by name: ", searchBar, [{ name: "style", value: "display: inline" }]);
      createDOMElement("input", "", searchBar, [
        { name: "id", value: "searchName" },
        { name: "type", value: "text" },
        { name: "placeholder", value: "Search a university" },
        { name: "size", value: "30px" },
        { name: "style", value: "display: inline" }
      ]).addEventListener("input", () => {filteruniversities(data)});        
    }
  }

  function filteruniversities(data) {
    cleanSections();
    const searchName = document.querySelector(`#searchName`).value;
    if (searchName.length > 1) {
      const sortedData = [];
      data.forEach((university) => { if (university.name.toLowerCase().includes(searchName.toLowerCase())) sortedData.push(university); });
      if (sortedData.length == 0) {
        section = createDOMElement("section", "", document.querySelector(`#page`), [
          {
            name: "style",
            value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
          }]);
          createDOMElement("h2", "There is no university with this search in its name.", section);
      }
      else if (sortedData.length < 51) renderuniversities(sortedData);
      else {
        section = createDOMElement("section", "", document.querySelector(`#page`), [
          {
            name: "style",
            value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
          }]);
          createDOMElement("h2", "There is " + sortedData.length + " university with this search in its name.", section);
      }
    }
  }

  function renderuniversities(data) {
    section = createDOMElement("section", "", document.querySelector(`#page`), [
      {
        name: "style",
        value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
      }]);
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

  function cleanPage() {
    const elements = document.querySelectorAll(`#page>*`);
    elements.forEach((elements) => elements.remove())
  }

  function cleanSections() {
    const elements = document.querySelectorAll(`section`);
    elements.forEach((elements) => elements.remove())
  }

  /**
   *  créer un élément dans le dom à l'emplacement voulue
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