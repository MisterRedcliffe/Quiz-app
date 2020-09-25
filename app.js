const quizData = [
    {
        question: 'How old is Marquise?',
        a:'26',
        b:'30',
        c:'19',
        d: '45',
        correct:'a'
    },
    {
        question: 'What is Marquise\'s favorite team?',
        a:'Washington Redskins',
        b:'Detroit Lions',
        c:'New Orleans Saints',
        d: 'Dallas Cowboys',
        correct:'d'
    },
    {
        question: 'What jersey Number did Emmett Smith wear?',
        a:'30',
        b:'22',
        c:'45',
        d: '20',
        correct:'b'
    },
    {
        question: 'What position did Terrell Davis played?',
        a:'WR',
        b:'LB',
        c:'RB',
        d: 'TE',
        correct:'c'
    },

]

const answersEl = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('sub');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
}
function getSelected() {
    let answer = undefined;

    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer= answerEl.id;
        }
    });
return answer
}

function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
        });
}

submitBtn.addEventListener('click', () => { 
   
  

    const answer = getSelected();
    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2> <button onclick='location.reload()'>Try Again</button>`;
        }
    }
    
        
        
});