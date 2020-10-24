<template>
  <div class="news">
    <NavBar />
    <h1>This is a news page</h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import Vue from 'vue'
export default Vue.extend({
  components: {
    NavBar
  }
})
</script>
