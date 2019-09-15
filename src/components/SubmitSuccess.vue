<template>
  <div>
    <h1>You're Awesome! Thank you for your submission!</h1>
    <router-link to="/">
      <button class="submit__success">Back to main page</button>
    </router-link>
  </div>
</template>

<script>
 import { Vue } from 'vue-property-decorator';
import axios from 'axios'
export default class SubmitSuccess extends Vue {}
</script>

<style>
.submit__success {
  text-transform: uppercase;
  font-size: 1em;
  height: 4em;
  border-radius: 2px;
  background-color: #cd60be;
  border: none;
  color: white;

}
button:hover {
  background-color: white;
  transition: 500ms;
  color: black;
}
</style>