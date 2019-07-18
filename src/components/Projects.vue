<template id="">
  <div class="">
    <div class="row the-row show-on-medium-and-up hide-on-small-only">
      <div class="col m3 l3 personal-nav z-depth-1">
        <h4><router-link class="white-text" :to="{ name: 'Home' }">Alex Prascak</router-link></h4>
        <div class="divider nav-divider"></div>
        <ul class="white-text">
          <li><router-link class="white-text" :to="{ name: 'About' }">About</router-link></li>
          <li><router-link class="black-text" :to="{ name: 'Projects' }">Personal Projects</router-link></li>
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
      <div class="bottom-proj">

        <!-- Section for first project. -->
        <div class="row" id="top-proj">
          <h3>Projects</h3>
          <div class="divider proj-divider"></div>
        </div>
        <div class="row proj-row">
          <h5 class="">Drafti.io<span class="right"><a href="https://github.com/APrascak"><i class="fab fa-github the-icons black-text center gitlink" style="font-size:24px"></i></a></span></h5>
          <div class="divider title-divider black"></div>
          <p class="languages"><em>HTML, CSS, VueJS, FireBase</em></p>
          <img class="materialboxed z-depth-1" src="../assets/drafti.png" alt="">
          <!-- <a href="https://github.com/APrascak"><i class="fab fa-github the-icons black-text center gitlink" style="font-size:24px"></i></a> -->
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

        <div class="divider mobile-desc-divider"></div>

        <!-- Section for second project. -->
        <div class="row proj-row">
          <h5 class="">Drafti.io<span class="right"><a href="https://github.com/APrascak"><i class="fab fa-github the-icons black-text center gitlink" style="font-size:24px"></i></a></span></h5>
          <div class="divider title-divider black"></div>
          <p class="languages"><em>HTML, CSS, VueJS, FireBase</em></p>
          <img class="materialboxed z-depth-1" src="../assets/drafti.png" alt="">
          <!-- <a href="https://github.com/APrascak"><i class="fab fa-github the-icons black-text center gitlink" style="font-size:24px"></i></a> -->
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

        <div class="divider mobile-desc-divider"></div>

        <!-- Section for third project. -->
        <div class="row proj-row">
          <h5 class="">Drafti.io<span class="right"><a href="https://github.com/APrascak"><i class="fab fa-github the-icons black-text center gitlink" style="font-size:24px"></i></a></span></h5>
          <div class="divider title-divider black"></div>
          <p class="languages"><em>HTML, CSS, VueJS, FireBase</em></p>
          <img class="materialboxed z-depth-1" src="../assets/drafti.png" alt="">
          <!-- <a href="https://github.com/APrascak"><i class="fab fa-github the-icons black-text center gitlink" style="font-size:24px"></i></a> -->
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
    text-align: center;
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
  .bottom-proj {
    height: 85vh;
    overflow: auto;
  }
  .bottom-proj .proj-row {
    margin: 0% 5%;
    text-align: left;
  }
  .gitlink {
    margin-top: 5%;
    margin-left: 47.5%;
  }
  #top-proj {
    margin-bottom: 0px;
  }
  .bottom-proj h5 {
    margin-top: 2%;
  }
  .mobile-desc-divider {
    margin: 5% 0%;
    background-color: #804949;
    height: 2px;
    width: 80%;
    margin-left: 10%;
  }

</style>
