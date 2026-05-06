// ── DOM ELEMENTS ──
const $ = id => document.getElementById(id);
const quizScreen = $('quiz-screen');
const hubScreen = $('hub-screen');
const endScreen = $('end-screen');
const modeSelectionScreen = $('mode-selection-screen');
const btnClose = $('btn-close');
const progressBar = $('progress-bar');
const heartsDisplay = $('hearts-display');
const qContainer = $('question-container');
const actionBar = $('action-bar');
const btnCheck = $('btn-check');
const feedbackMsg = $('feedback-msg');
const feedbackTitle = $('feedback-title');
const feedbackDesc = $('feedback-desc');

// ── STATE ──
let lives = 5;
let currentQIdx = 0;
let totalQ = 5; // questions per session
let sessionDeck = [];
let isBoss = false;
let bossData = null;
let bossStage = 0;
let selectedAnswer = null; // stores user's current selection
let currentQuestionData = null;

// Audio context for haptics/sounds (if needed)
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

let currentMode = 'All';

// ── INITIALIZATION ──
function startMode(mode) {
  currentMode = mode;
  modeSelectionScreen.classList.add('hidden');
  initSession();
}

function initSession() {
  lives = 5;
  currentQIdx = 0;
  isBoss = false;
  
  // Filter questions by mode
  let filteredQuestions = PHYSIO_QUESTIONS;
  if (currentMode !== 'All') {
    filteredQuestions = PHYSIO_QUESTIONS.filter(q => q.topic === currentMode);
  }

  // Shuffle questions
  sessionDeck = [...filteredQuestions].sort(() => Math.random() - 0.5);
  // Pick totalQ questions
  sessionDeck = sessionDeck.slice(0, totalQ);
  
  // Every 5th level (simulated here if totalQ is reached, let's just make the 5th question a boss for demo)
  // Actually, let's just insert a boss at the end if we want
  if (currentMode === 'All' || currentMode === 'Case Study: The Runner') {
     sessionDeck.push(BOSS_LEVELS[0]); // Hardcode a boss at the end of the session for demonstration
  }

  totalQ = sessionDeck.length;

  quizScreen.classList.remove('hidden');
  hubScreen.classList.add('hidden');
  endScreen.classList.add('hidden');

  updateUI();
  loadNextQuestion();
}

function updateUI() {
  heartsDisplay.innerHTML = `❤️ ${lives}`;
  const pct = (currentQIdx / totalQ) * 100;
  progressBar.style.width = `${pct}%`;
}

function loadNextQuestion() {
  resetActionBar();
  selectedAnswer = null;

  if (currentQIdx >= totalQ || lives <= 0) {
    finishSession();
    return;
  }

  currentQuestionData = sessionDeck[currentQIdx];
  qContainer.innerHTML = ''; // clear

  if (currentQuestionData.type === 'boss') {
    isBoss = true;
    bossData = currentQuestionData;
    bossStage = 0;
    renderBossStage();
    return;
  }

  isBoss = false;
  const title = document.createElement('h2');
  title.className = 'question-title';
  title.innerHTML = `<span style="color:var(--text-dim);font-size:0.9rem;text-transform:uppercase;display:block;margin-bottom:0.5rem;">${currentQuestionData.topic}</span>${currentQuestionData.question}`;
  qContainer.appendChild(title);

  if (currentQuestionData.type === 'mcq') renderMCQ(currentQuestionData);
  else if (currentQuestionData.type === 'sequence') renderSequence(currentQuestionData);
  else if (currentQuestionData.type === 'palpation') renderPalpation(currentQuestionData);
  else if (currentQuestionData.type === 'identify') renderIdentify(currentQuestionData);
}

// ── RENDERERS ──

