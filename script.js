// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
// pseudocode: select the page elements and set the storage key
const STORAGE_KEY = "mtm6302-a4-creature-collection-preferences";

const themeSelect = document.querySelector("#theme");
const layoutSelect = document.querySelector("#layout");
const collectionList = document.querySelector("#collection");
const statusMessage = document.querySelector("#status");

// pseudocode: build one li with img, name and description
function createCreatureEntry(creature) {
  const item = document.createElement("li");
  item.classList.add("creature");

  const image = document.createElement("img");
  image.src = creature.image;
  image.alt = creature.alt;

  const info = document.createElement("div");
  info.classList.add("creature-info");

  const heading = document.createElement("h3");
  heading.textContent = creature.name;

  const description = document.createElement("p");
  description.classList.add("creature-description");
  description.textContent = creature.description;

  info.append(heading, description);
  item.append(image, info);
  return item;
}

// pseudocode: clear list, loop through array, add each creature once
function renderCollection() {
  collectionList.innerHTML = "";
  for (const creature of $creatures) {
    collectionList.appendChild(createCreatureEntry(creature));
  }
}

renderCollection();

// pseudocode: show a short message in the status paragraph
function showMessage(text) {
  statusMessage.textContent = text;
}

// pseudocode: put the chosen theme on the body's data-theme
function applyTheme(theme) {
  document.body.dataset.theme = theme;
}

// pseudocode: when theme changes, update the body
function handleThemeChange() {
  applyTheme(themeSelect.value);
}

themeSelect.addEventListener("change", handleThemeChange);


// pseudocode: put the chosen layout on the collection's data-layout
function applyLayout(layout) {
  collectionList.dataset.layout = layout;
}

// pseudocode: when layout changes, update the collection
function handleLayoutChange() {
  applyLayout(layoutSelect.value);
}

layoutSelect.addEventListener("change", handleLayoutChange);

// pseudocode: read both controls, store them as one JSON object
function savePreferences() {
  const preferences = {
    theme: themeSelect.value,
    layout: layoutSelect.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  showMessage("Preferences saved.");
}


function handleThemeChange() {
  applyTheme(themeSelect.value);
  savePreferences();
}

function handleLayoutChange() {
  applyLayout(layoutSelect.value);
  savePreferences();
}
