<template>
  <ul class="mainNav">
    <li><router-link to="/">Main</router-link></li>
    <li>/</li>
    <li></li>
    <li><router-link to="/projects">Projects</router-link></li>
    <li>/</li>
    <li></li>
    <li><router-link to="/contact">Collaborate </router-link></li>
  </ul>
</template>

<style lang='scss' scoped>
@import url("../assets/css/fonts.scss");

$theater: "Theater", sans-serif;

.mainNav {
  margin-top: 5px;
  font-family: $theater;
  letter-spacing: 5px;
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center;
}
li,
a {
  font-size: 20px;
  margin: 5px 10px;
  transition: color 0.3s ease;
  text-decoration: none;
  color: #1c1d22;
  &.router-link-exact-active {
    color: #741166;
    padding-bottom: 4px;
    border-bottom: 2px solid #741166;
  }
}

a:hover {
  color: #cd60be;
  transition: 200ms;
}
</style>
