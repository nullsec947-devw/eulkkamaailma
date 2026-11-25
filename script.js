
"use strict";

/* ==========================================
   ELÄINMAAILMA 2.0
   Koko sivuston JavaScript
========================================== */

/* ---------- ELÄIMET ---------- */

const animals = [
  {
    id: "lion",
    name: "Leijona",
    emoji: "🦁",
    continent: "Afrikka",
    region: "Afrikka",
    habitat: "Savanni",
    color: "#fff0d2",
    size: 4,
    sound: "Leijona karjuu kovaa.",
    description: "Leijona on suuri kissaeläin. Sitä kutsutaan usein eläinten kuninkaaksi. Leijonat elävät ryhmissä, joita kutsutaan laumoiksi.",
    fact: "Leijonan karjunta voi kuulua jopa useiden kilometrien päähän!",
    food: "Liha",
    lifespan: "10–15 vuotta"
  },
  {
    id: "elephant",
    name: "Norsu",
    emoji: "🐘",
    continent: "Afrikka",
    region: "Afrikka",
    habitat: "Savanni ja metsät",
    color: "#e8efff",
    size: 10,
    sound: "Norsu töräyttää kärsällään.",
    description: "Norsu on maailman suurin maalla elävä eläin. Sillä on pitkä kärsä, suuret korvat ja vahvat jalat.",
    fact: "Norsun kärsässä on tuhansia lihaksia!",
    food: "Kasvit, lehdet ja hedelmät",
    lifespan: "60–70 vuotta"
  },
  {
    id: "giraffe",
    name: "Kirahvi",
    emoji: "🦒",
    continent: "Afrikka",
    region: "Afrikka",
    habitat: "Savanni",
    color: "#fff0d8",
    size: 8,
    sound: "Kirahvi ääntelee hiljaisesti.",
    description: "Kirahvilla on todella pitkä kaula ja pitkät jalat. Se syö mielellään puiden lehtiä.",
    fact: "Kirahvi voi olla lähes kuusi metriä korkea!",
    food: "Lehdet ja oksat",
    lifespan: "20–25 vuotta"
  },
  {
    id: "zebra",
    name: "See-pr-a",
    emoji: "🦓",
    continent: "Afrikka",
    region: "Afrikka",
    habitat: "Savanni",
    color: "#edf0f5",
    size: 5,
    sound: "Seeprat hirnuvat ja hörisevät.",
    description: "Seepralla on mustavalkoiset raidat. Jokaisen seepran raidat ovat erilaiset.",
    fact: "Seepran raidat ovat jokaisella yksilölliset!",
    food: "Ruoho",
    lifespan: "20–25 vuotta"
  },
  {
    id: "panda",
    name: "Panda",
    emoji: "🐼",
    continent: "Aasia",
    region: "Aasia",
    habitat: "Bambumetsät",
    color: "#eff2f5",
    size: 4,
    sound: "Panda voi määkiä ja äännellä.",
    description: "Panda on mustavalkoinen karhu, joka elää Kiinan vuoristometsissä. Se syö paljon bambua.",
    fact: "Panda voi syödä bambua jopa 12 tuntia päivässä!",
    food: "Bambu",
    lifespan: "15–20 vuotta"
  },
  {
    id: "tiger",
    name: "Tiikeri",
    emoji: "🐅",
    continent: "Aasia",
    region: "Aasia",
    habitat: "Metsät",
    color: "#fff0d8",
    size: 7,
    sound: "Tiikeri karjuu.",
    description: "Tiikeri on suuri ja vahva kissaeläin. Sen turkissa on oransseja ja mustia raitoja.",
    fact: "Tiikerin raidat jatkuvat myös sen ihossa!",
    food: "Liha",
    lifespan: "10–15 vuotta"
  },
  {
    id: "monkey",
    name: "Apina",
    emoji: "🐒",
    continent: "Aasia",
    region: "Aasia",
    habitat: "Trooppiset metsät",
    color: "#f7eadb",
    size: 3,
    sound: "Apinat kiljuvat ja ääntelevät.",
    description: "Apinat ovat taitavia kiipeilijöitä. Monet niistä käyttävät häntäänsä tasapainon apuna.",
    fact: "Jotkut apinat osaavat käyttää työkaluja!",
    food: "Hedelmät, lehdet ja hyönteiset",
    lifespan: "15–30 vuotta"
  },
  {
    id: "camel",
    name: "Kameli",
    emoji: "🐪",
    continent: "Aasia",
    region: "Aasia",
    habitat: "Aavikko",
    color: "#fff0d5",
    size: 6,
    sound: "Kameli mörisee.",
    description: "Kameli elää kuivilla aavikoilla. Sen kyttyrään varastoituu rasvaa, jota se käyttää energiana.",
    fact: "Kameli voi selvitä pitkään ilman vettä!",
    food: "Kasvit ja pensaat",
    lifespan: "40–50 vuotta"
  },
  {
    id: "eagle",
    name: "Kotka",
    emoji: "🦅",
    continent: "Eurooppa",
    region: "Eurooppa",
    habitat: "Vuoristot ja metsät",
    color: "#e8f2ff",
    size: 3,
    sound: "Kotka kirkkuu.",
    description: "Kotka on suuri petolintu. Sillä on erittäin tarkka näkö ja vahvat kynnet.",
    fact: "Kotka voi nähdä saaliinsa todella kaukaa!",
    food: "Pienet eläimet ja kalat",
    lifespan: "20–30 vuotta"
  },
  {
    id: "bear",
    name: "Karhu",
    emoji: "🐻",
    continent: "Eurooppa",
    region: "Eurooppa",
    habitat: "Metsät",
    color: "#f4e8dc",
    size: 8,
    sound: "Karhu murisee.",
    description: "Karhu on suuri nisäkäs. Suomessa elää ruskeakarhuja, jotka viettävät talven talviunessa.",
    fact: "Karhu voi haistaa ruokaa todella kaukaa!",
    food: "Marjat, kasvit, hyönteiset ja liha",
    lifespan: "20–30 vuotta"
  },
  {
    id: "fox",
    name: "Kettu",
    emoji: "🦊",
    continent: "Eurooppa",
    region: "Eurooppa",
    habitat: "Metsät ja pellot",
    color: "#fff0df",
    size: 2,
    sound: "Kettu voi haukkua ja kiljua.",
    description: "Kettu on ovela ja nopea eläin. Sillä on tuuhea häntä ja tarkat aistit.",
    fact: "Ketun häntä auttaa sitä pysymään tasapainossa!",
    food: "Pienet eläimet, marjat ja hyönteiset",
    lifespan: "3–6 vuotta"
  },
  {
    id: "wolf",
    name: "Susi",
    emoji: "🐺",
    continent: "Eurooppa",
    region: "Eurooppa",
    habitat: "Metsät",
    color: "#e8edf5",
    size: 6,
    sound: "Susi ulvoo.",
    description: "Susi on koiraeläin, joka elää usein laumassa. Se kommunikoi muiden susien kanssa ulvomalla.",
    fact: "Sudet voivat kulkea yhdessä pitkiä matkoja!",
    food: "Liha",
    lifespan: "6–8 vuotta"
  },
  {
    id: "penguin",
    name: "Pingviini",
    emoji: "🐧",
    continent: "Etelämanner",
    region: "Etelämanner",
    habitat: "Jäiset rannat",
    color: "#e5f6ff",
    size: 3,
    sound: "Pingviini ääntelee kovasti.",
    description: "Pingviini on lintu, joka ei osaa lentää. Sen siivet ovat kehittyneet uimiseen.",
    fact: "Pingviinit ovat todella taitavia uimareita!",
    food: "Kalat ja äyriäiset",
    lifespan: "15–20 vuotta"
  },
  {
    id: "seal",
    name: "Hylje",
    emoji: "🦭",
    continent: "Etelämanner",
    region: "Etelämanner",
    habitat: "Jäiset meret",
    color: "#e8f6ff",
    size: 5,
    sound: "Hylje voi haukkua ja äännellä.",
    description: "Hylje on merinisäkäs. Se liikkuu vedessä taitavasti ja lepää usein jäällä tai rannalla.",
    fact: "Hylkeet voivat sukeltaa pitkään veden alla!",
    food: "Kalat ja äyriäiset",
    lifespan: "20–30 vuotta"
  },
  {
    id: "kangaroo",
    name: "Kenguru",
    emoji: "🦘",
    continent: "Oseania",
    region: "Oseania",
    habitat: "Ruohotasangot",
    color: "#fff0dc",
    size: 6,
    sound: "Kenguru voi murista.",
    description: "Kenguru on pussieläin, joka liikkuu hyppimällä. Emo kantaa poikastaan vatsapussissa.",
    fact: "Kenguru voi hypätä yhdellä loikalla todella pitkälle!",
    food: "Ruoho ja kasvit",
    lifespan: "8–12 vuotta"
  },
  {
    id: "koala",
    name: "Koala",
    emoji: "🐨",
    continent: "Oseania",
    region: "Oseania",
    habitat: "Eukalyptusmetsät",
    color: "#eaf1f4",
    size: 2,
    sound: "Koala voi murista matalasti.",
    description: "Koala elää Australiassa ja viettää suuren osan päivästä nukkuen puissa.",
    fact: "Koala voi nukkua jopa 20 tuntia päivässä!",
    food: "Eukalyptuksen lehdet",
    lifespan: "10–15 vuotta"
  },
  {
    id: "sloth",
    name: "Laiskiainen",
    emoji: "🦥",
    continent: "Etelä-Amerikka",
    region: "Etelä-Amerikka",
    habitat: "Sademetsät",
    color: "#e9f4e5",
    size: 2,
    sound: "Laiskiainen voi äännellä hiljaa.",
    description: "Laiskiainen liikkuu todella hitaasti ja viettää paljon aikaa puissa roikkuen.",
    fact: "Laiskiainen voi kääntää päätään pitkälle taaksepäin!",
    food: "Lehdet ja kasvit",
    lifespan: "20–30 vuotta"
  },
  {
    id: "toucan",
    name: "Tukaani",
    emoji: "🦜",
    continent: "Etelä-Amerikka",
    region: "Etelä-Amerikka",
    habitat: "Sademetsät",
    color: "#fff0dc",
    size: 1,
    sound: "Tukaani voi raakuttaa.",
    description: "Tukaanilla on suuri ja värikäs nokka. Se elää Etelä-Amerikan trooppisissa metsissä.",
    fact: "Tukaanin nokka näyttää suurelta, mutta se on yllättävän kevyt!",
    food: "Hedelmät ja hyönteiset",
    lifespan: "15–20 vuotta"
  }
];

