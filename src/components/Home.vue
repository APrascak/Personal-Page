<template id="">
  <div class="">
    <div class="row the-row">
      <div class="col m3 l3 personal-nav z-depth-1">
        <h4><router-link class="white-text" :to="{ name: 'Home' }">Alex Prascak</router-link></h4>
        <div class="divider nav-divider"></div>
        <ul class="white-text">
          <li><router-link class="white-text" :to="{ name: 'About' }">About</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Projects' }">Personal Projects</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Education'}">Education</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Contact'}">Contact Me</router-link></li>
        </ul>
        <div class="nav-icons center">
          <a href="https://www.linkedin.com/in/aprascak/"><i class="fab fa-linkedin-in the-icons" style="font-size:24px"></i></a>
          <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
          <a href="https://twitter.com/AlexPrascak"><i class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
        </div>
      </div>
      <div class="col m9 l9 center">
        <div class="">
          <h2 class="black-text first"><router-link class="black-text first" :to="{ name: 'About' }">About Me</router-link></h2>
          <h2 class="even-header"><router-link class="even-header" :to="{ name: 'Projects' }">Personal Projects</router-link></h2>
          <h2 class="black-text"><router-link class="black-text" :to="{ name: 'Education' }">Education</router-link></h2>
          <h2 class="even-header"><router-link class="even-header" :to="{ name: 'Contact' }">Contact Me</router-link></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Home',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .the-row {
    height: 100vh;
  }
  .personal-nav {
    height: 100%;
    background-color: #804949;
  }
  h4 {
    padding-top: 10%;
    padding-bottom: 3%;
  }
  ul {
    padding-top: 3%;
    color: #2c3e50;
  }
  li {
    padding-top: 3%;
  }
  .nav-divider {
    background-color: #0a1321;
    height: 2px;
  }
  .m9 {
    height: 100vh;
    text-align: center;
  }
  .tleft {
    height: 25vh;
    margin: 20vh 0vh 5vh 0vh;
  }
  .tright {
    height: 25vh;
    margin: 20vh 0vh 5vh 0vh;
    background-color: #804949;
  }
  .bleft {
    height: 25vh;
    margin: 5vh 0vh 20vh 0vh;
    background-color: #804949;
  }
  .bright {
    height: 25vh;
    margin: 5vh 0vh 20vh 0vh;
  }
  .top-row {
    height: 50%;
  }
  .m4 {
    height: 100%;
  }
  .m9 h2 {
    height: 10vh;
    padding: 0%;
    text-align: center;
  }
  .even-header {
    color: #804949
  }
  .first {
    margin-top: 22.5vh;
  }
  .the-icons {
    color: white;
    margin-left: 2%;
  }
  .nav-icons {
    margin-top: 4%;
  }
</style>
