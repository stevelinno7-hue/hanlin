// assets/js/exam.js

// 讀取全域資料 (由 mockdata 注入)
const examData = window.ExamData;

if (!examData) {
    alert("系統錯誤：無法讀取試題資料！");
    throw new Error("No Exam Data");
}

const mockQuestions = examData.questions;
const examInfo = examData.info;

// 狀態變數
let currentQuestionIndex = 0;
let userAnswers = new Array(mockQuestions.length).fill(null);
let timeLeft = examInfo.timeLimit;
let timerInterval;

// DOM 元素
const els = {
    title: document.getElementById('examTitle'),
    qText: document.getElementById('questionText'),
    opts: document.getElementById('optionsContainer'),
    currNum: document.getElementById('currentQNum'),
    totalNum: document.getElementById('totalQNum'),
    progress: document.getElementById('progressBar'),
    prev: document.getElementById('prevBtn'),
    next: document.getElementById('nextBtn'),
    timer: document.getElementById('timer'),
    submit: document.getElementById('submitBtnTop')
};

function initExam() {
    if(els.title) els.title.textContent = examInfo.title;
    els.totalNum.textContent = mockQuestions.length;
    renderQuestion();
    startTimer();
    updateNav();
}

function renderQuestion() {
    const q = mockQuestions[currentQuestionIndex];
    els.currNum.textContent = currentQuestionIndex + 1;
    els.qText.textContent = q.question;
    
    // 進度條
    const pct = ((currentQuestionIndex + 1) / mockQuestions.length) * 100;
    els.progress.style.width = `${pct}%`;

    // 選項
    els.opts.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        const isSelected = userAnswers[currentQuestionIndex] === idx;
        btn.className = `w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition flex items-center group ${isSelected ? 'option-selected' : ''}`;
        
        btn.innerHTML = `
            <span class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 font-bold mr-4 border border-transparent">
                ${String.fromCharCode(65 + idx)}
            </span>
            <span class="text-lg">${opt}</span>
        `;
        btn.onclick = () => {
            userAnswers[currentQuestionIndex] = idx;
            renderQuestion();
        };
        els.opts.appendChild(btn);
    });

    updateNav();
}

function updateNav() {
    els.prev.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === mockQuestions.length - 1) {
        els.next.textContent = '交卷計算';
        els.next.classList.replace('bg-blue-600', 'bg-green-600');
        els.next.onclick = finishExam;
    } else {
        els.next.textContent = '下一題';
        els.next.classList.replace('bg-green-600', 'bg-blue-600');
        els.next.onclick = () => {
            currentQuestionIndex++;
            renderQuestion();
        };
    }
}

// 綁定上一題
els.prev.onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
};
els.submit.onclick = finishExam;

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        els.timer.textContent = `${m}:${s}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("時間到！自動交卷。");
            finishExam();
        }
    }, 1000);
}

function finishExam() {
    clearInterval(timerInterval);
    
    // 計算成績
    let correctCount = 0;
    let wrongList = [];
    
    mockQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
            correctCount++;
        } else {
            wrongList.push({ ...q, yourAns: userAnswers[idx] });
        }
    });

    const score = Math.round((correctCount / mockQuestions.length) * 100);

    // 儲存結果到 localStorage 以便傳給 analysis.html
    const resultData = {
        score: score,
        correctCount: correctCount,
        totalCount: mockQuestions.length,
        wrongList: wrongList,
        subject: examInfo.subject
    };
    localStorage.setItem('examResult', JSON.stringify(resultData));

    if(confirm(`作答結束！\n得分：${score}\n是否查看診斷分析？`)) {
        window.location.href = "analysis.html"; // 跳轉到新頁面
    } else {
        window.location.href = "dashboard.html";
    }
}

// 啟動
initExam();