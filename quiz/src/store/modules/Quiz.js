/* eslint-disable space-before-function-paren */
// import axios_user from '../../axios-users.js'
// import db from '@/db'

const state = {
   currentQuiz: null,
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
         ]
      }
   ]
}

const getters = {
   currentQuiz(state) {
      return state.currentQuiz
   },
   quizes(state) {
      return state.quizes
   }
}

const mutations = {
   setCurrentQuiz(state, quiz) {
      state.currentQuiz = state.quizes[quiz]
   },
   storeQuizes(state, quizes) {
      state.quizes = quizes
   }
}

const actions = {
   // storeQuiz({ commit, state, rootState }, quiz) {
   //    db.collection('Quizes').add(quiz)
   //       .then(res => console.log(res))
   //       .catch(error => console.log(error))
   // },
   // fetchQuiz({ commit, state, rootState }) {
   //    var fireQuizes = []

   //    db.collection('Quizes').get()
   //       .then(querySnapshot => {
   //          querySnapshot.forEach(element => {
   //             fireQuizes.push(element.data())
   //          })
   //          commit('storeCurrentQuiz', fireQuizes.find(quiz => quiz.id === state.currentQuiz))
   //          commit('storeQuizes', fireQuizes)
   //       })
   //       .catch(error => console.log(error))
   // }
   setCurrentQuiz({ commit }, index) {
      commit('setCurrentQuiz', index)
   }
}

export default {
   state,
   mutations,
   actions,
   getters
}
