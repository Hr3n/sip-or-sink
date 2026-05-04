// ── TRUTH OR DARE ENGINE ──
  let todDiff = 'mild';
  let todPlayerIdx = 0;
  let todPool = [];
  let todCustomCards = []; // player-created cards

  const todCustomPanel = $('tod-custom-panel');
  const todCustomCardsList = $('tod-custom-cards-list');

  // Difficulty card selection
  todScreen.querySelector('.tod-diff-cards').addEventListener('click', (e) => {
    const card = e.target.closest('.tod-diff-card');
    if (!card) return;
    const diff = card.dataset.diff;
    if (diff === 'todcustom') {
      // Toggle custom panel
      todScreen.querySelectorAll('.tod-diff-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      todDiff = 'todcustom';
      todCustomPanel.style.display = 'block';
    } else {
      todScreen.querySelectorAll('.tod-diff-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      todDiff = diff;
      todCustomPanel.style.display = 'none';
    }
  });

  // Add custom truth
  $('tod-add-truth').addEventListener('click', () => {
    const inp = $('tod-custom-truth');
    const text = inp.value.trim();
    if (!text) return;
    todCustomCards.push({ difficulty:'custom', type:'truth', emoji:'📝', text });
    inp.value = '';
    renderTodCustomCards();
  });

  // Add custom dare
  $('tod-add-dare').addEventListener('click', () => {
    const inp = $('tod-custom-dare');
    const text = inp.value.trim();
    if (!text) return;
    todCustomCards.push({ difficulty:'custom', type:'dare', emoji:'✨', text });
    inp.value = '';
    renderTodCustomCards();
  });

  function renderTodCustomCards() {
    todCustomCardsList.innerHTML = todCustomCards.map((c, i) => {
      const color = c.type === 'truth' ? 'var(--cyan)' : 'var(--pink)';
      return `<span style="display:inline-flex;align-items:center;gap:.3rem;padding:.25rem .6rem;border-radius:8px;font-size:.7rem;background:rgba(255,255,255,.04);border:1px solid ${color};animation:chipIn .2s ease">${c.emoji} ${c.text.substring(0,30)}${c.text.length>30?'...':''}<button onclick="removeTodCard(${i})" style="background:none;border:none;color:var(--text-dim);cursor:pointer;font-size:.8rem;padding:0 0 0 .2rem;">✕</button></span>`;
    }).join('');
  }

  // Global function for removing custom cards
  window.removeTodCard = function(idx) {
    todCustomCards.splice(idx, 1);
    renderTodCustomCards();
  };

  todBackBtn.addEventListener('click', () => {
    todScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });

  todStartBtn.addEventListener('click', () => {
    todPlayerIdx = 0;
    if (todDiff === 'todcustom') {
      // Gather selected difficulties
      const checked = [...todScreen.querySelectorAll('.tod-mix-cb:checked')].map(cb => cb.value);
      let pool = CARDS_TOD.filter(c => checked.includes(c.difficulty));
      // Add player-created cards
      pool = pool.concat(todCustomCards);
      if (pool.length === 0) { alert('Select at least one difficulty or add custom cards!'); return; }
      todPool = shuffleDeck([...pool]);
    } else {
      todPool = shuffleDeck(CARDS_TOD.filter(c => c.difficulty === todDiff));
    }
    todScreen.style.display = 'none';
    clearBodyModes();
    gameScreen.style.display = 'flex';
    activeCards = todPool;
    deck = [...todPool];
    drawnCount = 0;
    currentPlayerIdx = 0;
    currentPlayerEl.textContent = players[0];
    updateProgress();
    showTodChoice();
  });

  function showTodChoice() {
    gameCard.className = 'card waiting';
    gameCard.innerHTML = `
      <div class="card-emoji">🎯</div>
      <div class="card-text" style="margin-bottom:.5rem"><strong>${players[todPlayerIdx]}</strong>, choose:</div>
      <div class="tod-choice-btns">
        <button class="tod-choice-btn truth" id="tod-truth-btn">🗣️ Truth</button>
        <button class="tod-choice-btn dare" id="tod-dare-btn">🔥 Dare</button>
      </div>
    `;
    drawBtn.style.display = 'none';

    document.getElementById('tod-truth-btn').addEventListener('click', () => drawTod('truth'));
    document.getElementById('tod-dare-btn').addEventListener('click', () => drawTod('dare'));
  }

  function drawTod(type) {
    const available = todPool.filter(c => c.type === type);
    if (available.length === 0) { alert('No more cards of that type!'); return; }
    const idx = Math.floor(Math.random() * available.length);
    const card = available[idx];
    todPool.splice(todPool.indexOf(card), 1);
    drawnCount++;

    drawBtn.style.display = '';
    drawBtn.textContent = 'Next Player';

    gameCard.classList.remove('enter');
    void gameCard.offsetWidth;
    gameCard.className = 'card enter';

    const typeLabel = type === 'truth' ? 'TRUTH' : 'DARE';
    const typeClass = type === 'truth' ? 'cat-icebreaker' : 'cat-shotroule';
    gameCard.innerHTML = `
      <span class="card-category ${typeClass}">${typeLabel}</span>
      <div class="card-emoji">${card.emoji}</div>
      <div class="card-text">${card.text}</div>
    `;

    updateProgress();

    if (todPool.length === 0) {
      drawBtn.textContent = 'Finish 🎉';
    }
  }

  // Override draw button for ToD mode
  const origDrawClick = drawCard;
  drawBtn.addEventListener('click', () => {
    if (selectedMode === 'tod') {
      if (todPool.length === 0) { showEnd(); return; }
      todPlayerIdx = (todPlayerIdx + 1) % players.length;
      currentPlayerIdx = todPlayerIdx;
      currentPlayerEl.textContent = players[todPlayerIdx];
      showTodChoice();
    }
  });