function renderMCQ(q) {
  const grid = document.createElement('div');
  grid.className = 'options-grid';
  
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<div class="option-num">${idx + 1}</div> ${opt}`;
    btn.onclick = () => {
      // Deselect all
      Array.from(grid.children).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAnswer = idx;
      btnCheck.disabled = false;
    };
    grid.appendChild(btn);
  });
  
  qContainer.appendChild(grid);
}

function renderSequence(q) {
  const container = document.createElement('div');
  container.className = 'sequence-container';
  container.id = 'sequence-container';
  
  // Shuffle items for the user to sort
  let items = [...q.items].sort(() => Math.random() - 0.5);
  
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'sequence-item';
    div.draggable = true;
    div.dataset.id = item.id;
    div.innerHTML = `<span class="drag-handle">☰</span> ${item.text}`;
    
    // Basic Drag & Drop (HTML5)
    div.addEventListener('dragstart', e => {
      div.classList.add('dragging');
    });
    div.addEventListener('dragend', e => {
      div.classList.remove('dragging');
      checkSequenceComplete();
    });
    
    container.appendChild(div);
  });

  container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const dragging = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(dragging);
    } else {
      container.insertBefore(dragging, afterElement);
    }
  });

  qContainer.appendChild(container);
  selectedAnswer = []; // will be evaluated on check
  // For sequence, allow checking immediately or wait till moved? Let's just enable it.
  btnCheck.disabled = false; 
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.sequence-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function checkSequenceComplete() {
  const container = $('sequence-container');
  if(!container) return;
  const currentOrder = [...container.children].map(c => c.dataset.id);
  selectedAnswer = currentOrder;
}


function renderPalpation(q) {
  const area = document.createElement('div');
  area.className = 'palpation-area';
  
  const hint = document.createElement('div');
  hint.className = 'palpation-hint';
  hint.textContent = "Rub area to palpate...";
  area.appendChild(hint);

  const target = document.createElement('div');
  target.className = 'palpation-target';
  target.style.left = `${q.target.x}%`;
  target.style.top = `${q.target.y}%`;
  
  // We use padding on target to make it bigger? No, it's defined by CSS.
  area.appendChild(target);

  let found = false;

  const handleMove = (e) => {
    if(found) return;
    e.preventDefault();
    const rect = area.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Check distance
    const dist = Math.sqrt(Math.pow(x - q.target.x, 2) + Math.pow(y - q.target.y, 2));
    if (dist < q.target.radius) {
      // Vibrate
      if (navigator.vibrate) navigator.vibrate(50);
      hint.textContent = "You feel a knot here. Tap to select!";
    } else {
      hint.textContent = "Keep feeling around...";
    }
  };

  area.addEventListener('mousemove', handleMove);
  area.addEventListener('touchmove', handleMove);

  area.addEventListener('click', (e) => {
    if(found) return;
    const rect = area.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const dist = Math.sqrt(Math.pow(x - q.target.x, 2) + Math.pow(y - q.target.y, 2));
    if (dist < q.target.radius) {
      found = true;
      target.classList.add('found');
      selectedAnswer = true;
      btnCheck.disabled = false;
      hint.textContent = "Target locked!";
    } else {
      // Clicked wrong spot
      target.style.left = `${x}%`;
      target.style.top = `${y}%`;
      target.classList.add('found'); // Show where they clicked briefly
      setTimeout(() => target.classList.remove('found'), 500);
      selectedAnswer = false;
      btnCheck.disabled = false;
    }
  });

  qContainer.appendChild(area);
}


function renderIdentify(q) {
  const container = document.createElement('div');
  container.className = 'identify-container';
  
  const img = document.createElement('img');
  img.src = q.imgUrl;
  img.className = 'identify-img';
  img.draggable = false;
  
  const hotspot = document.createElement('div');
  hotspot.className = 'hotspot';
  hotspot.style.display = 'none'; // hidden until they tap
  
  container.appendChild(img);
  container.appendChild(hotspot);
  
  container.addEventListener('click', (e) => {
    const rect = img.getBoundingClientRect();
    // Only register if clicking inside the image bounds
    if(e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    hotspot.style.left = `${x}%`;
    hotspot.style.top = `${y}%`;
    hotspot.style.display = 'block';

    const dist = Math.sqrt(Math.pow(x - q.target.x, 2) + Math.pow(y - q.target.y, 2));
    selectedAnswer = dist < q.target.radius;
    btnCheck.disabled = false;
  });

  qContainer.appendChild(container);
}


function renderBossStage() {
  resetActionBar();
  selectedAnswer = null;
  qContainer.innerHTML = '';
  
  const stageData = bossData.stages[bossStage];

  const header = document.createElement('div');
  header.className = 'boss-header';
  header.innerHTML = `⚠️ BOSS LEVEL: ${bossData.topic} (Stage ${bossStage+1}/${bossData.stages.length})`;
  qContainer.appendChild(header);

  const quote = document.createElement('div');
  quote.className = 'patient-quote';
  quote.textContent = `"${bossData.patientQuote}"`;
  qContainer.appendChild(quote);

  const qText = document.createElement('h2');
  qText.className = 'question-title';
  qText.textContent = stageData.question;
  qContainer.appendChild(qText);

  const grid = document.createElement('div');
  grid.className = 'options-grid';
  
  stageData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<div class="option-num">${idx + 1}</div> ${opt}`;
    btn.onclick = () => {
      Array.from(grid.children).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAnswer = idx;
      btnCheck.disabled = false;
    };
    grid.appendChild(btn);
  });
  
  qContainer.appendChild(grid);
}

