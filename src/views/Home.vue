<template>
  <div class="home">
    <section class="home-page">
      <main class="landing">
        <div class="landing-inner">
          <Nav/>
          <img class="title-frame" src="../assets/img/geo1.png"/>
          <img class="title-splash1" src="../assets/img/splash1.png"/>
          <img class="title-splash1" src="../assets/img/splashsilver.png"/>
          <img class="title-splash2" src="../assets/img/splash3.png"/>
          <div class="title-section">
            <h1 class="title">Daria Calwell</h1>
            <p class="title-small">Web UI developer</p>
          </div>
          <div class="landing-tagline">
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-1">
              <span><span class="landing-tagline__italic">A</span>udacious </span>
            </transition>
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-2">
              <span key='2'><span class="landing-tagline__italic">W</span>himsical </span>
            </transition>
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-3">
              <span key='3'>
                <span class="landing-tagline__italic">E</span>ccentric</span>
            </transition>
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-4">
              <span key='4'>
                <span class="landing-tagline__italic">C</span>raftswoman</span>
            </transition>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    Nav,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '../assets/css/main.scss';
@import url('../assets/css/fonts.scss');

$tuesday-night: 'Tuesday night', sans-serif;
$beau: 'Beau', sans-serif;

.landing {
  background: url('../assets/img/bw_bench.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
}
.landing-tagline {
  font-family: $beau;
  letter-spacing: 2px;
  font-size: 1.5em;
  position: relative;
  top: 25%;
  left: 26%;
}

.landing-tagline__italic {
  font-style: italic;
  font-size: 1.5em;
  padding-left: 20px;
}
.fadeInEnterActive-1,
.fadeInEnterActive-2,
.fadeInEnterActive-3,
.fadeInEnterActive-4 {
  transition: opacity 0.25s ease-in;
}
.fadeIn {
  opacity: 0;
}

.fadeInEnterActive-2 {
  transition-delay: 0.4s;
}
.fadeInEnterActive-3 {
  transition-delay: 0.8s;
}
.fadeInEnterActive-4 {
  transition-delay: 1.2s;
}
.title-frame {
  position: absolute;
  top: -45%;
  left: 31%;
  opacity: 0.7;
  height: 1290px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  opacity: 0.2;
}
.title-splash1 {
  position: absolute;
  top: -2%;
  left: 10%;
  opacity: 0.7;
  height: 300px;
  transform: rotate(90deg);
}
.title-splash2 {
  position: absolute;
  bottom: 5%;
  right: 10%;
  opacity: 0.7;
  height: 300px;
  transform: rotate(90deg);
}
.title-section {
  font-family: $tuesday-night, sans-serif;
  position: relative;
  opacity: 0.6;
  top: 20%;
  left: 40%;
  width: 300px;
  height: 300px;
}
.title {
  white-space: nowrap;
  font-weight: unset;
  letter-spacing: 3px;
  font-size: 100px;
  position: relative;
  top: 20%;
  right: 35%;
  transform: translateY(-50%);
  color: hsla(314, 42%, 11%, 1);
}
.title-small {
  position: relative;
  font-size: 30px;
  bottom: 52%;
  left: 20%;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
@keyframes fadeInAnim {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes grow-left {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
