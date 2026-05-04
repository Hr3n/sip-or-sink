const CATEGORY_CSS = {
    counting:    'cat-counting',
    voting:      'cat-voting',
    rules:       'cat-rules',
    rapidfire:   'cat-rapidfire',
    confessions: 'cat-confessions',
    dares:       'cat-dares',
    spicyvote:   'cat-spicyvote',
    challenges:  'cat-challenges',
    wildcard:    'cat-wildcard',
    icebreaker:  'cat-icebreaker',
    deeptalk:    'cat-deeptalk',
    partydare:   'cat-partydare',
    groupgame:   'cat-groupgame',
    waterfall:   'cat-waterfall',
    chug:        'cat-chug',
    shotroule:   'cat-shotroule',
    penalty:     'cat-penalty',
    nhie:        'cat-nhie',
    wyr:         'cat-wyr',
  };
  const CATEGORY_LABEL = {
    counting:    'Counting',
    voting:      'Voting',
    rules:       'Rules',
    rapidfire:   'Rapid Fire',
    confessions: 'Confessions',
    dares:       'Dare',
    spicyvote:   'Spicy Vote',
    challenges:  'Challenge',
    wildcard:    'Wildcard',
    icebreaker:  'Icebreaker',
    deeptalk:    'Deep Talk',
    partydare:   'Party Dare',
    groupgame:   'Group Game',
    waterfall:   'Waterfall',
    chug:        'Chug',
    shotroule:   'Shot Roulette',
    penalty:     'Penalty',
    nhie:        'Never Have I Ever',
    wyr:         'Would You Rather',
  };

  // ── STATE ──
  let players = [];
  let currentPlayerIdx = 0;
  let deck = [];
  let drawnCount = 0;
  let selectedMode = 'classic';
  let activeCards = CARDS_CLASSIC;
  let customSelected = new Set();
  const ALL_CARDS = [...CARDS_CLASSIC, ...CARDS_NSFW, ...CARDS_PARTY, ...CARDS_DRINKING, ...CARDS_NHIE, ...CARDS_WYR];

  // ── DOM ──
  const $ = id => document.getElementById(id);
  const setupScreen    = $('setup-screen');
  const modeScreen     = $('mode-screen');
  const builderScreen  = $('builder-screen');
  const gameScreen     = $('game-screen');
  const endScreen      = $('end-screen');
  const playerInput    = $('player-input');
  const addPlayerBtn   = $('add-player-btn');
  const playerChips    = $('player-chips');
  const startBtn       = $('start-btn');
  const browseBtn      = $('browse-btn');
  const deckModal      = $('deck-modal');
  const deckModalClose = $('deck-modal-close');
  const deckModalBody  = $('deck-modal-body');
  const modeClassic    = $('mode-classic');
  const modeNsfw       = $('mode-nsfw');
  const modeParty      = $('mode-party');
  const modeDrinking   = $('mode-drinking');
  const modeWordmaster = $('mode-wordmaster');
  const modeTod       = $('mode-tod');
  const modeNhie      = $('mode-nhie');
  const modeWyr       = $('mode-wyr');
  const modeHorserace = $('mode-horserace');
  const modeHol       = $('mode-hol');
  const modeWavelength = $('mode-wavelength');
  const modeCustom     = $('mode-custom');
  const nsfwWarning    = $('nsfw-warning');
  const modeStartBtn   = $('mode-start-btn');
  const modeBackBtn    = $('mode-back-btn');
  const nhieScreen     = $('nhie-screen');
  const wyrScreen      = $('wyr-screen');
  const horseraceScreen = $('horserace-screen');
  const holScreen      = $('hol-screen');
  const builderCounter = $('builder-counter');
  const builderCats    = $('builder-categories');
  const builderBackBtn = $('builder-back-btn');
  const builderPlayBtn = $('builder-play-btn');
  const currentPlayerEl = $('current-player');
  const cardCounter   = $('card-counter');
  const gameCard      = $('game-card');
  const drawBtn       = $('draw-btn');
  const resetBtn      = $('reset-btn');
  const replayBtn     = $('replay-btn');
  const progressFill  = $('progress-fill');
  const progressLabel = $('progress-label');
  // Word Master DOM
  const wmScreen    = $('wm-screen');
  const wmRoundInfo = $('wm-round-info');
  const wmGmName    = $('wm-gm-name');
  const wmSecretWord = $('wm-secret-word');
  const wmClues     = $('wm-clues');
  const wmSips      = $('wm-sips');
  const wmWrongBtn  = $('wm-wrong-btn');
  const wmCorrectBtn = $('wm-correct-btn');
  const wmNextBtn   = $('wm-next-btn');
  const wmQuitBtn   = $('wm-quit-btn');
  const wmWordArea  = $('wm-word-area');
  // Truth or Dare DOM
  const todScreen   = $('tod-screen');
  const todStartBtn = $('tod-start-btn');
  const todBackBtn  = $('tod-back-btn');

  // ── HIDDEN EASTER EGG (CANASTA) ──
  let titleClicks = 0;
  let titleClickTimer = null;
  const mainTitle = $('main-title');
  if (mainTitle) {
    mainTitle.addEventListener('click', () => {
      titleClicks++;
      clearTimeout(titleClickTimer);
      if (titleClicks >= 7) {
        window.location.href = 'canasta.html';
      }
      titleClickTimer = setTimeout(() => { titleClicks = 0; }, 2000);
    });
  }

  // ── BROWSE DECK MODAL ──
  const CLASSIC_CATS = ['counting','voting','rules','rapidfire'];
  let browseFilter = 'all';

  function renderBrowseModal(filter) {
    browseFilter = filter;
    let cards;
    if (filter === 'classic') cards = CARDS_CLASSIC;
    else if (filter === 'nsfw') cards = CARDS_NSFW;
    else if (filter === 'party') cards = CARDS_PARTY;
    else if (filter === 'drinking') cards = CARDS_DRINKING;
    else cards = ALL_CARDS;

    const groups = {};
    cards.forEach(c => {
      if (!groups[c.category]) groups[c.category] = [];
      groups[c.category].push(c);
    });

    deckModalBody.innerHTML = '';
    for (const [cat, list] of Object.entries(groups)) {
      const catLabel = CATEGORY_LABEL[cat] || cat;
      const catCss = CATEGORY_CSS[cat] || '';
      const div = document.createElement('div');
      div.className = 'browse-cat-group';
      div.innerHTML = `
        <div class="browse-cat-title ${catCss}">${catLabel} <span class="count">(${list.length})</span></div>
        ${list.map(c => `<div class="browse-card">${c.emoji} ${c.text}</div>`).join('')}
      `;
      deckModalBody.appendChild(div);
    }

    // Update tab active state
    deckModal.querySelectorAll('.deck-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.filter === filter);
    });
  }

  browseBtn.addEventListener('click', () => {
    renderBrowseModal('all');
    deckModal.classList.add('open');
  });

  deckModalClose.addEventListener('click', () => deckModal.classList.remove('open'));
  deckModal.addEventListener('click', (e) => {
    if (e.target === deckModal) deckModal.classList.remove('open');
  });

  // Tab switching
  deckModal.querySelector('.deck-modal-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.deck-tab');
    if (tab) renderBrowseModal(tab.dataset.filter);
  });

  // ── SETUP ──
  function addPlayer() {
    const name = playerInput.value.trim();
    if (!name || players.includes(name)) { playerInput.value = ''; return; }
    players.push(name);
    renderChips();
    playerInput.value = '';
    playerInput.focus();
    startBtn.disabled = players.length < 2;
  }

  function removePlayer(name) {
    players = players.filter(p => p !== name);
    renderChips();
    startBtn.disabled = players.length < 2;
  }

  function renderChips() {
    playerChips.innerHTML = players.map(p =>
      `<div class="chip">${p}<button onclick="removePlayer('${p.replace(/'/g, "\\'")}')" aria-label="Remove ${p}">✕</button></div>`
    ).join('');
  }

  addPlayerBtn.addEventListener('click', addPlayer);
  playerInput.addEventListener('keydown', e => { if (e.key === 'Enter') addPlayer(); });

  // ── NAVIGATE TO MODE SCREEN ──
  startBtn.addEventListener('click', () => {
    setupScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });

  // ── MODE SELECTION ──
  const ALL_MODES = ['classic','nsfw','party','drinking','wordmaster','tod','nhie','wyr','horserace','hol','wavelength','custom'];
  const MODE_ELS = { classic: modeClassic, nsfw: modeNsfw, party: modeParty, drinking: modeDrinking, wordmaster: modeWordmaster, tod: modeTod, nhie: modeNhie, wyr: modeWyr, horserace: modeHorserace, hol: modeHol, wavelength: modeWavelength, custom: modeCustom };

  function selectMode(mode) {
    selectedMode = mode;
    ALL_MODES.forEach(m => MODE_ELS[m].classList.remove('selected'));
    MODE_ELS[mode].classList.add('selected');
    nsfwWarning.style.display = 'none';
    modeStartBtn.classList.remove('nsfw-active','custom-active','party-active','drinking-active','wordmaster-active','tod-active');

    const btnMap = {
      classic:    ['Start Game 🎴', ''],
      nsfw:       ['Start Game 🔥', 'nsfw-active'],
      party:      ['Start Game 🤝', 'party-active'],
      drinking:   ['Start Game 🍺', 'drinking-active'],
      wordmaster: ['Start Game 🧠', 'wordmaster-active'],
      tod:        ['Start Game 🎯', 'tod-active'],
      nhie:       ['Start Game 🤫', 'nhie-active'],
      wyr:        ['Start Game ⚖️', 'wyr-active'],
      horserace:  ['Start Race 🐎', 'horserace-active'],
      hol:        ['Play Now 🃏', 'hol-active'],
      wavelength: ['Start Game 📻', 'wavelength-active'],
      custom:     ['Build Deck 🛠️', 'custom-active'],
    };
    const [label, cls] = btnMap[mode];
    modeStartBtn.textContent = label;
    if (cls) modeStartBtn.classList.add(cls);
    if (mode === 'nsfw') nsfwWarning.style.display = 'block';
  }

  ALL_MODES.forEach(m => MODE_ELS[m].addEventListener('click', () => selectMode(m)));

  modeBackBtn.addEventListener('click', () => {
    modeScreen.style.display = 'none';
    setupScreen.style.display = 'flex';
  });

  // ── MODE START HANDLER ──
  modeStartBtn.addEventListener('click', () => {
    if (selectedMode === 'custom') {
      modeScreen.style.display = 'none';
      renderBuilder();
      builderScreen.style.display = 'flex';
    } else if (selectedMode === 'wordmaster') {
      modeScreen.style.display = 'none';
      startWordMaster();
    } else if (selectedMode === 'tod') {
      modeScreen.style.display = 'none';
      todScreen.style.display = 'flex';
    } else if (selectedMode === 'nhie') {
      modeScreen.style.display = 'none';
      nhieScreen.style.display = 'flex';
    } else if (selectedMode === 'wyr') {
      modeScreen.style.display = 'none';
      wyrScreen.style.display = 'flex';
    } else if (selectedMode === 'horserace') {
      modeScreen.style.display = 'none';
      startHorseRace();
    } else if (selectedMode === 'hol') {
      modeScreen.style.display = 'none';
      startHolGame();
    } else if (selectedMode === 'wavelength') {
      modeScreen.style.display = 'none';
      startWavelength();
    } else {
      startGame();
    }
  });

  // ── DECK BUILDER ──
  function renderBuilder() {
    // Group ALL cards by category
    const groups = {};
    ALL_CARDS.forEach((card, idx) => {
      if (!groups[card.category]) groups[card.category] = [];
      groups[card.category].push({ ...card, globalIdx: idx });
    });

    builderCats.innerHTML = '';
    for (const [cat, cards] of Object.entries(groups)) {
      const catLabel = CATEGORY_LABEL[cat] || cat;
      const catCss = CATEGORY_CSS[cat] || '';
      const group = document.createElement('div');
      group.className = 'builder-cat-group';
      group.innerHTML = `
        <div class="builder-cat-header">
          <span class="builder-cat-title ${catCss}">${catLabel} (${cards.length})</span>
          <div class="builder-cat-actions">
            <button data-cat="${cat}" data-action="all">All</button>
            <button data-cat="${cat}" data-action="none">None</button>
          </div>
        </div>
        <div class="builder-card-list">
          ${cards.map(c => `
            <label class="builder-card-item${customSelected.has(c.globalIdx) ? ' checked' : ''}">
              <input type="checkbox" data-idx="${c.globalIdx}" ${customSelected.has(c.globalIdx) ? 'checked' : ''}>
              <span class="builder-card-text">${c.emoji} ${c.text}</span>
            </label>
          `).join('')}
        </div>
      `;
      builderCats.appendChild(group);
    }

    // Event delegation for checkboxes
    builderCats.onclick = (e) => {
      // Handle All/None buttons
      const btn = e.target.closest('[data-action]');
      if (btn) {
        const cat = btn.dataset.cat;
        const action = btn.dataset.action;
        ALL_CARDS.forEach((card, idx) => {
          if (card.category === cat) {
            if (action === 'all') customSelected.add(idx);
            else customSelected.delete(idx);
          }
        });
        renderBuilder();
        return;
      }

      // Handle checkbox toggle
      const checkbox = e.target.closest('input[type="checkbox"]');
      if (checkbox) {
        const idx = parseInt(checkbox.dataset.idx);
        if (checkbox.checked) customSelected.add(idx);
        else customSelected.delete(idx);
        // Toggle visual class
        const item = checkbox.closest('.builder-card-item');
        item.classList.toggle('checked', checkbox.checked);
        updateBuilderCount();
      }
    };

    updateBuilderCount();
  }

  function updateBuilderCount() {
    const count = customSelected.size;
    builderCounter.innerHTML = `Selected: <strong>${count}</strong> cards`;
    builderPlayBtn.textContent = `Play with ${count} Card${count !== 1 ? 's' : ''}`;
    builderPlayBtn.disabled = count < 5;
  }

  builderBackBtn.addEventListener('click', () => {
    builderScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });

  builderPlayBtn.addEventListener('click', () => {
    // Build custom deck from selected indices
    activeCards = [...customSelected].map(i => ALL_CARDS[i]);
    builderScreen.style.display = 'none';
    launchGame();
  });

  // ── START GAME ──
  function startGame() {
    const DECK_MAP = { classic: CARDS_CLASSIC, nsfw: CARDS_NSFW, party: CARDS_PARTY, drinking: CARDS_DRINKING };
    activeCards = DECK_MAP[selectedMode] || CARDS_CLASSIC;
    modeScreen.style.display = 'none';
    launchGame();
  }

  function clearBodyModes() {
    document.body.classList.remove('nsfw-mode','party-mode','drinking-mode');
  }

  function launchGame() {
    deck = shuffleDeck([...activeCards]);
    drawnCount = 0;
    currentPlayerIdx = 0;

    // Toggle body theme classes
    clearBodyModes();
    const hasNsfw = activeCards.some(c => ['confessions','dares','spicyvote','challenges','wildcard'].includes(c.category));
    const hasParty = activeCards.some(c => ['icebreaker','deeptalk','partydare','groupgame'].includes(c.category));
    const hasDrink = activeCards.some(c => ['waterfall','chug','shotroule','penalty'].includes(c.category));
    if (selectedMode === 'drinking' || (hasDrink && !hasNsfw && !hasParty && selectedMode === 'custom')) document.body.classList.add('drinking-mode');
    else if (selectedMode === 'party' || (hasParty && !hasNsfw && selectedMode === 'custom')) document.body.classList.add('party-mode');
    else if (hasNsfw && selectedMode !== 'classic' && selectedMode !== 'party') document.body.classList.add('nsfw-mode');

    endScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    currentPlayerEl.textContent = players[currentPlayerIdx];
    updateProgress();
    const EMOJI_MAP = { nsfw: '🔥', custom: '🛠️', party: '🤝', drinking: '🍺' };
    const emoji = EMOJI_MAP[selectedMode] || '🃏';
    gameCard.className = 'card waiting';
    gameCard.innerHTML = `<div class="card-emoji">${emoji}</div><div class="card-text">Tap <strong>Draw</strong> to begin!</div>`;
  }

  