// ── ACTION LOGIC ──

btnCheck.onclick = () => {
  if (btnCheck.textContent === 'Continue') {
    if (isBoss) {
      bossStage++;
      if (bossStage >= bossData.stages.length) {
        currentQIdx++;
        updateUI();
        loadNextQuestion();
      } else {
        renderBossStage();
      }
    } else {
      currentQIdx++;
      updateUI();
      loadNextQuestion();
    }
    return;
  }

  // Check logic
  let isCorrect = false;
  let explanation = currentQuestionData.explanation;

  if (isBoss) {
    const stageData = bossData.stages[bossStage];
    isCorrect = selectedAnswer === stageData.correctIdx;
    explanation = stageData.explanation;
    // Visually mark buttons
    const btns = qContainer.querySelectorAll('.option-btn');
    if(selectedAnswer !== null) btns[selectedAnswer].classList.add(isCorrect ? 'correct' : 'incorrect');
    btns[stageData.correctIdx].classList.add('correct');
  } 
  else if (currentQuestionData.type === 'mcq') {
    isCorrect = selectedAnswer === currentQuestionData.correctIdx;
    const btns = qContainer.querySelectorAll('.option-btn');
    btns[selectedAnswer].classList.add(isCorrect ? 'correct' : 'incorrect');
    btns[currentQuestionData.correctIdx].classList.add('correct');
  }
  else if (currentQuestionData.type === 'sequence') {
    // Correct order is simply 1, 2, 3, 4 based on original item IDs
    const correctOrder = currentQuestionData.items.map(i => i.id);
    checkSequenceComplete(); // ensure selectedAnswer is up to date
    isCorrect = JSON.stringify(selectedAnswer) === JSON.stringify(correctOrder);
    
    // Visually mark
    const container = $('sequence-container');
    if (isCorrect) container.style.borderColor = 'var(--green)';
    else container.style.borderColor = 'var(--red)';
  }
  else if (currentQuestionData.type === 'palpation') {
    isCorrect = selectedAnswer === true;
  }
  else if (currentQuestionData.type === 'identify') {
    isCorrect = selectedAnswer === true;
  }

  // Handle result
  if (isCorrect) {
    // Play success sound logic here if available
    actionBar.className = 'action-bar correct-state';
    feedbackTitle.textContent = "Awesome!";
  } else {
    // Play fail sound logic
    actionBar.className = 'action-bar incorrect-state';
    feedbackTitle.textContent = "Not quite.";
    lives--;
    updateUI();
  }

  feedbackDesc.textContent = explanation;
  btnCheck.textContent = 'Continue';
  btnCheck.style.minWidth = '200px';
};

function resetActionBar() {
  actionBar.className = 'action-bar';
  btnCheck.textContent = 'Check';
  btnCheck.disabled = true;
  btnCheck.style.minWidth = '150px';
}

function finishSession() {
  quizScreen.classList.add('hidden');
  if (lives > 0) {
    endScreen.classList.remove('hidden');
    endScreen.querySelector('h1').textContent = "Session Complete!";
    endScreen.querySelector('h1').style.color = "var(--green)";
    endScreen.querySelector('p').textContent = "You're one step closer to becoming a master clinician.";
  } else {
    endScreen.classList.remove('hidden');
    endScreen.querySelector('h1').textContent = "Out of Hearts!";
    endScreen.querySelector('h1').style.color = "var(--red)";
    endScreen.querySelector('p').textContent = "Review your anatomy and try again tomorrow.";
  }
}

// ── NAVIGATION ──
btnClose.onclick = () => window.location.href = 'canasta.html';

$('btn-restart').onclick = () => {
  endScreen.classList.add('hidden');
  initSession();
};

$('btn-hub').onclick = () => {
  endScreen.classList.add('hidden');
  hubScreen.classList.remove('hidden');
};

// Application starts on the Mode Selection Screen. No need to call initSession() immediately.