/* ---------- MAANOSAT ---------- */

const continents = [
  { name: "Afrikka", emoji: "🦁", color: "#fff0d8", description: "Lämmin savannien ja suurten eläinten maa." },
  { name: "Aasia", emoji: "🐼", color: "#f0eaff", description: "Suuri maanosa, jossa on monenlaisia metsiä." },
  { name: "Eurooppa", emoji: "🐻", color: "#e7f2ff", description: "Myös Suomen koti ja monien metsäneläinten asuinpaikka." },
  { name: "Etelämanner", emoji: "🐧", color: "#e6f8ff", description: "Kylmä ja jäinen maanosa etelässä." },
  { name: "Oseania", emoji: "🦘", color: "#e9f8e9", description: "Australian ja monien erikoisten eläinten alue." },
  { name: "Pohjois-Amerikka", emoji: "🦬", color: "#fff1e5", description: "Suuria metsiä, vuoria ja tasankoja." },
  { name: "Etelä-Amerikka", emoji: "🦥", color: "#e8f7e9", description: "Trooppisten sademetsien ja värikkäiden eläinten koti." }
];

/* ---------- TALLENNETTU PELITILANNE ---------- */

const STORAGE_KEY = "elainmaailma20-progress";

let progress = {
  points: 0,
  visited: [],
  learned: [],
  dailyRevealed: false,
  dailyDate: ""
};

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved && typeof saved === "object") {
    progress = { ...progress, ...saved };
  }
} catch (error) {
  console.warn("Tallennettua pelitilannetta ei voitu lukea.");
}

