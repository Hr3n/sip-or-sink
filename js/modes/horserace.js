// ── HORSE RACE ENGINE ──
  let hrDeck = [];
  let hrLinks = [];
  let hrPositions = { 'hearts': 0, 'diamonds': 0, 'clubs': 0, 'spades': 0 };
  const HR_TRACK_LENGTH = 7;
  let hrIsOver = false;

  const hrSuitInfo = {
    'hearts': { emoji: '♥️', color: 'red' },
    'diamonds': { emoji: '♦️', color: 'red' },
    'clubs': { emoji: '♣️', color: 'black' },
    'spades': { emoji: '♠️', color: 'black' }
  };

  $('hr-quit-btn').addEventListener('click', () => {
    horseraceScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });

  function startHorseRace() {
    horseraceScreen.style.display = 'flex';
    hrIsOver = false;
    hrPositions = { 'hearts': 0, 'diamonds': 0, 'clubs': 0, 'spades': 0 };
    
    // Generate deck
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K']; // No Aces
    hrDeck = [];
    suits.forEach(suit => {
      values.forEach(val => {
        hrDeck.push({ suit, val });
      });
    });
    hrDeck = shuffleDeck(hrDeck);
    
    // Draw links
    hrLinks = [];
    for (let i = 0; i < HR_TRACK_LENGTH; i++) {
      hrLinks.push({ card: hrDeck.pop(), revealed: false });
    }
    
    renderHrBoard();
    $('hr-drawn-card').className = 'hr-drawn-card';
    $('hr-drawn-card').innerHTML = '<span id="hr-drawn-suit">🃏</span>';
    $('hr-announcer').textContent = 'Place your bets! Then tap Draw.';
    $('hr-draw-btn').style.display = 'inline-block';
  }

  function renderHrBoard() {
    // Reset horse positions visually
    ['hearts','diamonds','clubs','spades'].forEach(suit => {
      const horse = $(`horse-${suit}`);
      // Each step is 100% / HR_TRACK_LENGTH approx
      const stepWidth = 100 / (HR_TRACK_LENGTH + 1);
      horse.style.left = `calc(${hrPositions[suit] * stepWidth}% + 4px)`;
    });
    
    // Render links
    const linksContainer = $('hr-links');
    linksContainer.innerHTML = '';
    hrLinks.forEach((link, i) => {
      const div = document.createElement('div');
      div.className = 'hr-link-card';
      if (link.revealed) {
        div.classList.add('revealed', hrSuitInfo[link.card.suit].color);
        div.textContent = hrSuitInfo[link.card.suit].emoji;
      } else {
        div.textContent = '🃏';
      }
      linksContainer.appendChild(div);
    });
  }

  $('hr-draw-btn').addEventListener('click', () => {
    if (hrIsOver) return;
    if (hrDeck.length === 0) {
      $('hr-announcer').textContent = 'Deck ran out! It is a tie!';
      hrIsOver = true;
      $('hr-draw-btn').style.display = 'none';
      return;
    }
    
    const card = hrDeck.pop();
    const sInfo = hrSuitInfo[card.suit];
    
    const drawnCardEl = $('hr-drawn-card');
    drawnCardEl.className = 'hr-drawn-card';
    void drawnCardEl.offsetWidth; // Force re-animation
    drawnCardEl.className = `hr-drawn-card revealed ${sInfo.color}`;
    drawnCardEl.innerHTML = `<span>${sInfo.emoji}</span>`;
    
    // Move horse
    hrPositions[card.suit]++;
    $('hr-announcer').textContent = `${card.suit.toUpperCase()} moves forward!`;
    renderHrBoard();
    
    // Check links
    checkHrStumble(card.suit);
    
    // Check win
    if (hrPositions[card.suit] >= HR_TRACK_LENGTH) {
      $('hr-announcer').textContent = `🏁 ${card.suit.toUpperCase()} WINS! Everyone who bet on it, give out drinks!`;
      hrIsOver = true;
      $('hr-draw-btn').style.display = 'none';
    }
  });

  function checkHrStumble(lastMovedSuit) {
    for (let i = 0; i < HR_TRACK_LENGTH; i++) {
      if (!hrLinks[i].revealed) {
        let allPassed = true;
        for (const s of ['hearts','diamonds','clubs','spades']) {
          if (hrPositions[s] <= i) allPassed = false;
        }
        if (allPassed) {
          hrLinks[i].revealed = true;
          const stumbleSuit = hrLinks[i].card.suit;
          hrPositions[stumbleSuit]--;
          
          $('hr-announcer').textContent = `Link revealed! ${stumbleSuit.toUpperCase()} stumbles and moves back!`;
          renderHrBoard();
          break; // only flip one at a time per draw
        }
      }
    }
  }
