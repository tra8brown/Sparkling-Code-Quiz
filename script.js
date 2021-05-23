    var timeEl = document.getElementById("timer");
    const startButton = document.getElementById('start-btn')
    const questionContainer = document.getElementById('question-container')
    const beginningLayout = document.getElementById('beginning-layout')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')

    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const btn4 = document.getElementById('btn4')

    btn1.addEventListener('click', checkAnswer1)
    btn2.addEventListener('click', checkAnswer2)
    btn3.addEventListener('click', checkAnswer3)
    btn4.addEventListener('click', checkAnswer4)

    let mixedQuestions, questionIndex, currentQuestion, currentCorrectAnswer, count

    startButton.addEventListener('click', startGame)

    //START GAME
    function startGame() {
        console.log('Started')
        startButton.setAttribute("class", 'hide')
        beginningLayout.classList.add('hide')
        mixedQuestions = questions.sort(() => Math.random() - .5)
        questionContainer.classList.remove('hide')
        questionIndex = 0
        timer();
        setNextQuestion()
    }

    //NEXT QUESTION
    function setNextQuestion() {
        showQuestion(questions[questionIndex])
    }

    //SHOW QUESTION
    function showQuestion(question) {
        currentQuestion = question
        btn1.innerText = question.answers[0].text
        btn2.innerText = question.answers[1].text
        btn3.innerText = question.answers[2].text
        btn4.innerText = question.answers[3].text
        questionElement.innerText = question.question
    }

    //SELECT ANSWER 
    function checkAnswer1() {
        checkAnswer(btn1.innerText)
    }

    function checkAnswer2() {
        checkAnswer(btn2.innerText)
    }

    function checkAnswer3() {
        checkAnswer(btn3.innerText)
    }

    function checkAnswer4() {
        checkAnswer(btn4.innerText)
    }

    function getCorrectAnswer() {
        let currentElement
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            currentElement = currentQuestion.answers[i]
            if (currentElement.correct == true) {
                return currentElement.text;
            }
        }
    }

    function checkAnswer(answer) {
        var correctAnswer = getCorrectAnswer();
        if (answer == correctAnswer) {
            console.log("answer correct");
            questionIndex++
            setNextQuestion();
        } else {
            console.log("answer incorrect");
            count = count - 10;
        }
    }

    //TIMER
    function timer() {
        count = 75;
        var interval = setInterval(function() {
            document.getElementById('count').innerHTML = count;
            count--;
            if (count <= 0) {
                clearInterval(interval);
                document.getElementById('count').innerHTML = 'Done';
            }
        }, 1000);
        console.log(count);
    }

    //TIMER DEDUCTION
    function timerDeduction() {

    }

    //END OF QUIZ
    //function showQuizResults

    //SCORES
    //function scoreKeeper() 


    //END OF GAME HIGH SCORE
    //function highScores() {




    //QUESTIONS
    const questions = [{
            question: 'what does a setAttribute() method used for?',
            answers: [
                { text: 'can be used to add or update any attribute on an HTML element', correct: true },
                { text: 'will get the inner text content of the current element', correct: false },
                { text: 'executes code block only a certain number of times', correct: false },
                { text: 'is an HTML attribute that holds that tasks id', correct: false },
            ]
        },
        {
            question: 'the event.stopPropogation() method does what?',
            answers: [
                { text: 'holds the tasks id', correct: false },
                { text: 'stops bubbling in elements', correct: true },
                { text: 'creates a new task on a form being created', correct: false },
                { text: 'returns the first first element it finds on the page, only if the first button works', correct: false },
            ]
        },
        {
            question: 'what number does the TaskIdCounter start at?',
            answers: [
                { text: '1', correct: false },
                { text: '-1', correct: false },
                { text: '0', correct: true },
                { text: '-0', correct: false },
            ]
        },
        {
            question: 'what does statusChoice[i] do?',
            answers: [
                { text: 'checks for the opposite false value since the default is to check for the true value', correct: false },
                { text: 'erases whats in the submit box after submitting', correct: false },
                { text: 'this method can be used to add or update any attribute on an HTML element', correct: false },
                { text: 'returns the value of the array at the given index', correct: true },
            ]
        },
        {
            question: 'what does formEl.reset do?',
            answers: [
                { text: 'erases whats in the submit box after submitting', correct: true },
                { text: 'adds content before pre existing condition', correct: false },
                { text: 'adds content after pre existing condition', correct: false },
                { text: 'instructs browser to not carry out its default behavior', correct: false },
            ]
        },
        {
            question: 'what is a falsy value?',
            answers: [
                { text: 'returns the value of the array at the given index', correct: false },
                { text: 'a value that is considered false when encountered in a Boolean context', correct: true },
                { text: 'a way to compare if something is true or false', correct: false },
                { text: 'sets or returns attributes and values of selected elements', correct: false },
            ]
        }
    ]