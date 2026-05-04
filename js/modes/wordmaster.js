// ── WORD MASTER ENGINE ──
  let wmWords = [];
  let wmCurrentWord = '';
  let wmClueList = [];
  let wmSipCount = 0;
  let wmRound = 0;
  let wmMaxRounds = 5;
  let wmGmIdx = 0;

  function startWordMaster() {
    wmWords = shuffleDeck([...WORDS]);
    wmRound = 0;
    wmSipCount = 0;
    wmGmIdx = 0;
    clearBodyModes();
    wmScreen.style.display = 'flex';
    nextWmRound();
  }

  function nextWmRound() {
    wmRound++;
    if (wmRound > wmMaxRounds || wmWords.length === 0) { endWordMaster(); return; }
    wmCurrentWord = wmWords.pop();
    wmClueList = [];
    wmGmName.textContent = players[wmGmIdx];
    wmSecretWord.textContent = wmCurrentWord;
    wmSecretWord.classList.remove('revealed');
    wmClues.innerHTML = '';
    wmRoundInfo.textContent = `Round ${wmRound} / ${wmMaxRounds}`;
    wmSips.textContent = wmSipCount;
  }

  // Peek: hold to reveal
  wmWordArea.addEventListener('pointerdown', () => wmSecretWord.classList.add('revealed'));
  wmWordArea.addEventListener('pointerup', () => wmSecretWord.classList.remove('revealed'));
  wmWordArea.addEventListener('pointerleave', () => wmSecretWord.classList.remove('revealed'));

  wmWrongBtn.addEventListener('click', () => {
    wmSipCount += 2; // guesser + gamemaster each take 1
    wmSips.textContent = wmSipCount;
    // Prompt for a clue word
    const clue = prompt(`Gamemaster (${players[wmGmIdx]}): Enter your next 1-word clue:`);
    if (clue && clue.trim()) {
      wmClueList.push(clue.trim().split(/\s+/)[0]); // force single word
      wmClues.innerHTML = wmClueList.map(c => `<span class="wm-clue-chip">${c}</span>`).join('');
    }
  });

  wmCorrectBtn.addEventListener('click', () => {
    wmSecretWord.classList.add('revealed');
    alert(`🎉 Correct! The word was "${wmCurrentWord}". Next round!`);
    wmGmIdx = (wmGmIdx + 1) % players.length;
    nextWmRound();
  });

  wmNextBtn.addEventListener('click', () => {
    alert(`⏭️ Skipped! The word was "${wmCurrentWord}". Everyone drinks 2!`);
    wmSipCount += players.length * 2;
    wmSips.textContent = wmSipCount;
    wmGmIdx = (wmGmIdx + 1) % players.length;
    nextWmRound();
  });

  function endWordMaster() {
    wmScreen.style.display = 'none';
    endScreen.style.display = 'flex';
  }

  wmQuitBtn.addEventListener('click', () => {
    wmScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });
