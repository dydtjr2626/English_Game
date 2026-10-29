// --- 단어 데이터 (테스트용) ---
const allWords = [
    { word: "abroad", meaning: "adv. 해외로" },
    { word: "abrupt", meaning: "adj. 갑작스러운, 뜻밖의" },
    { word: "academic", meaning: "adj. 학업의, 학문적인" },
    { word: "achieve", meaning: "v. 성취하다" },
    { word: "adopt", meaning: "v. 채택하다" },
    { word: "advantage", meaning: "n. 이점" },
    { word: "affect", meaning: "v. 영향을 미치다" },
    { word: "annual", meaning: "adj. 해마다의" },
    { word: "avoid", meaning: "v. 피하다" },
    { word: "balance", meaning: "n. 균형" }
];

const resultData = [
    { text: "So sad", img: "짱구 매우 슬픔.png" },    
    { text: "Sad", img: "짱구 슬픔.png" },       
    { text: "Not bad", img: "짱구 시무룩.png" },   
    { text: "Great", img: "짱구 신남.png" },     
    { text: "Excellent", img: "짱구 존경.png" }  
];

// --- 게임 로직 ---
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0; 
let combo = 0;
let maxCombo = 0;
let timer;
let timeLeft = 10;
const maxTime = 10;
const totalQuestions = 10;

const levelSelection = document.getElementById('levelSelection');
const playArea = document.getElementById('playArea');
const resultArea = document.getElementById('resultArea');
const statusBar = document.getElementById('statusBar');
const progressContainer = document.getElementById('progressContainer');
const progressText = document.getElementById('progressText');
const progressBarFill = document.getElementById('progressBarFill');
const timerDisplay = document.getElementById('timerDisplay');
const timerBarFill = document.getElementById('timerBarFill');
const wordDisplay = document.getElementById('wordDisplay');
const optionsGrid = document.getElementById('optionsGrid');
const comboDisplay = document.getElementById('comboDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const resultMessage = document.getElementById('resultMessage');
const resultSubMessage = document.getElementById('resultSubMessage');
const resultImage = document.getElementById('resultImage');
const finalScore = document.getElementById('finalScore');

function startGame() {
    currentQuestions = [...allWords].sort(() => Math.random() - 0.5).slice(0, totalQuestions);
    
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    combo = 0;
    maxCombo = 0;
    
    levelSelection.style.display = 'none';
    resultArea.style.display = 'none';
    statusBar.style.display = 'flex';
    progressContainer.style.display = 'flex'; 
    playArea.style.display = 'flex';
    
    updateStatus();
    loadQuestion();
}

function resetGame() {
    clearInterval(timer);
    currentQuestions = [];
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    combo = 0;
    maxCombo = 0;
    timeLeft = 10;
    
    resultArea.style.display = 'none';
    playArea.style.display = 'none';
    statusBar.style.display = 'none';
    progressContainer.style.display = 'none'; 
    levelSelection.style.display = 'block';
}

function loadQuestion() {
    if (currentIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const currentNum = currentIndex + 1;
    progressText.textContent = `문제: ${currentNum} / ${totalQuestions}`;
    const progressPercent = (currentNum / totalQuestions) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    const currentQ = currentQuestions[currentIndex];
    wordDisplay.textContent = currentQ.word;
    
    let options = [currentQ.meaning];
    
    while (options.length < 4) {
        let randomObj = allWords[Math.floor(Math.random() * allWords.length)];
        if (!options.includes(randomObj.meaning)) {
            options.push(randomObj.meaning);
        }
    }
    
    options.sort(() => Math.random() - 0.5);

    optionsGrid.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(btn, option, currentQ.meaning);
        optionsGrid.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = maxTime;
    
    timerDisplay.textContent = timeLeft;
    
    timerBarFill.style.transition = 'none';
    timerBarFill.style.width = '100%';
    
    void timerBarFill.offsetWidth; 
    timerBarFill.style.transition = 'width 1s linear';
    
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        const timePercent = (timeLeft / maxTime) * 100;
        timerBarFill.style.width = `${timePercent}%`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function checkAnswer(btn, selected, correctAnswer) {
    clearInterval(timer);
    disableOptions();

    if (selected === correctAnswer) {
        btn.classList.add('correct');
        score += 10;
        correctCount++;
        combo++;
        if (combo > maxCombo) maxCombo = combo;
    } else {
        btn.classList.add('wrong');
        Array.from(optionsGrid.children).forEach(child => {
            if (child.textContent === correctAnswer) {
                child.classList.add('correct');
            }
        });
        combo = 0;
    }

    updateStatus();

    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 1200);
}

function handleTimeout() {
    disableOptions();
    combo = 0;
    updateStatus();

    const correctAnswer = currentQuestions[currentIndex].meaning;
    Array.from(optionsGrid.children).forEach(child => {
        if (child.textContent === correctAnswer) {
            child.classList.add('correct');
        }
    });

    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 1200);
}

function disableOptions() {
    Array.from(optionsGrid.children).forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'default';
    });
}

function updateStatus() {
    scoreDisplay.textContent = score;
    comboDisplay.textContent = combo;
}

function endGame() {
    clearInterval(timer);
    playArea.style.display = 'none';
    statusBar.style.display = 'none';
    progressContainer.style.display = 'none'; 
    resultArea.style.display = 'block';
    
    let selectedResult;
    if (correctCount === 0) {
        selectedResult = resultData[0]; 
    } else if (correctCount >= 1 && correctCount <= 3) {
        selectedResult = resultData[1]; 
    } else if (correctCount >= 4 && correctCount <= 6) {
        selectedResult = resultData[2]; 
    } else if (correctCount >= 7 && correctCount <= 9) {
        selectedResult = resultData[3]; 
    } else {
        selectedResult = resultData[4]; 
    }

    resultMessage.textContent = `게임 종료!`;
    resultSubMessage.textContent = `"${selectedResult.text}"`;
    resultImage.src = selectedResult.img; 
    
    finalScore.innerHTML = `최종 점수: <strong>${score}점</strong> (정답: ${correctCount}/${totalQuestions})<br>최고 콤보: <strong>${maxCombo}</strong>`;
}