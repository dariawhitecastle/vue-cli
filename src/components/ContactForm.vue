<template>
<div class="contact__wrapper"> 
  <h3 class="contact__header">Say Hello</h3>
  <form
    class="contact__form"
    name="contact-form"
    >
      <label class="contact__label">Your name</label>
      <input class="contact__input" value="" type="text"/>
      <label class="contact__label">Your email</label>
      <input class="contact__input" value="" type="text" />
      <label class="contact__label">Inquiry</label>
      <textarea class="contact__input" value="" type="text" />
      <button class="contact__submit" @click="handleSubmit()">Submit</button>
    </form>
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator';
import axios from 'axios'
export default class ContactForm extends Vue {
  encode (data) {
    return Object.keys(data)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
  }
  handleSubmit () {
    this.$router.push('/submitted')
    // const axiosConfig = {
    //   header: { "Content-Type": "application/x-www-form-urlencoded" }
    // };
    // axios.post(
    //   "/",
    //   this.encode({
    //     "form-name": "contact-form",
    //     ...this.form
    //   }),
    //   axiosConfig
    // ).then(() => {
        
      // })
  }
}

</script>

<style lang="scss">
@import url('../assets/css/fonts.scss');

$tuesday-night: 'Tuesday night', sans-serif;
$beau: 'Beau', sans-serif;

.contact__wrapper {
  background: url('../assets/img/bw_bench.jpg') no-repeat center center fixed;
  background-size: 100%;
  height: 100vh;
  padding: 5%;
  text-align: center;
}
.contact__header {
  font-family: $beau;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3%;
}

.contact__form {
  text-align: left;
  width: 50%;
  margin: auto;
  padding: 5%;
  background: hsla(19, 100%, 90%, .3);
  display: flex;
  flex-direction: column;
}
.contact__label {
  font-family: $beau;
  font-size: 1em;
  padding: 10px 0;
}
.contact__input {
  border: none;
  border-bottom: 0.5px solid hsla(0, 0%, 77%, 1);
  background-color: transparent;
  margin: 1em 0;
  outline: none;
  padding: 10px;
  font-size: 1em;
}
.contact__submit {
  text-transform: uppercase;
  font-size: 1em;
  width: 40%;
  height: 4em;
  margin: 3% auto;
  border-radius: 2px;
  background-color:white;
  border: none;

}
button:hover {
  background-color: #cd60be;
  transition: 500ms;
  color: white;
}
</style>
