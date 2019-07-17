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
      <div class="col m9 l9">
        <h3>Projects</h3>
        <div class="divider proj-divider"></div>
        <div class="projects">
          <div class="row proj-row">
            <div class="col m4 l4">
              <img class="materialboxed z-depth-1" src="../assets/drafti.png" alt="">
              <p><em>HTML, CSS, VueJS, FireBase</em></p>
              <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
            </div>
            <div class="col m8 l8">
              <h5 class="">Drafti.io</h5>
              <div class="divider title-divider black"></div>
              <ul class="">
                <li>Establishes a Mock Draft Simulator based on user league parameters.
                The computer 'AI' selects players with an algorithm designed to account for general drafting opinions and
                slight random variability.</li>
                <li>Dynamically allows users to visualize relationships between variables like ADP (Average Draft Position),
                ESPN's Pre-Season Rankings, Yearly Finish, and Average Points Per Game. </li>
                <li>Includes a weekly blog that focuses on providing analysis and predictions of future performance
                through simple, effective data visualization.</li>
              </ul>
            </div>
          </div>
          <div class="divider desc-divider">
          </div>
          <div class="row proj-row">
            <div class="col m4 l4">
              <img class="materialboxed z-depth-1" src="../assets/drafti.png" alt="">
              <p><em>HTML, CSS, VueJS, FireBase</em></p>
              <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
            </div>
            <div class="col m8 l8">
              <h5 class="">Drafti.io</h5>
              <div class="divider title-divider black"></div>
              <ul class="">
                <li>Establishes a Mock Draft Simulator based on user league parameters.
                The computer 'AI' selects players with an algorithm designed to account for general drafting opinions and
                slight random variability.</li>
                <li>Dynamically allows users to visualize relationships between variables like ADP (Average Draft Position),
                ESPN's Pre-Season Rankings, Yearly Finish, and Average Points Per Game. </li>
                <li>Includes a weekly blog that focuses on providing analysis and predictions of future performance
                through simple, effective data visualization.</li>
              </ul>
            </div>
          </div>
          <div class="row proj-row">
            <div class="col m4 l4">
              <img class="materialboxed z-depth-1" src="../assets/drafti.png" alt="">
              <p><em>HTML, CSS, VueJS, FireBase</em></p>
              <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
            </div>
            <div class="col m8 l8">
              <h5 class="">Drafti.io</h5>
              <div class="divider title-divider black"></div>
              <ul class="">
                <li>Establishes a Mock Draft Simulator based on user league parameters.
                The computer 'AI' selects players with an algorithm designed to account for general drafting opinions and
                slight random variability.</li>
                <li>Dynamically allows users to visualize relationships between variables like ADP (Average Draft Position),
                ESPN's Pre-Season Rankings, Yearly Finish, and Average Points Per Game. </li>
                <li>Includes a weekly blog that focuses on providing analysis and predictions of future performance
                through simple, effective data visualization.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Projects',
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
  .proj-divider {
    background-color: #804949;
    margin-left: 10%;
    margin-bottom: 10px;
    width: 80%;
    height: 2px;
  }
  .projects {
    margin: 1% 5%;
  }
  .m8 ul {
    margin-top: 0%;
    padding-top: 0%;
  }
  .m8 li {
    text-align: left;
    padding: 0.5% 0%;
  }
  .title-divider {
    height: 1px;
    width: 30%;
    margin-bottom: 1.5%;
  }
  i {
    color: black;
  }
  .materialboxed {
    width: 100%;
  }
  .proj-row {
    padding-top: 2.5%;
  }
  .proj-row li {
    padding-top: 0%;
    padding-bottom: 1%;
  }
  h5 {
    text-align: left;
  }
  .m9 {
    height: 100vh;
    overflow: auto;
  }
  .desc-divider {
    background-color: #804949;
    margin-left: 12.5%;
    margin-bottom: 10px;
    width: 75%;
    height: 1px;
  }
  .the-icons {
    color: white;
    margin-left: 2%;
  }
  .nav-icons {
    margin-top: 4%;
  }
</style>
