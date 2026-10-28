const wordData = {
    easy: [
        { word: "abroad", meaning: "해외로" },
        { word: "achieve", meaning: "성취하다, 달성하다" },
        { word: "add", meaning: "합치다, 추가하다" },
        { word: "advise", meaning: "의논하다, 충고하다" },
        { word: "affect", meaning: "영향을 미치다" },
        { word: "annual", meaning: "1년에 걸치는, 해마다의" },
        { word: "apply for", meaning: "~에 지원하다" },
        { word: "average", meaning: "평균, 보통" },
        { word: "avoid", meaning: "피하다, 예방하다" },
        { word: "balance", meaning: "균형" },
        { word: "benefit", meaning: "혜택, 이익" },
        { word: "budget", meaning: "예산" }
    ],
    normal: [
        { word: "accommodate", meaning: "수용하다, 맞추다" },
        { word: "acknowledgement", meaning: "승인, 인정" },
        { word: "administration", meaning: "관리, 행정" },
        { word: "adopt", meaning: "채택하다, 입양하다" },
        { word: "ambiguous", meaning: "애매모호한" },
        { word: "appreciate", meaning: "진가를 알아보다" },
        { word: "capacity", meaning: "수용력, 용량" },
        { word: "commitment", meaning: "약속, 전념" },
        { word: "compulsory", meaning: "의무적인, 필수의" },
        { word: "consecutive", meaning: "연속적인" },
        { word: "contribute", meaning: "기부하다, 기여하다" },
        { word: "deterioration", meaning: "악화, 하락" }
    ],
    hard: [
        { word: "subsequently", meaning: "그 후에, 다음에" },
        { word: "irreversible", meaning: "되돌릴 수 없는" },
        { word: "contradictory", meaning: "모순된, 반박의" },
        { word: "formidable", meaning: "무서운, 만만찮은" },
        { word: "meticulous", meaning: "꼼꼼한" },
        { word: "obligation", meaning: "의무, 책임" },
        { word: "prevalent", meaning: "널리 퍼진, 유행하는" },
        { word: "sustainable", meaning: "지속 가능한" },
        { word: "transitive", meaning: "타동사의" },
        { word: "vulnerable", meaning: "취약한, 연약한" },
        { word: "compensate", meaning: "보상하다" },
        { word: "fluctuate", meaning: "변동하다" }
    ]
};

// 결과 화면 매칭 데이터 (사진 파일명을 정확히 입력해주세요)
const resultData = [
    { text: "So sad", img: "짱구 매우 슬픔.png" },    // 0개
    { text: "Sad", img: "짱구 슬픔.png" },           // 1-3개
    { text: "Not bad", img: "짱구 시무룩.png" },     // 4-6개
    { text: "Great", img: "짱구 신남.png" },         // 7-9개
    { text: "Excellent", img: "짱구 존경.png" }      // 10개
];