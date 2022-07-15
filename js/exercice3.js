//
fetch("http://universities.hipolabs.com/search?country=Andorra")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderUnivercities(data);
  })
  .catch((error) => {
    console.log(`Error: `, error);
  });

function renderUnivercities(data) {
  const section = createDOMElement("section", "", document.body, [
    {
      name: "style",
      value: "display: flex; justify-content: space-evenly; flex-wrap: wrap;",
    },
  ]);
  data.array.forEach((univercity) => {
    const article = createDOMElement("article", "", section, [
      {
        name: "style",
        value:
          "border: 1px solid blue; padding: 20px; margin: 30px 0; flex-basis: 28%;",
      },
    ]);
    const title = createDOMElement("h2", univercity.name, article);
  });
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
