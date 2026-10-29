// --- 단어 데이터 (테스트용) ---
// words.js
const allWords = [
    { word: "abroad", meaning: "adv. 해외로" },
    { word: "abrupt", meaning: "adj. 갑작스러운, 뜻밖의" },
    { word: "academic", meaning: "adj. 학업의, 학문적인, 학구적인" },
    { word: "acceptable", meaning: "adj. 받아들일 수 있는, 인정할 만한" },
    { word: "accommodate", meaning: "v. 수용하다, 맞추다" },
    { word: "accountable", meaning: "adj. 책임 있는, 설명할 수 있는" },
    { word: "achieve", meaning: "v. 성취하다, 달성하다" },
    { word: "acidic", meaning: "adj. 산성의, 신" },
    { word: "acknowledgement", meaning: "n. 승인, 인정" },
    { word: "acoustic", meaning: "adj. 청각의, 음향의, 어쿠스틱" },
    { word: "across", meaning: "adv. 가로질러, 맞은편에 prep. ~을 가로지르는" },
    { word: "adaptable", meaning: "adj. 적응할 수 있는" },
    { word: "add", meaning: "v. 합치다, 추가하다" },
    { word: "addictive", meaning: "adj. 중독성의, 습관성의" },
    { word: "address", meaning: "n. 연설, 주소 v. 연설하다, 주소를 쓰다, 처리하다" },
    { word: "adjustable", meaning: "adj. 조정 가능한" },
    { word: "administer", meaning: "v. 관리하다, 집행하다" },
    { word: "administration", meaning: "n. 관리, 행정, 경영진" },
    { word: "admire", meaning: "v. 존경하다, 감탄하다" },
    { word: "adopt", meaning: "v. 채택하다, 입양하다" },
    { word: "advantage", meaning: "n. 유리, 이점, 장점" },
    { word: "adventurous", meaning: "adj. 모험심이 강한" },
    { word: "adverse", meaning: "adj. 반대의, 부정적인" },
    { word: "advise", meaning: "v. 의논하다, 충고하다, 알리다" },
    { word: "affect", meaning: "v. 영향을 미치다, 충격을 주다" },
    { word: "affectionate", meaning: "adj. 애정 깊은, 상냥한" },
    { word: "affirmative", meaning: "n. 긍정의 말 adj. 긍정하는" },
    { word: "affordable", meaning: "adj. 감당할 수 있는, 알맞은" },
    { word: "aftermath", meaning: "n. 여파, 영향" },
    { word: "afterward", meaning: "adv. 후에, 나중에" },
    { word: "agreeable", meaning: "adj. 기분 좋은, 받아들일 수 있는, 알맞은" },
    { word: "aimless", meaning: "adj. 목적 없는, 방향을 잃은" },
    { word: "alcoholic", meaning: "n. 알코올 중독자 adj. 술의, 알코올성의" },
    { word: "alignment", meaning: "n. 가지런함, 일직선" },
    { word: "allegedly", meaning: "adv. 주장하는 바에 따르면, 전해진 바에 의하면" },
    { word: "allocation", meaning: "n. 할당, 배당액" },
    { word: "allow", meaning: "v. 허락하다, 할 수 있게 해주다" },
    { word: "allowance", meaning: "n. 수당, 용돈, 공제, 허용" },
    { word: "along with", meaning: "~과 함께" },
    { word: "alter", meaning: "v. 변하다, 바꾸다" },
    { word: "alternatively", meaning: "adv. 대신에, 양자택일로" },
    { word: "altruism", meaning: "n. 이타주의, 이타심" },
    { word: "amateur", meaning: "n. 아마추어, 비전문가 adj. 취미로 하는, 아마추어의" },
    { word: "amazing", meaning: "adj. 놀라운, 멋진, 기가 막힌" },
    { word: "ambiguous", meaning: "adj. 애매모호한" },
    { word: "amend", meaning: "v. 고치다, 개정하다" },
    { word: "amplifier", meaning: "n. 확대하는 사람(것), 앰프, 증폭기" },
    { word: "amusement", meaning: "n. 재미, 오락" },
    { word: "ancient", meaning: "n. 고대인 adj. 고대의, 오래된" },
    { word: "angular", meaning: "adj. 모난, 각도의, 뼈가 앙상한" },
    { word: "animated", meaning: "adj. 활기찬, 만화 영화로 된" },
    { word: "anniversary", meaning: "n. 기념일" },
    { word: "annual", meaning: "n. 연보, 졸업 앨범 adj. 1년에 걸치는, 해마다의" },
    { word: "antique", meaning: "n. 골동품 adj. 골동품인" },
    { word: "anxiously", meaning: "adv. 걱정스럽게, 애타게" },
    { word: "apparently", meaning: "adv. 겉으로 보기에, 분명히" },
    { word: "appeal", meaning: "n. 간청, 호소, 매력 v. 호소하다, 인기가 있다" },
    { word: "appear", meaning: "v. 나타나다, ~인 것같이 보이다" },
    { word: "apply for", meaning: "~에 지원하다" },
    { word: "appreciate", meaning: "v. 진가를 알아보다, 고마워하다, (제대로) 인식하다" },
    { word: "approachable", meaning: "adj. 접근 가능한, 말을 붙이기 쉬운" },
    { word: "area", meaning: "n. 지역, 구역, 면적" },
    { word: "argue", meaning: "v. 주장을 하다, 언쟁을 하다, 분명히 보여주다" },
    { word: "arise", meaning: "v. 발생하다, 생기다, 일어나다" },
    { word: "armed", meaning: "adj. 무장한" },
    { word: "article", meaning: "n. 기사, 논문, 물품, 관사" },
    { word: "as such", meaning: "따라서, 그렇게" },
    { word: "as well", meaning: "~도 또한" },
    { word: "assault", meaning: "n. 공격, 폭행 v. 공격하다, 폭행하다" },
    { word: "assertive", meaning: "adj. 적극적인, 확신에 찬" },
    { word: "assignment", meaning: "n. 과제, 임무, 배정" },
    { word: "assistant", meaning: "n. 조수, 보조원 adj. 부-, 조-" },
    { word: "assorted", meaning: "adj. 여러 가지의, 갖가지" },
    { word: "at any rate", meaning: "어쨌든, 적어도, 하여튼" },
    { word: "attach", meaning: "v. 붙이다, 달라붙다" },
    { word: "attend", meaning: "v. 출석하다, 다니다, 돌보다" },
    { word: "attendance", meaning: "n. 출석, 참석자 수, 입장객 수" },
    { word: "attitude", meaning: "n. 태도, 사고방식, 자세" },
    { word: "attorney", meaning: "n. 변호사, 대리인" },
    { word: "attractiveness", meaning: "n. 매력" },
    { word: "audience", meaning: "n. 청중, 관객, 지지자" },
    { word: "august", meaning: "adj. 위엄 있는, 존엄한" },
    { word: "author", meaning: "n. 작가, 저자" },
    { word: "authority", meaning: "n. 당국, 권위, 권한" },
    { word: "autonomy", meaning: "n. 자치권, 자주성" },
    { word: "available", meaning: "adj. 이용 가능한" },
    { word: "average", meaning: "n. 평균, 보통 adj. 평균의" },
    { word: "aviator", meaning: "n. 비행사, 조종사" },
    { word: "avoid", meaning: "v. 피하다, 예방하다" },
    { word: "award", meaning: "n. 상, 상금 v. 수여하다, 주다" },
    { word: "awesome", meaning: "adj. 경탄할 만한, 엄청난, 훌륭한" },
    { word: "bachelor", meaning: "n. 학사, 미혼 남성" },
    { word: "ballot", meaning: "n. 무기명 투표 v. 무기명 투표를 실시하다" },
    { word: "ban", meaning: "n. 금지 v. 금지하다" },
    { word: "barely", meaning: "adv. 간신히, 겨우" },
    { word: "basis", meaning: "n. 기초, 근거, 원리" },
    { word: "bay", meaning: "n. (바다) 만" },
    { word: "beach", meaning: "n. 해변, 바닷가" },
    { word: "bear", meaning: "v. 낳다, 견디다" },
    { word: "bear the brunt of", meaning: "~의 맹공을 정면에서 견디다" },
    { word: "belong", meaning: "v. 속하다, 소속하다" },
    { word: "bend", meaning: "v. 굽히다, 휘다" },
    { word: "beverage", meaning: "n. 음료" },
    { word: "bias", meaning: "n. 편견, 치우침" },
    { word: "bike", meaning: "n. 자전거, 오토바이 v. 자전거(오토바이)를 타다" },
    { word: "billiards", meaning: "n. 당구" },
    { word: "biodiversity", meaning: "n. 생물 다양성" },
    { word: "biofuel", meaning: "n. 바이오 연료" },
    { word: "bitterly", meaning: "adv. 몹시, 심하게" },
    { word: "bizarre", meaning: "adj. 기괴한, 별난" },
    { word: "block", meaning: "n. 덩어리, 블록 v. 차단하다, 방해하다" },
    { word: "blonde (=blond)", meaning: "n. 금발 머리 여자 adj. 금발 머리인" },
    { word: "blow", meaning: "n. 한 줄기 바람, 코 풀기 v. 바람에 날리다, 불다, 폭파하다" },
    { word: "blown away", meaning: "크게 감동받은" },
    { word: "boarding school", meaning: "n. 기숙학교" },
    { word: "boost", meaning: "n. 증대, 격려 v. 돋우다, 밀어올리다, 증가하다" },
    { word: "bother", meaning: "v. 귀찮게 하다, 신경쓰다" },
    { word: "boundary", meaning: "n. 경계(선)" },
    { word: "bountiful", meaning: "adj. 풍부한, 너그러운" },
    { word: "brace", meaning: "n. 버팀대, 보호대 v. 대비를 하다, 떠받치다" },
    { word: "bracket", meaning: "n. 선반, 괄호, 계층 v. 선반을 달다, 괄호로 묶다" },
    { word: "braid", meaning: "n. 땋은 머리 v. (머리, 줄을) 땋다, 꼬다" },
    { word: "branch", meaning: "n. 나뭇가지, 지사, 분과 v. 갈라지다, 나뉘다" },
    { word: "breeze", meaning: "n. 산들바람, 미풍" },
    { word: "brewing", meaning: "n. 양조, 양조주" },
    { word: "bribery", meaning: "n. 뇌물 수수" },
    { word: "brick", meaning: "n. 벽돌" },
    { word: "brief", meaning: "n. 개요, 짧은 기사 v. 간단히 알리다, 요약하다 adj. 잠시의, 간결한" },
    { word: "bright", meaning: "adj. 밝은, 빛나는" },
    { word: "brilliant", meaning: "adj. 훌륭한, 눈부신, 멋진" },
    { word: "broad", meaning: "adj. 폭넓은" },
    { word: "brutal", meaning: "adj. 잔인한, 야만적인, 냉엄한" },
    { word: "budget", meaning: "n. 예산" },
    { word: "bun", meaning: "n. 둥근 빵, 쪽진 둥근 머리" },
    { word: "burning", meaning: "n. 연소 adj. 불타는, 중대한" },
    { word: "business", meaning: "n. 일, 기업, 사업 adj. 직업상의" },
    { word: "by ~ing", meaning: "~함으로써" },
    { word: "cabinet", meaning: "n. 장식장, 캐비닛, 내각 adj. 내각의, 기밀의, 장식장의" },
    { word: "calamity", meaning: "n. 재앙, 재난" },
    { word: "calculate", meaning: "v. 계산하다, 추산하다" },
    { word: "camel", meaning: "n. 낙타" },
    { word: "campaign", meaning: "n. 캠페인, 유세(선거 운동) v. 캠페인을 벌이다" },
    { word: "capacity", meaning: "n. 수용력(양), 용량, 성능 adj. 최대한의, 꽉 찬" },
    { word: "capital", meaning: "n. 수도, 대문자, 자본 adj. 대문자의" },
    { word: "capricious", meaning: "adj. 변덕스러운, 잘 변하는" },
    { word: "capture", meaning: "n. 포획, 점령 v. 붙잡다, 점령하다, 사로잡다" },
    { word: "career", meaning: "n. 직업, 직장생활" },
    { word: "cargo", meaning: "n. 화물, 짐" },
    { word: "carrot", meaning: "n. 당근" },
    { word: "carry", meaning: "n. 운반 v. 나르다, 지니다, 도달하다" },
    { word: "cautiously", meaning: "adv. 조심스럽게" },
    { word: "ceaseless", meaning: "adj. 끊임없는" },
    { word: "celebrate", meaning: "v. 기념하다, 축하하다" },
    { word: "certain", meaning: "n. 몇 개, 몇 사람 adj. 특정한, 확실한, 어떤" },
    { word: "chairman", meaning: "n. 의장, 사회자, 책임자 v. 의(회)장직을 맡다, 사회하다" },
    { word: "challenging", meaning: "adj. 도전적인, 힘든" },
    { word: "chaos", meaning: "n. 혼돈, 무질서" },
    { word: "chaotic", meaning: "adj. 혼돈된, 무질서한" },
    { word: "charm", meaning: "n. 매력, 마법, 장식 v. 매혹하다, 매력이 있다, 마법을 걸다" },
    { word: "chat", meaning: "n. 담소, 수다, 채팅 v. 이야기를 나누다, 수다를 떨다, 채팅하다" },
    { word: "cheery", meaning: "adj. 기분 좋은, 명랑한" },
    { word: "chemical", meaning: "n. 화학 제품 adj. 화학의" },
    { word: "chew", meaning: "n. 씹기 v. 씹다, 심사숙고하다" },
    { word: "childbirth", meaning: "n. 출산, 분만" },
    { word: "chilly", meaning: "adj. 쌀쌀한, 냉담한" },
    { word: "chore", meaning: "n. 가사, 잡일" },
    { word: "choreography", meaning: "n. 안무, 연출" },
    { word: "cigarette", meaning: "n. 담배, 궐련" },
    { word: "circuit", meaning: "n. 순회, 회로 v. 순회하다" },
    { word: "citizenship", meaning: "n. 시민권" },
    { word: "claw", meaning: "n. (동물의) 발톱, 집게발" },
    { word: "clear", meaning: "adj. 분명한, 맑은 v. 제거하다, 맑아 지다" },
    { word: "clichéd", meaning: "adj. 상투적인" },
    { word: "clown", meaning: "n. 어릿광대 v. 광대 짓을 하다" },
    { word: "coast", meaning: "n. 해안" },
    { word: "cognitive", meaning: "adj. 인식의, 인지의" },
    { word: "coherent", meaning: "adj. 일관성 있는, 조화로운, 응집성의" },
    { word: "coincide", meaning: "v. 동시에 일어나다, 일치하다, 만나다" },
    { word: "colleague", meaning: "n. (직장) 동료" },
    { word: "college", meaning: "n. 대학, 전문학교, 단과 대학" },
    { word: "combination", meaning: "n. 조합" },
    { word: "comedian", meaning: "n. 희극 배우, 코미디언" },
    { word: "commitment", meaning: "n. 약속, 전념, 헌신" },
    { word: "communism", meaning: "n. 공산주의" },
    { word: "community", meaning: "n. 공동체, 지역 사회, 집단, 공중" },
    { word: "commute", meaning: "n. 통근, 통학 v. 통근하다" },
    { word: "companion", meaning: "n. 동반자, 동지" },
    { word: "company", meaning: "n. 동료, 일행, 회사" },
    { word: "comparable", meaning: "adj. 비슷한, 비교할 만한" },
    { word: "compassion", meaning: "n. 연민, 동정심" },
    { word: "competent", meaning: "adj. 유능한, 잘 하는, 충분히 자격이 있는" },
    { word: "completely", meaning: "adv. 완전히, 전적으로" },
    { word: "composed of", meaning: "~로 구성된" },
    { word: "comprehension", meaning: "n. 이해력, 포함" },
    { word: "compressed", meaning: "adj. 압축된, 간결한" },
    { word: "compulsory", meaning: "adj. 의무적인, 필수의" },
    { word: "concern", meaning: "n. 우려, 관심 v. ~에 관계가 있다, 중요하다, 걱정시키다" },
    { word: "concrete", meaning: "n. 콘크리트 adj. 구체적인 v. 콘크리트를 바르다" },
    { word: "confuse", meaning: "v. 혼란스럽게 만들다" },
    { word: "confusion", meaning: "n. 혼란, 당황" },
    { word: "connect", meaning: "v. 연결하다, 관련짓다" },
    { word: "consecutive", meaning: "adj. 연속적인, 일관된" },
    { word: "consensus", meaning: "n. 의견 일치, 합의" },
    { word: "considerate", meaning: "adj. 이해심이 있는, 사려 깊은" },
    { word: "consistently", meaning: "adv. 끊임없이, 일관되게" },
    { word: "constant", meaning: "n. 일정불변의 것, 상수 adj. 일정한, 지속적인" },
    { word: "constituency", meaning: "n. 선거구, 선거구민, 지지층" },
    { word: "constitutional", meaning: "adj. 헌법의, 구조상의" },
    { word: "constraint", meaning: "n. 강제, 압박, 제한, 어색함" },
    { word: "consumption", meaning: "n. 섭취, 소비, 소모" },
    { word: "contender", meaning: "n. 도전자, 경쟁자" },
    { word: "contentedly", meaning: "adv. 만족스럽게" },
    { word: "continually", meaning: "adv. 계속해서, 끊임없이" },
    { word: "contraceptive", meaning: "n. 피임약, 피임기구 adj. 피임의" },
    { word: "contradictive", meaning: "adj. 모순되는, 모순이 있는" },
    { word: "contradictory", meaning: "adj. 모순된, 반박의" },
    { word: "contribute", meaning: "v. 기부하다, 기여하다" },
    { word: "controversial", meaning: "adj. 논란이 있는, 논쟁을 좋아하는" },
    { word: "conversation", meaning: "n. 대화, 회화" },
    { word: "coordinate", meaning: "n. 동등한 사람, 좌표 adj. 동등한 v. 조정하다" },
    { word: "core", meaning: "n. 핵심, 중심핵 v. 중심부에서 잘라내다 adj. 핵심의" },
    { word: "corporation", meaning: "n. 법인, 단체, 기업" },
    { word: "corrosive", meaning: "adj. 부식성의, 좀먹는" },
    { word: "cosmology", meaning: "n. 우주론" },
    { word: "costly", meaning: "adj. 돈이 많이 드는, 손실이 큰, 낭비하는" },
    { word: "county", meaning: "n. 자치주" },
    { word: "courageous", meaning: "adj. 용감한" },
    { word: "coursework", meaning: "n. 수업 활동" },
    { word: "cover", meaning: "n. 덮개, 표지 v. 덮다, 미치다, 포함하다" },
    { word: "crackdown", meaning: "n. 단속, 탄압" },
    { word: "crafty", meaning: "adj. 교활한, 술책이 뛰어난" },
    { word: "crane", meaning: "n. 기중기, 학, 두루미" },
    { word: "create", meaning: "v. 창조하다, 만들다" },
    { word: "creature", meaning: "n. 창조물, 생명체" },
    { word: "credibility", meaning: "n. 신뢰성, 신용" },
    { word: "crisis", meaning: "n. 위기, 중대한 기로, 고비" },
    { word: "critical", meaning: "adj. 중요한, 비판적인" },
    { word: "criticism", meaning: "n. 비평, 비판, 혹평" },
    { word: "cross over", meaning: "건너가다, 지나가다" },
    { word: "crowded", meaning: "adj. 기쁜"}
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