// ── DRAW ──
  function drawCard() {
    if (selectedMode === 'tod') return; // ToD has its own flow
    if (deck.length === 0) { showEnd(); return; }

    const card = deck.pop();
    drawnCount++;

    // Animate
    gameCard.classList.remove('enter');
    // Force reflow
    void gameCard.offsetWidth;

    const catClass = CATEGORY_CSS[card.category];
    const catLabel = CATEGORY_LABEL[card.category];

    gameCard.className = 'card enter';
    gameCard.innerHTML = `
      <span class="card-category ${catClass}">${catLabel}</span>
      <div class="card-emoji">${card.emoji}</div>
      <div class="card-text">${card.text}</div>
    `;

    // Advance player
    currentPlayerIdx = (currentPlayerIdx + 1) % players.length;
    currentPlayerEl.textContent = players[currentPlayerIdx];

    updateProgress();

    if (deck.length === 0) {
      drawBtn.textContent = 'Finish 🎉';
    }
  }

  drawBtn.addEventListener('click', drawCard);

  // ── PROGRESS ──
  function updateProgress() {
    const total = activeCards.length;
    const pct = (drawnCount / total) * 100;
    progressFill.style.width = pct + '%';
    cardCounter.textContent = `${drawnCount} / ${total}`;
    progressLabel.textContent = `Cards remaining: ${total - drawnCount}`;
  }

  // ── RESET ──
  function resetGame() {
    deck = shuffleDeck([...activeCards]);
    drawnCount = 0;
    currentPlayerIdx = 0;
    currentPlayerEl.textContent = players[0];
    drawBtn.textContent = 'Draw Card';
    gameCard.className = 'card waiting';
    const emoji = ({ nsfw: '🔥', custom: '🛠️', party: '🤝', drinking: '🍺' })[selectedMode] || '🃏';
    gameCard.innerHTML = `<div class="card-emoji">${emoji}</div><div class="card-text">Deck reshuffled! Tap <strong>Draw</strong> to go again.</div>`;
    updateProgress();
  }

  resetBtn.addEventListener('click', resetGame);

  // ── END ──
  function showEnd() {
    gameScreen.style.display = 'none';
    endScreen.style.display = 'flex';
  }

  replayBtn.addEventListener('click', () => {
    endScreen.style.display = 'none';
    // Go back to mode selection so they can switch
    modeScreen.style.display = 'flex';
  });

  
// ── SHUFFLE (Fisher-Yates) ──
  function shuffleDeck(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
