<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <Nav/>
        <Bio/>
        <IconSection/>
      </div>
    </main>
  </section>
</template>  

<script>
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src
import Bio from '@/components/Bio.vue';
import { IconSection } from '@/components/icons';

@Component({
  components: {
    Nav,
    Bio,
    IconSection,
  },
})
export default class Contact extends Vue {}
</script>

<style scoped lang='scss'>
.landing {
  background: url("../assets/img/Stroke-6.png") no-repeat center center
    fixed;
  background-size: 90%;
}

.about {
  height: 532px;
  margin: 10% auto;
  padding: 20px 100px;
  line-height: 32px;
  min-width: calc(60% - 100px);
  color: hsla(339, 6%, 46%, 0.93);
}
</style>

