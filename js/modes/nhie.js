// ── NHIE ENGINE ──
  let nhieDiff = 'mild';
  nhieScreen.querySelector('.tod-diff-cards').addEventListener('click', (e) => {
    const card = e.target.closest('.tod-diff-card');
    if (!card) return;
    nhieScreen.querySelectorAll('.tod-diff-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    nhieDiff = card.dataset.diff;
  });
  $('nhie-back-btn').addEventListener('click', () => {
    nhieScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });
  $('nhie-start-btn').addEventListener('click', () => {
    let pool = CARDS_NHIE.filter(c => c.difficulty === nhieDiff);
    nhieScreen.style.display = 'none';
    activeCards = pool;
    selectedMode = 'nhie';
    launchGame();
  });
