const quizData = [
    {
        question: "What is the main cause of deforestation?",
        options: [
            "Agricultural expansion",
            "Urbanisation",
            "Natural disasters",
            "Industrial development"
        ],
        answer: 0
    },
    {
        question: "Which gas is primarily responsible for global warming?",
        options: [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: 1
    },
    {
        question: "What is the best way to reduce plastic waste?",
        options: [
            "Burn it",
            "Throw it in the ocean",
            "Bury it underground",
            "Recycle and reuse"
        ],
        answer: 3
    },
    {
        question: "What percentage of the Earth's surface is covered by forests?",
        options: [
            "10%",
            "31%",
            "50%",
            "75%"
        ],
        answer: 1
    },
    {
        question: "Which renewable energy source is derived from the Sun?",
        options: [
            "Geothermal",
            "Wind",
            "Solar",
            "Hydropower"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    // Clear the quiz container
    quizContainer.innerHTML = "";

    // Get current question
    const questionData = quizData[currentQuestion];

    // Add question
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);

    // Add options
    const answersList = document.createElement("ul");
    answersList.classList.add("answers");

    questionData.options.forEach((option, index) => {
        const answerItem = document.createElement("li");

        const answerButton = document.createElement("button");
        answerButton.textContent = option;
        answerButton.onclick = () => checkAnswer(index);

        answerItem.appendChild(answerButton);
        answerItem.appendChild(document.createElement("br"));
        answersList.appendChild(answerItem);
    });

    quizContainer.appendChild(answersList);
}

function checkAnswer(selectedIndex) {
    const questionData = quizData[currentQuestion];

    // Check if the selected answer is correct
    if (selectedIndex === questionData.answer) {
        score++;
    }

    // Show the "Next" button
    nextButton.style.display = "block";
}

function showResult() {
    quizContainer.style.display = "none";
    nextButton.style.display = "none";

    resultContainer.style.display = "block";
    resultContainer.textContent = `You answered ${score} out of ${quizData.length} questions correctly.`;
}

nextButton.onclick = () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
};

// Load the first question
loadQuestion();