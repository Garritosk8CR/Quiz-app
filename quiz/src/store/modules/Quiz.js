/* eslint-disable space-before-function-paren */
// import axios_user from '../../axios-users.js'
// import db from '@/db'

const state = {
   currentQuiz: {
      title: 'Quiz 1',
      questions: [
         {
            text: 'Question 1?',
            answers: [
               { text: 'Answer 1', isCorrect: true },
               { text: 'Answer 2', isCorrect: false },
               { text: 'Answer 3', isCorrect: false },
               { text: 'Answer 4', isCorrect: false}
            ],
            correctAnswer: 0,
            isAnswerSelected: false
         },
         {
            text: 'Question 2?',
            answers: [
               { text: 'Answer 1', isCorrect: false },
               { text: 'Answer 2', isCorrect: true },
               { text: 'Answer 3', isCorrect: false },
               { text: 'Answer 4', isCorrect: false}
            ],
            correctAnswer: 1,
            isAnswerSelected: false
         },
         {
            text: 'Question 3?',
            answers: [
               { text: 'Answer 1', isCorrect: false },
               { text: 'Answer 2', isCorrect: false },
               { text: 'Answer 3', isCorrect: true },
               { text: 'Answer 4', isCorrect: false}
            ],
            correctAnswer: 2,
            isAnswerSelected: false
         },
         {
            text: 'Question 4?',
            answers: [
               { text: 'Answer 1', isCorrect: false },
               { text: 'Answer 2', isCorrect: false },
               { text: 'Answer 3', isCorrect: false },
               { text: 'Answer 4', isCorrect: true}
            ],
            correctAnswer: 3,
            isAnswerSelected: false
         }
      ],
      totalCorrect: 0,
      totalIncorrect: 0,
      currentQuestion: 0,
      step:0,
      selectedAnswers: [],
      currentAnswerSelected: null,
      isQuizOver: false
   },
   quizes: [
      {
         title: '',
         questions: [
            {
               text: 'Question 1?',
               answers: [
                  'Answer 1',
                  'Answer 2',
                  'Answer 3',
                  'Answer 4'
               ],
               correctAnswer: 0
            },
            {
               text: 'Question 2?',
               answers: [
                  'Answer 1',
                  'Answer 2',
                  'Answer 3',
                  'Answer 4'
               ],
               correctAnswer: 1
            },
            {
               text: 'Question 3?',
               answers: [
                  'Answer 1',
                  'Answer 2',
                  'Answer 3',
                  'Answer 4'
               ],
               correctAnswer: 2
            },
            {
               text: 'Question 4?',
               answers: [
                  'Answer 1',
                  'Answer 2',
                  'Answer 3',
                  'Answer 4'
               ],
               correctAnswer: 3
            }
         ],
         totalCorrect: 0,
         totalIncorrect: 0
      }
   ]
}

const getters = {
   currentQuiz(state) {
      return state.currentQuiz
   },
   quizes(state) {
      return state.quizes
   },
   totalCorrect(state) {
      return state.currentQuiz.totalCorrect
   },
   totalIncorrect(state) {
      return state.currentQuiz.totalIncorrect
   },
   isAnswerSelected(state) {
      let currentQuestionIndex = state.currentQuiz.currentQuestion
      let currentQuestion = state.currentQuiz.questions[currentQuestionIndex]
      let isAnswerSelected = currentQuestion.isAnswerSelected

      return isAnswerSelected
   },
   currentQuestion(state) {
      let currentQuestion = state.currentQuiz.currentQuestion
      let questions = state.currentQuiz.questions
      return questions[currentQuestion]
   },
   step(state) {
      return state.currentQuiz.step
   },
   progress(state) {
      let current = state.currentQuiz.step + 1
      let progress = current + '/' + state.currentQuiz.questions.length
      return progress
   },
   currentAnswerSelected(state) {
      return state.currentQuiz.currentAnswerSelected
   },
   result(state) {
      let result = {
         correct: state.totalCorrect,
         incorrect: state.totalIncorrect
      }
      return result
   },
   isQuizOver(state) {
      return state.currentQuiz.isQuizOver
   }
}

const mutations = {
   setCurrentQuiz(state, quiz) {
      state.currentQuiz = state.quizes[quiz]
   },
   storeQuizes(state, quizes) {
      state.quizes = quizes
   },
   setStep(state, step) {
      state.currentQuiz.step = step
   },
   updateCurrentQuestionSelectedAnswer(state, currentQuestionUpdated) {
      let currentQuiz = state.currentQuiz
      let currentQuestion = currentQuiz.currentQuestion
      let updatedCurrentQuiz = {...currentQuiz}
      updatedCurrentQuiz.questions[currentQuestion] = currentQuestionUpdated
      state.currentQuiz = updatedCurrentQuiz
   },
   setCurrentAnswerSelected(state, answerSelected) {
      state.currentQuiz.currentAnswerSelected = answerSelected
   },
   setSelectedAnswer(state, definitiveAnswer) {
      state.currentQuiz.selectedAnswers.push(definitiveAnswer)
   },
   setIsQuizOver(state, isQuizOver) {
      let currentQuiz = state.currentQuiz
      let updatedCurrentQuiz = {...currentQuiz}
      updatedCurrentQuiz.isQuizOver = isQuizOver
      state.currentQuiz = updatedCurrentQuiz
   }
}

const actions = {

   setCurrentQuiz({ commit }, index) {
      commit('setCurrentQuiz', index)
   },
   incrementStep({commit, state}) {
      let nextStep = state.step + 1
      commit('setStep', nextStep)
   },
   decrementStep({commit, state}) {
      let lastStep = state.step - 1
      commit('setStep', lastStep)
   },
   setIsAnswerSelected({commit, state, getters}, answerState) {
      let currentQuestion = {...getters.currentQuestion}
      currentQuestion.isAnswerSelected = answerState
      commit('updateCurrentQuestionSelectedAnswer', currentQuestion)
   },
   updateCurrentAnswerSelected({commit}, answerSelected) {
      commit('setCurrentAnswerSelected', answerSelected)
   },
   removeCurrentAnswerSelected({commit}) {
      commit('setCurrentAnswerSelected', null)
   },
   setDefinitiveAnswer({commit, getters}) {
      commit('setSelectedAnswer', getters.currentAnswerSelected)
   }
}

export default {
   state,
   mutations,
   actions,
   getters
}
