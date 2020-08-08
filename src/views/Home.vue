<template>
  <div class="home">
    <section class="home-page">
      <main class="landing">
        <div class="landing-inner">
          <Nav />
          <img class="title-frame" src="../assets/img/geo1.png" />
          <img class="title-splash1" src="../assets/img/splash1.png" />
          <img class="title-splash1" src="../assets/img/splashsilver.png" />
          <img class="title-splash2" src="../assets/img/splash3.png" />
          <div class="title-section">
            <h1 class="title">Daria Calwell</h1>
            <h1 class="title-small">Web UI/UX developer</h1>
          </div>
          <section class="landing-tagline-small">
            <p>
              I focus on modern web technologies such as React/Redux/Vue/GraphQL/Node to create performant
              and scalable web applications. Having worked with large Fortune 500 companies as well as startups,
              I can quickly prototype a design or idea, or perfect and iterate on a large project.
            </p>
          </section>
          <div class="landing-tagline">
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-1">
              <span>
                <span class="landing-tagline__italic">I</span>deating
              </span>
            </transition>
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-2">
              <span key="2">
                <span class="landing-tagline__italic">P</span>rototyping
              </span>
            </transition>
            <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-4">
              <span key="4">
                <span class="landing-tagline__italic">P</span>olishing
              </span>
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
export default class Home extends Vue {
}
</script>

<style lang="scss">
@import '../assets/css/main.scss';
@import url('../assets/css/fonts.scss');

$tuesday-night: 'Tuesday night', sans-serif;
$beau: 'Beau', sans-serif;

#bubble1,#bubble2, #bubble3, #bubble4, #bubble5  {
  width: 200pt;
  height: 200pt;
  background: blue;
  border-radius: 100pt;
}

.landing {
  background: url('../assets/img/Stroke-6.png') no-repeat center center fixed;
  background-size: contain;
  height: 100vh;
  width: 100vw;
}
.landing-tagline {
  font-family: $beau;
  letter-spacing: 5px;
  font-size: 1.5em;
  position: relative;
  top: 14%;
  margin: auto;
  width: 40%;
  text-align: center;
}
.landing-tagline-small {
  margin: auto;
  font-family: $beau;
  letter-spacing: 2px;
  text-align: center;
  top: 10%;
  width: 70%;
  position: relative;
  font-size: 1em;
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
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  @media (min-width: 1330px) {
    top: -45%;
    left: 31%;
  }
  @media (min-width: 1680px) {
    top: -35%;
    left: 31%;
  }
   @media (min-width: 2100px) {
    top: -40%;
    left: 32%;
    width: 650px;
  }
  @media (min-width: 2500px) {
    top: -37%;
    left: 31%;
    width: 800px;
  }
}
.title-splash1 {
  position: absolute;
  top: -2%;
  left: 10%;
  height: 300px;
  transform: rotate(90deg);
}
.title-splash2 {
  position: absolute;
  bottom: 5%;
  right: 10%;
  height: 300px;
  transform: rotate(90deg);
}
.title-section {
  font-family: $tuesday-night, sans-serif;
  position: relative;
  opacity: 0.6;
  margin: auto;
  top: 20%;
  width: 300px;
  height: 300px;
}
.title {
  white-space: nowrap;
  font-weight: unset;
  letter-spacing: 8px;
  font-size: 125px;
  position: relative;
  right: 57%;
  transform: translateY(-50%);
  color: hsla(314, 42%, 11%, 1);
}
.title-small {
  position: relative;
  letter-spacing: 3px;
  white-space: nowrap;
  font-size: 30px;
  bottom: 80%;
  margin: auto;
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