let activeContinent = "Kaikki";
let activeAnimal = null;
let dailyAnimal = null;
let toastTimer = null;
let gameState = {};

/* ---------- APUTOIMINNOT ---------- */

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Edistymisen tallentaminen ei onnistunut.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function addPoints(amount, message = "") {
  progress.points += amount;
  saveProgress();
  updatePassport();

  if (message) showToast(message);
}

function updatePassport() {
  const points = document.getElementById("points");
  const headerPoints = document.getElementById("headerPoints");
  const visited = document.getElementById("visited");
  const learned = document.getElementById("learned");
  const progressText = document.getElementById("progressText");
  const passportProgress = document.getElementById("passportProgress");
  const topProgressBar = document.getElementById("topProgressBar");

  const visitedCount = progress.visited.length;
  const learnedCount = progress.learned.length;

  if (points) points.textContent = progress.points;
  if (headerPoints) headerPoints.textContent = progress.points;
  if (visited) visited.textContent = `${visitedCount}/7`;
  if (learned) learned.textContent = learnedCount;

  const percentage = Math.round(
    ((visitedCount + learnedCount) / (7 + animals.length)) * 100
  );

  if (progressText) progressText.textContent = `${percentage} %`;
  if (passportProgress) passportProgress.style.width = `${percentage}%`;
  if (topProgressBar) topProgressBar.style.width = `${percentage}%`;
}

