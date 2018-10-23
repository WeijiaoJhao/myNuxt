<template>
  <div>
    <h1>error - {{ error }}</h1>
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>
