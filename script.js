    //var timeEl = document.getElementById("timer");
    const startButton = document.getElementById('start-btn')
    const questionContainerElement = document.getElementById('question-container')

    //const questionElement = document.getElementById('question') 
    //const answerButtonsElement = document.getElementbyId('answer-buttons') 

    //let shuffledQuestions, currentQuestionIndex 

    startButton.addEventListener('click', startGame)

    //start game 
    function startGame() {
        console.log('Started')
        startButton.setAttribute("class", 'hide')
            //shuffledQuestions = questions.sort(() => Math.random() - .5)
            //currentQuestionsIndex = 0
        questionContainerElement.classList.remove('hide')
            //setNextQuestion()
    }

    //next question 
    function setNextQuestion() {
        //resetState()
        //showQuestion(shuffledQuestions[currentQuestionIndex])
    }


    //select answer 
    function SelectAnswer() {

    }

    //timer 
    function timer() {

    }

    //timer deduction 
    function timerDeduction() {

    }
    //questions
    // const questions = [{
    //             question: 'question1?',
    //             answers: [
    //                 { text: 'answer1', correct: true },
    //                 { text: 'answer2', correct: false },
    //                 { text: 'answer3', correct: false },
    //                 { text: 'answer4', correct: false },
    //             ]
    //         }

    //         [{
    //                 question: 'question2',
    //                 answers: [
    //                     { text: 'answer1', correct: true },
    //                     { text: 'answer2', correct: false },
    //                     { text: 'answer3', correct: false },
    //                     { text: 'answer4', correct: false },
    //                 ]
    //             }[{
    //                     question: 'question3?',
    //                     answers: [
    //                         { text: 'answer1', correct: true },
    //                         { text: 'answer2', correct: false },
    //                         { text: 'answer3', correct: false },
    //                         { text: 'answer4', correct: false },
    //                     ]
    //                 }[{
    //                         question: 'question4?',
    //                         answers: [
    //                             { text: 'answer1', correct: true },
    //                             { text: 'answer2', correct: false },
    //                             { text: 'answer3', correct: false },
    //                             { text: 'answer4', correct: false },
    //                         ]
    //                     }[{
    //                         question: 'question5?',
    //                         answers: [
    //                             { text: 'answer1', correct: true },
    //                             { text: 'answer2', correct: false },
    //                             { text: 'answer3', correct: false },
    //                             { text: 'answer4', correct: false },
    //                         ]
    //                     }]