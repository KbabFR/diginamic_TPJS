// Fonction anonyme
(function () {
  // Création d'un header que l'on stock dans la constante header
  const header = createDOMElement("header", "", document.body);

  // Création d'un main que l'on stock dans la constante main
  const main = createDOMElement("main", "", document.body);

  // Création d'un button que l'on stock dans la constante button1
  const button1 = createDOMElement("button", "Compétences", header, [
    { name: "id", value: "btn-skills" }
  ], "skills");

  // Création d'un button que l'on stock dans la constante button2
  const button2 = createDOMElement("button", "Expérience", header, [
    { name: "id", value: "btn-experience" }
  ], "experience");

  // Création d'un button que l'on stock dans la constante button3
  const button3 = createDOMElement("button", "Formation", header, [
    { name: "id", value: "btn-training" }
  ], "training");

  button1.addEventListener("click", clickBait);
  button2.addEventListener("click", clickBait);
  button3.addEventListener("click", clickBait);


  function clickBait() {
    hideMainContent();
    const elements = document.getElementsByClassName(event.target.value);
    if (elements.length > 1) {
      for (let i = 0; i < elements.length; i++)
        elements[i].setAttribute("style", "display: block");
    }
    else {
      switch (event.target.value) {
        case "skills":
          createSkills();
          break;
        case "experience":
          createExperience();
          break;
        case "training":
          createTraining();
          break;
      }

    }
  }


  function createSkills() {
    const title = createDOMElement("h1", "Compétences", main, [{ name: "class", value: "skills" }]);
    const para = createDOMElement("p", "Dans l'enseignement, la compétence désigne la mobilisation d'un ensemble de ressources (savoir, savoir-faire, savoir-être), en vue de résoudre une situation complexe appartenant à une famille de situations-problèmes (Roegiers, 2010). Il s'agit de compétence de base pour désigner les compétences qui doivent être acquises pour pouvoir passer d'une année à l'autre, ou d'un cycle à l'autre. La formation continue permettra à chacun d'accroître ses compétences de base initialement acquises mais aussi acquérir d'autres compétences dans d'autres sphères du savoir. La double ou triple compétence de base n'est plus exceptionnelle. Dans le domaine professionnel, la compétence sera définie comme un savoir-agir résultant de la mobilisation et de l'utilisation efficaces d'un ensemble de ressources internes ou externes dans des situations relevant d'un contexte professionnel.", main, [{ name: "class", value: "skills" }]);
  };

  function createExperience() {
    hideMainContent();
    const title = createDOMElement("h1", "Expérience", main, [{ name: "class", value: "experience" }]);
    const para = createDOMElement("p", "Les observations du décalage vers le rouge des rayonnements électromagnétiques en provenance d'autres galaxies suggèrent que celles-ci s'éloignent de notre galaxie, à une vitesse radiale d'éloignement proportionnelle à cet éloignement.En étudiant les galaxies proches, Edwin Hubble s'est aperçu que la vitesse d'éloignement d'une galaxie était proportionnelle à sa distance par rapport à l'observateur (loi de Hubble) ; une telle loi est explicable par un Univers visible en expansion.Bien que la constante de Hubble ait été révisée par le passé dans d'importantes proportions (dans un rapport de 10 à 1), la loi de Hubble a été extrapolée aux galaxies éloignées, pour lesquelles la distance ne peut être calculée au moyen de la parallaxe ; cette loi est ainsi utilisée pour déterminer la distance des galaxies les plus éloignées.En extrapolant l'expansion de l'Univers dans le passé, on arrive à une époque où celui-ci a dû être beaucoup plus chaud et beaucoup plus dense qu'aujourd'hui.", main, [{ name: "class", value: "experience" }]);
  };

  function createTraining() {
    hideMainContent();
    const title = createDOMElement("h1", "Formation", main, [{ name: "class", value: "training" }]);
    const para = createDOMElement("p", "La formation et l'évolution du Système solaire, le système planétaire qui abrite la Terre, sont déterminées par un modèle aujourd'hui très largement accepté et connu sous le nom d'« hypothèse de la nébuleuse solaire ». Ce modèle a été développé au XVIIIe siècle par Emanuel Swedenborg, Emmanuel Kant et Pierre-Simon de Laplace. Les développements consécutifs à cette hypothèse ont fait intervenir une grande variété de disciplines scientifiques comprenant l'astronomie, la physique, la géologie et la planétologie. Depuis le début de la conquête de l'espace dans les années 1950 et à la suite de la découverte des exoplanètes dans les années 1990, les modèles ont été remis en cause et affinés pour tenir compte des nouvelles observations.Selon les estimations issues de ce modèle, le Système solaire a commencé d'exister il y a 4,55 à 4,56 milliards d'années avec l'effondrement gravitationnel d'une petite partie d'un nuage moléculaire géant.", main, [{ name: "class", value: "training" }]);
  };

  /**
   * Masque tous les éléments dans le main de la page html
   */
  function hideMainContent() {
    // on stocke les domElements dans la constante domElements.
    const domElements = document.querySelectorAll("main>*");

    // on masque les elements par un attribut de style.
    domElements.forEach((element) => {
      element.setAttribute("style", "display: none");
    });
  }


  /**
   *  créer un élément dans le dom à l'emplacement voulue
   * @param {String} balise
   * @param {String} text
   * @param {DomElement} parent
   * @param {Array} tab
   * @param {String} valeur
   * @return {DomElement} l'élement créé
   */
  function createDOMElement(balise, text, parent, tab = [], valeur) {
    const element = document.createElement(balise);
    element.textContent = text;
    parent.appendChild(element);
    if (tab.length) {
      tab.forEach((attribute) => {
        if (attribute.name && attribute.value)
          element.setAttribute(attribute.name, attribute.value);
      });
    }
    element.value = valeur;
    return element;
  }
})();
