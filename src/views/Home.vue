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
             <transition
              appear name="slide-fade-left" appear-active-class='contenAppearClass-2'
            >
              <h1 class="watermark">HELLO</h1>
            </transition>
            <transition
              appear
              appear-class="fadeIn"
              appear-active-class="fadeInEnterActive"
            >
              <div>
              <p class="watermark-small">My name is</p>
              <h1 class="title">Daria Calwell</h1>
              <h1 class="title-small">Web UI/UX developer</h1>
            </div>
            </transition>
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
            <button class="button-explore">
              Explore
              <svg class="button-svg">
                <g stroke="rgba(61, 51, 58, 0.7)" fill="transparent">
                  <line y1="75" x1="70" x2="155" y2="75" />
                  <polyline points="150 67 157 75 150 81.78" />
                  <circle
                    cx="296"
                    cy="75"
                    r="35"
                    transform="rotate(180 224.67 30.94) scale(1, -1) translate(0,
              -61)"
                  />
                </g>
              </svg>
            </button>
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

.watermark {
  position: absolute;
  top: 0%;
  right: -3%;
  text-shadow: 0 0 7px rgba(61, 51, 58, 0.1), 0 0 7px rgba(61, 51, 58, 0.1), 0 0 7px rgba(61, 51, 58, 0.1), 0 0 7px rgba(61, 51, 58, 0.1);
  color: transparent;
  font-size: 7em;
  letter-spacing: 1em;
  @media (max-width: 1024px) {
    font-size: 5em;
     text-shadow: 0 0 3px rgba(61, 51, 58, 0.5), 0 0 3px rgba(61, 51, 58,  0.5), 0 0 3px rgba(61, 51, 58,  0.5), 0 0 3px rgba(61, 51, 58,  0.5);

  }
  @media (max-width: 414px) {
    top: 5%;
    font-size: 3em;
     text-shadow: 0 0 2px rgba(61, 51, 58, 0.5), 0 0 2px rgba(61, 51, 58,  0.5), 0 0 2px rgba(61, 51, 58,  0.5), 0 0 2px rgba(61, 51, 58,  0.5);
  }
  @media (max-width: 375px) {
   letter-spacing: .8em;
  }
}
.watermark-small {
  position: absolute;
  top: 20%;
  right: 0%;
  text-shadow: 0 0 3px rgba(61, 51, 58, 0.1), 0 0 3px rgba(61, 51, 58, 0.1), 0 0 3px rgba(61, 51, 58, 0.1), 0 0 3px rgba(61, 51, 58, 0.1);
  color: transparent;
  font-size: 2em;
  letter-spacing: 1em;
  @media (max-width: 1024px) {
     font-size: 2em;
     top: 17%;
     text-shadow: 0 0 2px rgba(61, 51, 58, 0.5), 0 0 2px rgba(61, 51, 58,  0.5), 0 0 2px rgba(61, 51, 58,  0.5), 0 0 2px rgba(61, 51, 58,  0.5);
   }
  @media (max-width: 450px) {
    top: 17%;
    font-size: 1em;
    text-shadow: 0 0 2px rgba(61, 51, 58, 0.5), 0 0 2px rgba(61, 51, 58,  0.5), 0 0 2px rgba(61, 51, 58,  0.5), 0 0 2px rgba(61, 51, 58,  0.5);
  }
}

.button-explore {
  border: none;
  font-family: $theater;
  font-size: 2.5em;
  letter-spacing: 1em;
  padding: 3px;
  padding-left: 22px;
  background: transparent;
  color:  rgba(61, 51, 58, 0.7);
  z-index: 8;
  &:hover {
    color: #741166;
    background: transparent;
    letter-spacing: 1.1em;
    svg > g {
    stroke: #741166;
    }
  }
  &:focus {
    outline: none;
    border: none;
  }
  @media (max-width: 1024px) {
    color:  #741166;
    text-shadow: 0 0 3px rgba(243, 238, 242, 0.1), 0 0 3px rgba(243, 238, 242, 0.1), 0 0 3px rgba(243, 238, 242, 0.1), 0 0 3px rgba(243, 238, 242, 0.1);
      svg > g {
      stroke: #741166;
    }
  }
  @media (max-height: 750px) {
     font-size: 1.5em;
   }
   @media (max-width: 375px) {
     letter-spacing: .5em;
      &:hover {
        width: 300px;
        letter-spacing: .6em;
      }
   }
}
.button-svg {
  position: absolute;
  bottom: 10%;
  right: -3%;
   @media (max-width: 1024px) {
      bottom: 4%;
      right: 19%;
   }
   @media (max-width: 414px) {
     display: none;
   }
}
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
  z-index: 8;
   @media (max-width: 1024px) {
    position: absolute;
    top: 15%;
    left: 15%;
    height: 70%;
    width: 70%;
    padding: 20px 0;
    background: transparent;
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
    opacity: .8;
  }
}
.title {
  font-weight: unset;
  letter-spacing: 10px;
  font-size: 100px;
  margin-top: 2em;
  margin-bottom: 0;
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
  text-align: center;
   @media (max-width: 1024px) {
    width: 100%;
    opacity: .9;
   }
  @media (min-width: 1330px) {
    margin-top: 2em;
  }
}
.landing-tagline-small {
  margin: auto;
  font-family: $beau;
  letter-spacing: 2px;
  text-align: center;
  width: 70%;
  font-size: 1em;
  background: rgba(61, 51, 58, 0.7);
  padding: 1em;
  color: white;
  opacity: .8;
  @media (max-width: 1024px) {
    background: transparent;
    color: rgba(61, 51, 58);
  }
  @media (max-height: 667px) {
  font-size: .75em
  }
  @media (max-width: 360px) {
      padding-top: 0;
  }
}

.landing-tagline__italic {
  font-style: italic;
  font-size: 1.5em;
  padding-left: 20px;
}

.fadeInEnterActive {
  transition: opacity 1s ease-in;
  transition-delay: 1s;
}
.fadeIn {
  opacity: 0;
}
.slide-fade-left-enter-active, .contenAppearClass-2 {
  transition: all .5s ease-in;
}
.slide-fade-left-enter, .slide-fade-left-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
.contenAppearClass-2 {
   transition-delay: 0.8s;
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
