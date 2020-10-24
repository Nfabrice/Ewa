<template>
  <div class="shop">
    <NavBar />
    <h1>This is a shoping page</h1>
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
