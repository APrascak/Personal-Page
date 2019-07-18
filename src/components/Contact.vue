<template>
  <div class="">
    <div class="row the-row show-on-medium-and-up hide-on-small-only">
      <div class="col m3 l3 personal-nav z-depth-1">
        <h4><router-link class="white-text" :to="{ name: 'Home' }">Alex Prascak</router-link></h4>
        <div class="divider nav-divider"></div>
        <ul class="white-text">
          <li><router-link class="white-text" :to="{ name: 'About' }">About</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Projects' }">Personal Projects</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Education'}">Education</router-link></li>
          <li><router-link class="black-text" :to="{ name: 'Contact'}">Contact Me</router-link></li>
        </ul>
        <div class="nav-icons center">
          <a href="https://www.linkedin.com/in/aprascak/"><i class="fab fa-linkedin-in the-icons" style="font-size:24px"></i></a>
          <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
          <a href="https://twitter.com/AlexPrascak"><i class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
        </div>

      </div>
      <div class="col m9 l9">
        <h3>Contact Me:</h3>
        <div class="divider title-divider"></div>
        <p>Email: aprascak@ufl.edu</p>
        <p>Phone: (219) 575-8105</p>
        <div class="nav-icons center">
          <a href="https://www.linkedin.com/in/aprascak/"><i id="linkedin1" class="fab fa-linkedin-in the-icons" style="font-size:24px"></i></a>
          <a href="https://github.com/APrascak"><i id="github1" class="fab fa-github the-icons" style="font-size:24px"></i></a>
          <a href="https://twitter.com/AlexPrascak"><i id="twitter1" class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
        </div>
        <a href="https://twitter.com/AlexPrascak"><i class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
      </div>
    </div>

    <!-- MOBILE FRIENDLY LAYOUT -->
    <div class="row show-on-small hide-on-med-and-up">
      <div class="row mobile-nav">
        <h4><a class='dropdown-trigger black-text left' href='#' data-target='dropdown1'><i class="fas fa-bars"></i></a><router-link class="white-text" :to="{ name: 'Home' }">Alex Prascak</router-link></h4>
        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#"><router-link class="popup" :to="{ name: 'About' }">About Me</router-link></a></li>
          <li><a href="#"><router-link class="popup" :to="{ name: 'Projects' }">Personal Projects</router-link></a></li>
          <li><a href="#"><router-link class="popup" :to="{ name: 'Education' }">Education</router-link></a></li>
          <li><a href="#"><router-link class="popup" :to="{ name: 'Contact' }">Contact Me</router-link></a></li>
        </ul>

      </div>
      <div class="contact-mobile">
        <h3>Contact</h3>
        <div class="divider title-divider"></div>
        <p>Email: aprascak@ufl.edu</p>
        <p>Phone: (219) 575-8105</p>
        <div class="nav-icons center">
          <a href="https://www.linkedin.com/in/aprascak/"><i id="linkedin" class="fab fa-linkedin-in the-icons" style="font-size:24px"></i></a>
          <a href="https://github.com/APrascak"><i id="github" class="fab fa-github the-icons" style="font-size:24px"></i></a>
          <a href="https://twitter.com/AlexPrascak"><i id="twitter" class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Contact',
    data() {
      return {

      }
    },
    mounted() {
      M.AutoInit()
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
  .title-divider {
    background-color: #804949;
    height: 2px;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 10px;
  }
  .the-icons {
    color: white;
    margin-left: 2%;
  }
  .nav-icons {
    margin-top: 4%;
  }

  /* MOBILE STYLING BELOW*/
  .mobile-nav {
    height: 15vh;
    background-color: #804949;
    margin-bottom: 0px;
  }
  .mobile-nav h4 {
    margin: 0%;
    padding-top: 5vh;
  }
  .mobile-nav .popup {
    color: #804949;
  }
  .mobile-nav i {
    margin-left: 40%;
  }
  .even-mobile {
    color: #804949;
  }
  .the-top {
    margin-top: 20vh;
  }
  .mobile-nav-divider {
    background-color: black;
    height: 2px;
    margin-left: 30%;
    width: 40%;
  }
  #linkedin, #github, #twitter {
    color: black;
  }
  #linkedin1, #github1, #twitter1 {
    color: black;
  }

</style>
