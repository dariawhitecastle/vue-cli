<template>
  <div class="home">
    <section class="home-page">
      <div class="landing-inner">
        <!-- <Nav /> -->
      </div>
      <main class="main-wrapper">
        <div class="landing" />
        <div class="right-section">
          <div class="title-section">
            <h1 class="title">Daria Calwell</h1>
            <h1 class="title-small">Web UI/UX developer</h1>
          </div>
          <section class="landing-tagline-small">
            <p>
              I focus on modern web technologies to create performant and
              scalable web applications. Having worked with Fortune 500
              companies as well as startups, I can quickly prototype a design or
              idea, or perfect and iterate on a large project.
            </p>
          </section>
          <div class="landing-tagline">
            <transition
              appear
              appear-class="fadeIn"
              appear-active-class="fadeInEnterActive-1"
            >
              <span>
                <span class="landing-tagline__italic">I</span>deating
              </span>
            </transition>
            <transition
              appear
              appear-class="fadeIn"
              appear-active-class="fadeInEnterActive-2"
            >
              <span key="2">
                <span class="landing-tagline__italic">P</span>rototyping
              </span>
            </transition>
            <transition
              appear
              appear-class="fadeIn"
              appear-active-class="fadeInEnterActive-4"
            >
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

$theater: 'Theater', sans-serif;
$beau: 'Beau', sans-serif;

.main-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1024px) {
   flex-direction: column;
  }
}

.right-section {
  width: 50%;
  background: rgb(248, 202, 233, 0.2);
   @media (max-width: 1024px) {
    position: absolute;
    top: 15%;
    left: 15%;
    height: 70%;
    width: 70%;
    padding: 20px 0;
    background: rgba(61, 51, 58, 0.7);
  }
  @media (max-width: 414px) {
    top: 5%;
    left: 10%;
    height: 85%;
    width: 80%;
  }

}

.title-section {
  font-family: $theater, sans-serif;
  opacity: 0.6;
  margin: auto;
  padding-top: 32px;
  text-align: center;
  color: hsla(314, 42%, 11%, 1);
  @media(max-width: 1024px) {
    color: white;
    opacity: 1;
  }
}
.title {
  font-weight: unset;
  letter-spacing: 10px;
  font-size: 100px;
  @media (max-width: 1330px) {
   font-size: 80px
  }
  @media (max-width: 414px) {
    font-size: 60px
  }
}
.title-small {
  letter-spacing: 5px;
  white-space: nowrap;
  font-size: 30px;
   @media(max-width: 1024px) {
    color: white;
   }
   @media (max-width: 414px) {
    font-size: 20px
  }
}

.landing {
  background: url('../assets/img/roam.jpg') no-repeat left fixed;
  background-size: contain;
  height: 100vh;
  width: 50%;
   @media (max-width: 1024px) {
   background-size: cover;
    width: 100%;
    height: 100vh;
    opacity: 0.7;
  }
}
.landing-tagline {
  font-family: $beau;
  letter-spacing: 5px;
  font-size: 1.5em;
  width: 40%;
  text-align: center;
  margin: 1em auto;
  margin-bottom: 0;
   @media (max-width: 1024px) {
     width: 100%;
    color: white;
    opacity: .8;
   }
  @media (min-width: 1330px) {
    margin-top: 4em;
  }
}
.landing-tagline-small {
  margin: auto;
  font-family: $beau;
  letter-spacing: 2px;
  text-align: center;
  width: 70%;
  font-size: 1em;
   @media (max-width: 1024px) {
    color: white;
    opacity: .8;
   }
   @media (max-height: 667px) {
    font-size: .75em
   }
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
// .title-frame {
//   position: absolute;
//   top: -45%;
//   left: 31%;
//   opacity: 0.7;
//   -webkit-transform: rotate(90deg);
//   transform: rotate(90deg);
//   @media (min-width: 1330px) {
//     top: -45%;
//     left: 31%;
//   }
//   @media (min-width: 1680px) {
//     top: -35%;
//     left: 31%;
//   }
//    @media (min-width: 2100px) {
//     top: -40%;
//     left: 32%;
//     width: 650px;
//   }
//   @media (min-width: 2500px) {
//     top: -37%;
//     left: 31%;
//     width: 800px;
//   }
// }
// .title-splash1 {
//   position: absolute;
//   top: -2%;
//   left: 10%;
//   height: 300px;
//   transform: rotate(90deg);
// }
// .title-splash2 {
//   position: absolute;
//   bottom: 5%;
//   right: 10%;
//   height: 300px;
//   transform: rotate(90deg);
// }


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
