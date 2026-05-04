// ── HIGHER OR LOWER GAME ENGINE (5-CARD ROW) ──
  let holDeck = [];
  let holRowCards = []; // the 5 cards in the current row
  let holCurrentStep = 0; // 0 to 4
  let holDrawnCard = null;
  
  const HOL_RANKS = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  
  function getHolRankValue(rank) {
    return HOL_RANKS.indexOf(rank);
  }

  function startHolGame() {
    holScreen.style.display = 'flex';
    
    // Generate a standard 52 card deck
    holDeck = [];
    for (const suit of ['hearts','diamonds','clubs','spades']) {
      for (const rank of HOL_RANKS) {
        holDeck.push({ suit, rank, color: (suit==='hearts'||suit==='diamonds')?'red':'black', emoji: hrSuitInfo[suit].emoji });
      }
    }
    holDeck = shuffleDeck(holDeck);
    
    dealHolRow();
  }
  
  function dealHolRow() {
    if (holDeck.length < 6) {
      alert("Deck is out of cards! Reshuffling...");
      startHolGame();
      return;
    }
    
    holRowCards = [];
    for (let i = 0; i < 5; i++) {
      holRowCards.push(holDeck.pop());
    }
    holCurrentStep = 0;
    
    // Draw the next card that player will guess on, but don't show it yet
    holDrawnCard = holDeck.pop();
    
    renderHolRow();
    
    $('hol-btn-higher').disabled = false;
    $('hol-btn-lower').disabled = false;
  }
  
  function renderHolRow(revealDrawnCard = false) {
    const rowContainer = $('hol-card-row');
    rowContainer.innerHTML = '';
    
    // All 5 cards in the row are ALWAYS face up
    holRowCards.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = `hol-card-area ${card.color}`;
      if (index === holCurrentStep) {
          cardEl.classList.add('active'); // highlight the card they are comparing AGAINST
      }
      cardEl.innerHTML = `
        <div class="hol-card-top">${card.rank}</div>
        <div class="hol-card-center">${card.emoji}</div>
        <div class="hol-card-bottom">${card.rank}</div>
      `;
      rowContainer.appendChild(cardEl);
    });
    
    // Render the drawn card
    const drawnEl = $('hol-drawn-card');
    if (revealDrawnCard && holDrawnCard) {
      drawnEl.className = `hol-card-area ${holDrawnCard.color}`;
      drawnEl.innerHTML = `
        <div class="hol-card-top">${holDrawnCard.rank}</div>
        <div class="hol-card-center">${holDrawnCard.emoji}</div>
        <div class="hol-card-bottom">${holDrawnCard.rank}</div>
      `;
    } else {
      drawnEl.className = `hol-card-area back`;
      drawnEl.innerHTML = ``;
    }
  }
  
  function guessHol(isHigherGuess) {
    if (holCurrentStep >= 5) return; // Already won
    
    const currentCard = holRowCards[holCurrentStep];
    const currentVal = getHolRankValue(currentCard.rank);
    const drawnVal = getHolRankValue(holDrawnCard.rank);
    
    // Reveal the drawn card
    renderHolRow(true); 
    
    // Check win/loss
    let isCorrect = false;
    if (drawnVal !== currentVal) {
      if (isHigherGuess && drawnVal > currentVal) isCorrect = true;
      if (!isHigherGuess && drawnVal < currentVal) isCorrect = true;
    }
    
    // Use setTimeout so the card renders before the alert blocks the UI
    setTimeout(() => {
      // The drawn card ALWAYS replaces the current row card
      holRowCards[holCurrentStep] = holDrawnCard;
      
      if (isCorrect) {
        holCurrentStep++;
        if (holCurrentStep === 5) {
          alert("🎉 YOU BEAT THE ROW! Assign 5 drinks to someone else!");
          dealHolRow(); // Start over for the next player
        } else {
          // Move to next card, draw new hidden card
          if (holDeck.length === 0) { alert("Deck empty! Reshuffling."); startHolGame(); return; }
          holDrawnCard = holDeck.pop();
          renderHolRow(false);
        }
      } else {
        // Wrong
        alert(`❌ WRONG! (or equal). Drink and start over from the first card!`);
        holCurrentStep = 0; // Reset to start of the row (with the newly replaced cards)
        if (holDeck.length === 0) { alert("Deck empty! Reshuffling."); startHolGame(); return; }
        holDrawnCard = holDeck.pop();
        renderHolRow(false);
      }
    }, 600); // slight delay so the card flip is visible
  }
  
  $('hol-btn-higher').addEventListener('click', () => guessHol(true));
  $('hol-btn-lower').addEventListener('click', () => guessHol(false));
  
  $('hol-quit-btn').addEventListener('click', () => {
    holScreen.style.display = 'none';
    modeScreen.style.display = 'flex';
  });
