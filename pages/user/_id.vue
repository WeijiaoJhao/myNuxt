<template>
  <div>
    <h1>user id {{ $route.params.id | format }}</h1>
    <nuxt-link to="/">home</nuxt-link>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button type="button" @click="eventFun">event</button>
    <p>{{ info }}</p>
    <p>asyncData {{ watchVal }}</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // return /^\d+$/.test(params.id)
    return true
  },
  filters: {
    format(val) {
      return val.toUpperCase()
    }
  },
  data() {
    return {
      items: ['aa', 'bb'],
      watchVal: 0
    }
  },
  asyncData(context) {
    //在服务端或路由更新之前被调用...fetch、head功效?
    return { watchVal: 5 }
  },
  computed: {
    info() {
      return 'computed value'
    }
  },
  watch: {
    watchVal(val, oldVal) {
      console.log('watch', val, oldVal)
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.$route.params.id)
  },
  created() {
    console.log('created', this.$route.params.id)
  },
  methods: {
    eventFun() {
      console.log('eventFun', this.watchVal)
      this.watchVal++
    }
  }
}
</script>
