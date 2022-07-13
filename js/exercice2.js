// Fonction anonyme
(function () {
  // Création d'un header que l'on stock dans la constante header
  const header = createDOMElement("header", "", document.body);

  // Création d'un button que l'on stock dans la constante button1
  const button1 = createDOMElement("button", "Compétences", header, [
    { name: "id", value: "btn-skills" },
  ]);

  // Création d'un button que l'on stock dans la constante button2
  const button2 = createDOMElement("button", "Expérience", header, [
    { name: "id", value: "btn-experience" },
  ]);

  // Création d'un button que l'on stock dans la constante button3
  const button3 = createDOMElement("button", "Formation", header, [
    { name: "id", value: "btn-skills" },
  ]);

  button1.onclick = function () {
    hideTheMains();
    const main = createDOMElement("main", "", document.body);
    const title = createDOMElement("h1", "Compétences", main);
    const para = createDOMElement("p", "Les observations du décalage vers le rouge des rayonnements électromagnétiques en provenance d'autres galaxies suggèrent que celles-ci s'éloignent de notre galaxie, à une vitesse radiale d'éloignement proportionnelle à cet éloignement.En étudiant les galaxies proches, Edwin Hubble s'est aperçu que la vitesse d'éloignement d'une galaxie était proportionnelle à sa distance par rapport à l'observateur (loi de Hubble) ; une telle loi est explicable par un Univers visible en expansion.Bien que la constante de Hubble ait été révisée par le passé dans d'importantes proportions (dans un rapport de 10 à 1), la loi de Hubble a été extrapolée aux galaxies éloignées, pour lesquelles la distance ne peut être calculée au moyen de la parallaxe ; cette loi est ainsi utilisée pour déterminer la distance des galaxies les plus éloignées.En extrapolant l'expansion de l'Univers dans le passé, on arrive à une époque où celui-ci a dû être beaucoup plus chaud et beaucoup plus dense qu'aujourd'hui. C'est le modèle du Big Bang, conçu par Georges Lemaître, chanoine catholique belge, qui est un ingrédient essentiel de l'actuel modèle standard de la cosmologie et possède aujourd'hui un grand nombre de confirmations expérimentales[réf. nécessaire]. La description du début de l'histoire de l'Univers par ce modèle ne commence cependant qu'après qu'il fut sorti d'une période appelée ère de Planck, durant laquelle l'échelle d'énergie de l'Univers était si grande que le modèle standard n'est pas en mesure de décrire les phénomènes quantiques qui s'y sont déroulés. Durant cette époque, seule une théorie de la gravitation quantique pourrait expliquer le comportement microscopique de la matière sous l'influence importante de la gravité. Mais les physiciens ne disposent pas encore (en 2015) d'une telle théorie. Pour des raisons de cohérence avec les observations, après l'ère de Planck le modèle du Big Bang privilégie aujourd'hui l'existence d'une phase d'inflation cosmique, très brève mais durant laquelle l'Univers aurait grandi de façon extrêmement rapide. C'est à la suite de cette phase que l'essentiel des particules de l'Univers aurait été créé à une haute température, enclenchant un grand nombre de processus importants11 qui ont finalement abouti à l'émission d'une grande quantité de lumière, appelée fond diffus cosmologique, qui peut être aujourd'hui observé avec une grande précision par toute une série d'instruments (ballons-sondes, sondes spatiales, radiotélescopes).C'est l'observation de ce rayonnement fossile micro-onde, remarquablement uniforme dans toutes les directions, qui constitue aujourd'hui l'élément capital qui assoit le modèle du Big Bang comme description correcte de l'Univers dans son passé lointain. De nombreux éléments du modèle restent encore à déterminer (par exemple le modèle décrivant la phase d'inflation), mais il y a aujourd'hui consensus de la communauté scientifique autour du modèle du Big Bang.Dans le cadre du modèle ΛCDM, les contraintes issues des observations de la sonde WMAP12 sur les paramètres cosmologiques indiquent une valeur la plus probable pour l'âge de l'Univers à environ 13,82 milliards d'années13 avec une incertitude de 0,02 milliard d'années, ce qui est en accord avec les données indépendantes issues de l'observation des amas globulaires14 ainsi que celle des naines blanches15. Cet âge a été confirmé en 2013 par les observations du satellite Planck. ", main);
  };

  button2.onclick = function () {
    hideTheMains();
    const main = createDOMElement("main", "", document.body);
    const title = createDOMElement("h1", "Expérience", main);
    const para = createDOMElement("p", "Dans l'enseignement, la compétence désigne la mobilisation d'un ensemble de ressources (savoir, savoir-faire, savoir-être), en vue de résoudre une situation complexe appartenant à une famille de situations-problèmes (Roegiers, 2010). Il s'agit de compétence de base pour désigner les compétences qui doivent être acquises pour pouvoir passer d'une année à l'autre, ou d'un cycle à l'autre. La formation continue permettra à chacun d'accroître ses compétences de base initialement acquises mais aussi acquérir d'autres compétences dans d'autres sphères du savoir. La double ou triple compétence de base n'est plus exceptionnelle. Dans le domaine professionnel, la compétence sera définie comme un savoir-agir résultant de la mobilisation et de l'utilisation efficaces d'un ensemble de ressources internes ou externes dans des situations relevant d'un contexte professionnel. Dans une définition comme dans l'autre, la compétence est fortement liée à la notion de situation problème, qui appartient à une famille de situations bien délimitée. On peut alors définir une compétence comme étant un savoir en action.Plusieurs observateurs français ont apporté leur lecture de la compétence dans le cadre d'une économie des savoirs et de guerre économique où la compétence est un élément essentiel pour les organisations et en particulier les entreprises. Selon Michel Parlier5, la compétence a quatre caractéristiques. Selon lui, la compétence est opératoire et finalisée: elle est toujours « compétence à agir », elle est indissociable d'une activité ; elle est également apprise : le travailleur devient compétent par construction personnelle et par construction sociale. Elle est structurée et combine (ce n'est pas une simple addition) des savoir agir, vouloir agir et pouvoir agir ; enfin, elle est abstraite et hypothétique : on ne peut pas observer directement la compétence réelle (à ne surtout pas confondre avec la compétence requise ou prescrite), mais on peut observer ses manifestations, ses conséquences.Pour Guy Le Boterf (en 2000)6, les compétences sont les résultantes de trois facteurs :le savoir agir qui « suppose de savoir combiner et mobiliser des ressources pertinentes » ;le vouloir agir qui se réfère à la motivation de l'individu et au contexte plus ou moins incitatif ;le pouvoir agir qui « renvoie à l'existence d'un contexte, d'une organisation de travail, de choix de management, de conditions sociales qui rendent possibles et légitimes la prise de responsabilité et la prise de risques de l'individu ».Si on se risque à faire une analogie musicale on pourrait dire que les modalités prescrites par les organisations de travail constituent une sorte de partition (c'est la compétence requise). La compétence réelle des agents sera d'interpréter cette partition. Par conséquent il n'y a pas qu'une seule façon de résoudre un problème avec compétence.Pour Philippe Zarifian, la compétence comprend trois dimensions. La première, une attitude de prise d'initiative et de responsabilité face aux situations dont l'individu ou le groupe a la charge et auxquels ils se confrontent, en visant la réussite de leur action. La seconde, des savoirs d'action qui expriment l'intelligence pratique de ces situations et s'appuient sur la mobilisation de l'expérience et de connaissances acquises en formation. La troisième et dernière, l'existence, le développement, la consolidation et la mobilisation de réseaux d'acteurs qui contribuent directement à la prise en charge des situations ou apportent un soutien.Pour Claude Levy-Leboyer, la compétence est « la mise en œuvre intégrée d'aptitudes, de traits de personnalité et aussi de connaissances acquises, pour mener à bien une mission complexe dans le cadre de l'entreprise qui en a chargé l'individu, et dans l'esprit de ses stratégies et de sa culture. »Enfin, Sandra Bellier relève trois caractéristiques principales à la lecture des différentes définitions existantes. La compétence permet d'agir et c'est là que l'on peut la repérer. La compétence est contextuelle, c'est-à-dire qu'elle est liée à une situation professionnelle donnée et correspond donc à un contexte. La compétence regroupe un ensemble de rubriques constitutives dont le savoir, le savoir-faire et souvent — mais pas toujours — le savoir-être.Il existe également une ou plutôt des approches américaines de la compétence développées en linguistique, en psychologie du travail et dans le domaine de la stratégie d'entreprise1.La pensée complexe et le co-constructivisme d'Edgar Morin ont aussi précisé et relié ce concept de compétence. ", main);
  };

  button3.onclick = function () {
    hideTheMains();
    const main = createDOMElement("main", "", document.body);
    const title = createDOMElement("h1", "Formation", main);
    const para = createDOMElement("p", "La formation et l'évolution du Système solaire, le système planétaire qui abrite la Terre, sont déterminées par un modèle aujourd'hui très largement accepté et connu sous le nom d'« hypothèse de la nébuleuse solaire ». Ce modèle a été développé au XVIIIe siècle par Emanuel Swedenborg, Emmanuel Kant et Pierre-Simon de Laplace. Les développements consécutifs à cette hypothèse ont fait intervenir une grande variété de disciplines scientifiques comprenant l'astronomie, la physique, la géologie et la planétologie. Depuis le début de la conquête de l'espace dans les années 1950 et à la suite de la découverte des exoplanètes dans les années 1990, les modèles ont été remis en cause et affinés pour tenir compte des nouvelles observations.Selon les estimations issues de ce modèle, le Système solaire a commencé d'exister il y a 4,55 à 4,56 milliards d'années avec l'effondrement gravitationnel d'une petite partie d'un nuage moléculaire géant. La plus grande partie de la masse du nuage initial s'est effondrée au centre de cette zone, formant le Soleil, alors que ses restes épars ont formé le disque protoplanétaire sur la base duquel se sont formés les planètes, les lunes, les astéroïdes et les autres petits corps du Système solaire.Le Système solaire a considérablement évolué depuis sa formation initiale. Nombre de lunes se sont formées à partir du disque gazeux et des poussières encerclant leurs planètes associées, alors qu'on suppose que d'autres ont été formées indépendamment puis capturées par une planète. Enfin, d'autres encore, comme le satellite naturel de la Terre, la Lune, seraient (très probablement) le résultat de collisions cataclysmiques. Des collisions entre des corps ont eu lieu continuellement jusqu'à nos jours et ont joué un rôle central dans l'évolution du Système solaire. Les positions des planètes ont sensiblement glissé, et certaines planètes ont échangé leurs places1. On suppose maintenant que cette migration planétaire a été le principal moteur de l'évolution du jeune Système solaire.Dans environ 5 milliards d'années, le Soleil se refroidira et s'étendra bien au-delà de son diamètre actuel, pour devenir une géante rouge. Il éjectera alors ses couches supérieures selon le schéma des nébuleuses planétaires, et laissera derrière lui un cadavre stellaire : une naine blanche. Dans un futur lointain, l'attraction gravitationnelle d'étoiles passant dans le voisinage arrachera alors progressivement le cortège des planètes de l'ancien système à son étoile. Certaines planètes seront détruites alors que d'autres seront éjectées dans l'espace. Au bout de plusieurs milliers de milliards d'années, il est probable que le Soleil, devenu une naine noire, sera seul et glacé, sans aucun corps gravitant dans son orbite2. ", main);
  };

  /**
   * Masque tous les main de la page html
   */
  function hideTheMains() {
    // on stocke les domElements dans la constante mains.
    const para = document.querySelector("main");

    // on masque les elements par un attribut de style.
    para.forEach((element) => {
        element.setAttribute("style", "display: none");
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
    if (tab.length) {
      tab.forEach((attribute) => {
        if (attribute.name && attribute.value)
          element.setAttribute(attribute.name, attribute.value);
      });
    }
    return element;
  }
})();
