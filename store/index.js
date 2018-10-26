import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      tryy: 'try store',
      authUser: null
    },
    mutations: {
      SET_USER: function(state, payload) {
        console.log('mutations', payload)
        state.authUser = payload
      }
    },
    actions: {
      // nuxtServerInit is called by Nuxt.js before server-rendering every page
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser)
        }
      },
      async LOGIN_API({ commit }, params) {
        console.log('actions', params)
        try {
          const { data } = await axios.post('/api/login', params)
          data && commit('SET_USER', data.username)
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.log('error-2')
            throw new Error('Bad credentials')
          }
          console.log('error-3')
          throw error
        }
      },
      async LOGOUT_API({ commit }) {
        await axios.post('/api/logout')
        commit('SET_USER', null)
      }
    }
  })

export default store
