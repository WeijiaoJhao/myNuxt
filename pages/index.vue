<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        myNuxt - {{ tryy }}
      </h1>
      <h2 class="subtitle">
        My dazzling Nuxt.js project
      </h2>
      <form v-if="!$store.state.authUser">
        <input v-model="data.username" type="text" placeholder="user name" />
        <input v-model="data.password" type="password" placeholder="password" />
        <button type="button" @click="login">login</button>
      </form>
      <div v-else>
        Hi {{ authUser }}
        <button type="button" @click="logout">logout</button>
      </div>
      <nuxt-link to="/user">go user page</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['tryy', 'authUser'])
  },
  methods: {
    ...mapActions(['LOGIN_API', 'LOGOUT_API']),
    login() {
      this.LOGIN_API({ ...this.data })
      this.data = {}
    },
    logout() {
      this.LOGOUT_API()
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
