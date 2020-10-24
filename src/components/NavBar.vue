<template>
  <div class="navbar">
    <div class="container">
        <div class="brand">
          <ul>
            <li>
              <a href="">YouTube</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">EWA.</a>
            </li>
            <li>
              <a href="">User</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  background-color: #040f0f;
}
.brand{
  padding-top: 10px;
  h1{
    color: white;
  }
  ul{
    li{
      a{
        color: white;
        &:hover{
        color: #42b983;
      }
      }
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
