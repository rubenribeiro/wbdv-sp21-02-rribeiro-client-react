const QUIZZES_URL = 'https://damp-headland-55349.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz,

}

export default api;
