<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/contact">Contact</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  background-color: #040f0f;
  a {
    color: white;
    text-decoration: none;
    padding: 15px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
