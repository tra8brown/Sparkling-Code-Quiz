    //var timeEl = document.getElementById("timer");
    const startButton = document.getElementById('start-btn')
    const questionContainer = document.getElementById('question-container')

    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')

    let mixedQuestions, currentQuestion


    startButton.addEventListener('click', startGame)

    //START GAME
    function startGame() {
        console.log('Started')
        startButton.setAttribute("class", 'hide')
        mixedQuestions = questions.sort(() => Math.random() - .5)
        currentQuestion = 0
        questionContainer.classList.remove('hide')
        setNextQuestion()
    }

    //NEXT QUESTION
    function setNextQuestion() {
        showQuestion(mixedQuestions[currentQuestion])
    }


    //SHOW QUESTION
    function showQuestion(question) {
        questionElement.innerText = question.question

    }
    //SELECT ANSWER 
    function SelectAnswer() {

    }

    //TIMER
    function timer() {

    }

    //TIMER DEDUCTION
    function timerDeduction() {

    }

    //QUESTIONS
    const questions = [{
        question: 'setAttribute() method',
        answers: [
            { text: 'can be used to add or update any attribute on an HTML element', correct: true },
            { text: 'will get the inner text content of the current element', correct: false },
            { text: 'executes code block only a certain number of times', correct: false },
            { text: 'is an HTML attribute that holds that tasks id', correct: false },
        ],
        question: 'the event.stopPropogation() method does what?',
        answers: [
            { text: 'holds the tasks id', correct: false },
            { text: 'stops bubbling in elements', correct: true },
            { text: 'creates a new task on a form being created', correct: false },
            { text: 'returns the first first element it finds on the page, only if the first button works', correct: false },
        ],
        question: 'what number does the TaskIdCounter start at?',
        answers: [
            { text: '1', correct: false },
            { text: '-1', correct: false },
            { text: '0', correct: true },
            { text: '-0', correct: false },
        ],
        question: 'what does statusChoice[i] do?',
        answers: [
            { text: 'checks for the opposite false value since the default is to check for the true value', correct: false },
            { text: 'erases whats in the submit box after submitting', correct: false },
            { text: 'this method can be used to add or update any attribute on an HTML element', correct: false },
            { text: 'returns the value of the array at the given index', correct: true },
        ],
        question: 'what does formEl.reset do?',
        answers: [
            { text: 'erases whats in the submit box after submitting', correct: true },
            { text: 'adds content before pre existing condition', correct: false },
            { text: 'adds content after pre existing condition', correct: false },
            { text: 'instructs browser to not carry out its default behavior', correct: false },
        ],
        question: 'what is a falsy value?',
        answers: [
            { text: 'returns the value of the array at the given index', correct: false },
            { text: 'a value that is considered false when encountered in a Boolean context', correct: true },
            { text: 'a way to compare if something is true or false', correct: false },
            { text: 'sets or returns attributes and values of selected elements', correct: false },
        ]
    }]