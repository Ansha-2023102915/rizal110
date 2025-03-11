// Timeline Data
const timelineData = [
    { date: "1861", content: "Born in Calamba, Laguna" },
    { date: "1882", content: "Left for Spain to pursue higher education" },
    // Add more timeline items
];

// Quiz Questions
const quizQuestions = [
    {
        question: "Rizal's most famous novel?",
        options: ["Noli Me Tangere", "El Filibusterismo", "Both"],
        answer: 2
    },
    // Add more questions
];

// Initialize Timeline
function initTimeline() {
    const container = document.querySelector('.timeline');
    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        div.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5>${item.date}</h5>
                    <p>${item.content}</p>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// Initialize Quiz
function initQuiz() {
    const container = document.getElementById('quiz-container');
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'mb-4';
        questionDiv.innerHTML = `
            <h5>${index + 1}. ${q.question}</h5>
            ${q.options.map((opt, i) => `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="q${index}" id="q${index}-${i}">
                    <label class="form-check-label" for="q${index}-${i}">${opt}</label>
                </div>
            `).join('')}
        `;
        container.appendChild(questionDiv);
    });
}

// Initialize on load
window.onload = () => {
    initTimeline();
    initQuiz();
};