function markLearned(animalId) {
  if (!progress.learned.includes(animalId)) {
    progress.learned.push(animalId);
    addPoints(5, "⭐ Uusi eläin opittu! +5 pistettä");
  } else {
    saveProgress();
  }
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Puhetoiminto ei ole käytettävissä tässä selaimessa.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fi-FI";
  utterance.rate = 0.85;
  utterance.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const finnishVoice = voices.find(voice => voice.lang.toLowerCase().startsWith("fi"));

  if (finnishVoice) utterance.voice = finnishVoice;

  window.speechSynthesis.speak(utterance);
}

function getAnimal(id) {
  return animals.find(animal => animal.id === id);
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function randomAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}

/* ---------- MAANOSAKORTIT ---------- */

function renderContinents() {
  const grid = document.getElementById("continentGrid");
  if (!grid) return;

  grid.innerHTML = continents.map((continent, index) => {
    const count = animals.filter(animal => animal.continent === continent.name).length;

    return `
      <button class="continent-card"
        style="--card-bg:${continent.color}"
        data-continent="${continent.name}">
        <span class="card-arrow">↗</span>
        <span class="continent-emoji">${continent.emoji}</span>
        <h3>${continent.name}</h3>
        <p>${count} eläintä · ${continent.description}</p>
      </button>
    `;
  }).join("");

  grid.querySelectorAll(".continent-card").forEach(card => {
    card.addEventListener("click", () => {
      const continent = card.dataset.continent;
      activeContinent = continent;

      if (!progress.visited.includes(continent)) {
        progress.visited.push(continent);
        addPoints(10, `🌍 ${continent} tutkittu! +10 pistettä`);
      } else {
        updatePassport();
      }

      renderFilters();
      renderAnimals();

      document.getElementById("elaimet").scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

/* ---------- ELÄINTEN SUODATTIMET ---------- */

function renderFilters() {
  const filters = document.getElementById("animalFilters");
  if (!filters) return;

  const names = ["Kaikki", ...continents.map(item => item.name)];

  filters.innerHTML = names.map(name => `
    <button
      class="filter-button ${activeContinent === name ? "active" : ""}"
      data-filter="${name}">
      ${name}
    </button>
  `).join("");

  filters.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      activeContinent = button.dataset.filter;
      renderFilters();
      renderAnimals();
    });
  });
}

/* ---------- ELÄINKORTIT ---------- */

function renderAnimals() {
  const grid = document.getElementById("animalGrid");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("animalSearch");

  if (!grid) return;

  const search = searchInput ? searchInput.value.trim().toLocaleLowerCase("fi") : "";

  const filtered = animals.filter(animal => {
    const matchesContinent =
      activeContinent === "Kaikki" || animal.continent === activeContinent;

    const searchable = [
      animal.name,
      animal.continent,
      animal.habitat,
      animal.food
    ].join(" ").toLocaleLowerCase("fi");

    return matchesContinent && searchable.includes(search);
  });

  grid.innerHTML = filtered.map(animal => `
    <button class="animal-card" data-animal="${animal.id}">
      <div class="animal-visual" style="--animal-bg:${animal.color}">
        ${animal.emoji}
      </div>
      <div class="animal-info">
        <h3>${animal.name}</h3>
        <p>${animal.continent} · ${animal.habitat}</p>
        <span class="learn-label">Tutki eläintä →</span>
      </div>
    </button>
  `).join("");

  if (emptyState) {
    emptyState.hidden = filtered.length !== 0;
  }

  grid.querySelectorAll(".animal-card").forEach(card => {
    card.addEventListener("click", () => {
      openAnimal(card.dataset.animal);
    });
  });
}

/* ---------- ELÄIMEN LISÄTIEDOT ---------- */

function openAnimal(id) {
  const animal = getAnimal(id);
  if (!animal) return;

  activeAnimal = animal;

  const dialog = document.getElementById("animalDialog");
  const details = document.getElementById("animalDetails");

  details.innerHTML = `
    <div class="detail-emoji">${animal.emoji}</div>
    <h2 class="detail-title">${animal.name}</h2>
    <p class="detail-text">${animal.description}</p>

    <div class="detail-fact">
      💡 <strong>Tiesitkö?</strong><br>
      ${animal.fact}
    </div>

    <p class="detail-text">
      🌍 <strong>Asuinpaikka:</strong> ${animal.continent}<br>
      🏡 <strong>Elinympäristö:</strong> ${animal.habitat}<br>
      🍎 <strong>Ruoka:</strong> ${animal.food}<br>
      ⏳ <strong>Elinikä:</strong> ${animal.lifespan}
    </p>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  markLearned(animal.id);
}

function closeAnimalDialog() {
  const dialog = document.getElementById("animalDialog");
  if (dialog && dialog.open) dialog.close();
}

/* ---------- PÄIVÄN ELÄIN ---------- */

function setupDailyAnimal() {
  const today = new Date().toLocaleDateString("fi-FI");
  const daily = document.getElementById("dailyAnimal");

  if (progress.dailyDate !== today || !progress.dailyAnimalId) {
    dailyAnimal = randomAnimal();
    progress.dailyAnimalId = dailyAnimal.id;
    progress.dailyDate = today;
    progress.dailyRevealed = false;
    saveProgress();
  } else {
    dailyAnimal = getAnimal(progress.dailyAnimalId) || randomAnimal();
  }

  renderDailyAnimal();

  document.getElementById("revealDaily").addEventListener("click", revealDailyAnimal);

  document.getElementById("speakDaily").addEventListener("click", () => {
    if (!progress.dailyRevealed) {
      showToast("Paljasta ensin päivän eläin!");
      return;
    }

    speak(`${dailyAnimal.name}. ${dailyAnimal.description} ${dailyAnimal.fact}`);
  });
}

function renderDailyAnimal() {
  const daily = document.getElementById("dailyAnimal");
  if (!daily || !dailyAnimal) return;

  if (!progress.dailyRevealed) {
    daily.innerHTML = `
      <div class="daily-question">❔</div>
      <h3>Kuka piileskelee?</h3>
      <p>Paljasta päivän eläin painikkeesta!</p>
    `;
  } else {
    daily.innerHTML = `
      <div class="daily-question">${dailyAnimal.emoji}</div>
      <h3>${dailyAnimal.name}!</h3>
      <p>${dailyAnimal.fact}</p>
      <p>🌍 ${dailyAnimal.continent}</p>
    `;
  }
}

function revealDailyAnimal() {
  if (progress.dailyRevealed) {
    showToast("Päivän eläin on jo paljastettu!");
    return;
  }

  progress.dailyRevealed = true;
  renderDailyAnimal();
  addPoints(10, "🎁 Päivän eläin löydetty! +10 pistettä");
  markLearned(dailyAnimal.id);
}

/* ---------- YLLÄTYSELÄIN ---------- */

function setupRandomAnimal() {
  document.getElementById("heroRandom").addEventListener("click", () => {
    const animal = randomAnimal();
    openAnimal(animal.id);
  });
}

/* ---------- TIETOVISA ---------- */

function startQuiz() {
  const area = document.getElementById("gameArea");

  const question = randomAnimal();
  const wrongAnswers = shuffle(
    animals.filter(animal => animal.id !== question.id)
  ).slice(0, 3);

  const answers = shuffle([question, ...wrongAnswers]);

  gameState = {
    type: "quiz",
    question,
    answered: false
  };

  area.innerHTML = `
    <h3>🧠 Mikä eläin kuvassa on?</h3>
    <div class="quiz-animal">${question.emoji}</div>
    <p>Valitse oikea eläin!</p>

    <div class="answer-row">
      ${answers.map(animal => `
        <button class="answer-button" data-answer="${animal.id}">
          ${animal.name}
        </button>
      `).join("")}
    </div>

    <div class="feedback" id="gameFeedback"></div>
    <button class="button button-primary" id="nextQuestion" hidden>
      Seuraava kysymys →
    </button>
  `;

  area.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      if (gameState.answered) return;

      gameState.answered = true;

      const correct = button.dataset.answer === question.id;
      const feedback = document.getElementById("gameFeedback");

      area.querySelectorAll("[data-answer]").forEach(answer => {
        answer.disabled = true;

        if (answer.dataset.answer === question.id) {
          answer.style.background = "#dcf8e8";
          answer.style.borderColor = "#72c992";
        }
      });

      if (correct) {
        feedback.textContent = "🎉 Oikein! Hienosti tehty! +10 pistettä";
        feedback.style.color = "#2b9b62";
        addPoints(10);
        markLearned(question.id);
      } else {
        feedback.textContent = `Melkein! Oikea vastaus oli ${question.name}.`;
        feedback.style.color = "#d47778";
      }

      document.getElementById("nextQuestion").hidden = false;
    });
  });

  document.getElementById("nextQuestion").addEventListener("click", startQuiz);
}

/* ---------- MUISTIPELI ---------- */

function startMemory() {
  const area = document.getElementById("gameArea");

  const chosen = shuffle(animals).slice(0, 6);
  const cards = shuffle([...chosen, ...chosen]).map((animal, index) => ({
    id: `${animal.id}-${index}`,
    animalId: animal.id,
    emoji: animal.emoji,
    flipped: false,
    matched: false
  }));

  gameState = {
    type: "memory",
    cards,
    selected: [],
    locked: false,
    matches: 0
  };

  renderMemory();
}

function renderMemory() {
  const area = document.getElementById("gameArea");
  if (!area) return;

  area.innerHTML = `
    <h3>🃏 Muistipeli</h3>
    <p>Etsi kaikki kuusi eläinparia!</p>

    <div class="memory-grid">
      ${gameState.cards.map(card => `
        <button
          class="memory-tile ${card.flipped ? "flipped" : ""} ${card.matched ? "matched" : ""}"
          data-card="${card.id}"
          aria-label="${card.flipped || card.matched ? card.emoji : "Piilotettu kortti"}">
          ${card.flipped || card.matched ? card.emoji : "❔"}
        </button>
      `).join("")}
    </div>

    <p class="game-small-note">
      Löydetyt parit: ${gameState.matches}/6
    </p>

    <div class="feedback" id="gameFeedback"></div>
    <button class="button button-primary" id="restartMemory">Pelaa uudestaan</button>
  `;

  area.querySelectorAll("[data-card]").forEach(button => {
    button.addEventListener("click", () => {
      flipMemoryCard(button.dataset.card);
    });
  });

  document.getElementById("restartMemory").addEventListener("click", startMemory);
}

function flipMemoryCard(cardId) {
  if (gameState.locked) return;

  const card = gameState.cards.find(item => item.id === cardId);

  if (!card || card.flipped || card.matched) return;
  if (gameState.selected.length >= 2) return;

  card.flipped = true;
  gameState.selected.push(card);

  renderMemory();

  if (gameState.selected.length === 2) {
    const [first, second] = gameState.selected;

    if (first.animalId === second.animalId) {
      first.matched = true;
      second.matched = true;
      gameState.matches++;
      gameState.selected = [];

      addPoints(10, "🎉 Löysit parin! +10 pistettä");
      markLearned(first.animalId);

      renderMemory();

      if (gameState.matches === 6) {
        document.getElementById("gameFeedback").textContent =
          "🏆 Mahtavaa! Löysit kaikki parit!";
        addPoints(20, "🏆 Muistipeli valmis! +20 pistettä");
      }
    } else {
      gameState.locked = true;

      setTimeout(() => {
        first.flipped = false;
        second.flipped = false;
        gameState.selected = [];
        gameState.locked = false;
        renderMemory();
      }, 900);
    }
  }
}

/* ---------- ISO VAI PIENI ---------- */

function startSizeGame() {
  const area = document.getElementById("gameArea");

  const first = randomAnimal();
  let second = randomAnimal();

  while (second.id === first.id || second.size === first.size) {
    second = randomAnimal();
  }

  const bigger = first.size > second.size ? first : second;

  gameState = {
    type: "size",
    first,
    second,
    bigger,
    answered: false
  };

  area.innerHTML = `
    <h3>📏 Kumpi eläin on suurempi?</h3>

    <div class="answer-row">
      <button class="answer-button" data-size="${first.id}">
        <div style="font-size:3.5rem">${first.emoji}</div>
        ${first.name}
      </button>

      <button class="answer-button" data-size="${second.id}">
        <div style="font-size:3.5rem">${second.emoji}</div>
        ${second.name}
      </button>
    </div>

    <p>Valitse kahdesta suurempi eläin!</p>
    <div class="feedback" id="gameFeedback"></div>

    <button class="button button-primary" id="nextSize" hidden>
      Seuraava kysymys →
    </button>
  `;

  area.querySelectorAll("[data-size]").forEach(button => {
    button.addEventListener("click", () => {
      if (gameState.answered) return;

      gameState.answered = true;

      const correct = button.dataset.size === bigger.id;
      const feedback = document.getElementById("gameFeedback");

      if (correct) {
        feedback.textContent = "🎉 Oikein! +10 pistettä";
        feedback.style.color = "#2b9b62";
        addPoints(10);
        markLearned(bigger.id);
      } else {
        feedback.textContent = `Oikea vastaus on ${bigger.name} ${bigger.emoji}`;
        feedback.style.color = "#d47778";
      }

      area.querySelectorAll("[data-size]").forEach(answer => {
        answer.disabled = true;

        if (answer.dataset.size === bigger.id) {
          answer.style.background = "#dcf8e8";
        }
      });

      document.getElementById("nextSize").hidden = false;
    });
  });

  document.getElementById("nextSize").addEventListener("click", startSizeGame);
}

/* ---------- PELIEN KÄYNNISTYS ---------- */

function setupGames() {
  document.querySelectorAll(".game-launch").forEach(button => {
    button.addEventListener("click", () => {
      const game = button.dataset.game;

      if (game === "quiz") startQuiz();
      if (game === "memory") startMemory();
      if (game === "size") startSizeGame();

      document.getElementById("gameArea").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });
}

/* ---------- MOBIILIVALIKKO ---------- */

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

/* ---------- SULKEMINEN JA ÄÄNET ---------- */

function setupDialog() {
  document.getElementById("closeDialog").addEventListener("click", closeAnimalDialog);

  const dialog = document.getElementById("animalDialog");

  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeAnimalDialog();
  });

  document.getElementById("speakAnimal").addEventListener("click", () => {
    if (!activeAnimal) return;

    speak(
      `${activeAnimal.name}. ${activeAnimal.description} Tiesitkö? ${activeAnimal.fact}`
    );
  });
}

/* ---------- NOLLAUS ---------- */

function setupReset() {
  document.getElementById("resetProgress").addEventListener("click", () => {
    const confirmed = window.confirm(
      "Haluatko varmasti nollata kaikki pisteet ja oppimispassin?"
    );

    if (!confirmed) return;

    progress = {
      points: 0,
      visited: [],
      learned: [],
      dailyRevealed: false,
      dailyDate: ""
    };

    saveProgress();
    updatePassport();
    showToast("Oppimispassi nollattu!");
  });
}

/* ---------- HAKU ---------- */

function setupSearch() {
  const search = document.getElementById("animalSearch");

  search.addEventListener("input", renderAnimals);
}

/* ---------- KOKO SIVUSTON KÄYNNISTYS ---------- */

function init() {
  renderContinents();
  renderFilters();
  renderAnimals();

  updatePassport();

  setupDailyAnimal();
  setupRandomAnimal();
  setupGames();
  setupMobileMenu();
  setupDialog();
  setupReset();
  setupSearch();
}

document.addEventListener("DOMContentLoaded", init);
