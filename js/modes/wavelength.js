// ── WAVELENGTH ENGINE ──
  let wlPool = [];
  let wlTarget = 50;
  let wlGmIdx = 0;
  let wlRound = 0;
  
  function startWavelength() {
    wlPool = shuffleDeck([...CONCEPTS_WL]);
    wlGmIdx = 0;
    wlRound = 0;
    $('wl-screen').style.display = 'flex';
    clearBodyModes();
    nextWlRound();
  }
  
  function nextWlRound() {
    wlRound++;
    if (wlPool.length === 0) wlPool = shuffleDeck([...CONCEPTS_WL]);
    const concept = wlPool.pop();
    
    // Target from 5 to 95
    wlTarget = Math.floor(Math.random() * 91) + 5; 
    
    $('wl-round-info').textContent = `Round ${wlRound}`;
    $('wl-gm-name').textContent = players[wlGmIdx];
    $('wl-concept-left').textContent = concept[0];
    $('wl-concept-right').textContent = concept[1];
    
    $('wl-target-zone').style.left = `calc(${wlTarget}% - 5%)`;
    $('wl-target-zone').style.opacity = 0;
    $('wl-target-hint').style.display = 'flex';
    
    $('wl-slider').value = 50;
    $('wl-slider').disabled = false;
    $('wl-slider-val').textContent = 50;
    
    $('wl-result-area').style.display = 'none';
    $('wl-lock-btn').style.display = 'block';
    $('wl-next-btn').style.display = 'none';
  }
  
  const wlTargetArea = $('wl-target-area');
  wlTargetArea.addEventListener('pointerdown', () => {
    if (!$('wl-slider').disabled) {
      $('wl-target-zone').style.opacity = 1;
      $('wl-target-hint').style.display = 'none';
    }
  });
  const hideWlTarget = () => {
    if (!$('wl-slider').disabled) {
      $('wl-target-zone').style.opacity = 0;
      $('wl-target-hint').style.display = 'flex';
    }
  };
  wlTargetArea.addEventListener('pointerup', hideWlTarget);
  wlTargetArea.addEventListener('pointerleave', hideWlTarget);
  
  $('wl-slider').addEventListener('input', (e) => {
    $('wl-slider-val').textContent = e.target.value;
  });
  
  $('wl-lock-btn').addEventListener('click', () => {
    $('wl-slider').disabled = true;
    $('wl-target-zone').style.opacity = 1;
    $('wl-target-hint').style.display = 'none';
    
    const guess = parseInt($('wl-slider').value);
    const diff = Math.abs(guess - wlTarget);
    
    let resultText = '';
    let sips = 0;
    
    if (diff <= 5) {
      resultText = '🎯 Bullseye!';
      sips = 'Gamemaster assigns 3 sips!';
    } else if (diff <= 15) {
      resultText = '🔥 So close!';
      sips = 'Group takes 1 sip!';
    } else if (diff <= 30) {
      resultText = '😅 Not bad.';
      sips = 'Group takes 2 sips!';
    } else {
      resultText = '🥶 Way off!';
      sips = 'Group takes 4 sips!';
    }
    
    $('wl-result-text').textContent = resultText + ` (Target was ${wlTarget})`;
    $('wl-result-sips').textContent = sips;
    $('wl-result-area').style.display = 'block';
    
    $('wl-lock-btn').style.display = 'none';
    $('wl-next-btn').style.display = 'block';
  });
  
  $('wl-next-btn').addEventListener('click', () => {
    wlGmIdx = (wlGmIdx + 1) % players.length;
    nextWlRound();
  });
  
  $('wl-quit-btn').addEventListener('click', () => {
    $('wl-screen').style.display = 'none';
    modeScreen.style.display = 'flex';
  });
