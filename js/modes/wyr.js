// ── WYR ENGINE ──
  let wyrDiff = 'mild';
  wyrScreen.querySelector('.tod-diff-cards').addEventListener('click', (e) => {
    const card = e.target.closest('.tod-diff-card');
    if (!card) return;
    wyrScreen.querySelectorAll('.tod-diff-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    wyrDiff = card.dataset.diff;
  });
  $('wyr-back-btn').addEventListener('click', () => {
    wyrScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });
  $('wyr-start-btn').addEventListener('click', () => {
    let pool = CARDS_WYR.filter(c => c.difficulty === wyrDiff);
    wyrScreen.style.display = 'none';
    activeCards = pool;
    selectedMode = 'wyr';
    launchGame();
  });
