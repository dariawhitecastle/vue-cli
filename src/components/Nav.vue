<template>
  <ul class="mainNav">
    <li><router-link to="/">Main</router-link></li>
    <li> / <li>
    <li><router-link to="/projects">Projects</router-link></li>
    <li> / <li>
    <li><router-link to="/links">Links </router-link></li>
    <li> / <li>
    <li><router-link to="/contact">Collaborate </router-link></li>
  </ul>
</template>

<style lang='scss' scoped>
@import url("../assets/css/fonts.scss");

$beau: "Beau", sans-serif;

.mainNav {
  font-family: $beau;
  letter-spacing: 3px;
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
}
</style>
