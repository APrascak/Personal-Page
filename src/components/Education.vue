<template id="">
  <div class="">
    <div class="row the-row show-on-medium-and-up hide-on-small-only">
      <div class="col m3 l3 personal-nav z-depth-1">
        <h4><router-link class="white-text" :to="{ name: 'Home' }">Alex Prascak</router-link></h4>
        <div class="divider nav-divider"></div>
        <ul class="white-text">
          <li><router-link class="white-text" :to="{ name: 'About' }">About</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Projects' }">Personal Projects</router-link></li>
          <li><router-link class="black-text" :to="{ name: 'Education'}">Education</router-link></li>
          <li><router-link class="white-text" :to="{ name: 'Contact'}">Contact Me</router-link></li>
        </ul>
        <div class="nav-icons">
          <a href="https://www.linkedin.com/in/aprascak/"><i class="fab fa-linkedin-in the-icons" style="font-size:24px"></i></a>
          <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
          <a href="https://twitter.com/AlexPrascak"><i class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
        </div>
      </div>
      <div class="col m9 l9">
        <h3>Education</h3>
        <div class="divider header-divider"></div>
        <img class="materialboxed" src="../assets/ufenglogo.png" alt="">
        <div class="row">
          <div class="col m5 l5 offset-m1 offset-l1">
            <ul>
              <li>Degree: B.S. Computer Science</li>
              <li>Minor: Statistics</li>
              <li>GPA: 3.38</li>
              <li>Expected Graduation: December 2020</li>
            </ul>
            <span>Leadership:</span>
            <ul>
              <li>Sigma Nu Fraternity, <em>L.E.A.D. Chairman</em></li>
              <li>Gator Innovators, <em>Director of Web Development</em></li>
              <li>Student Government, <em>Undersecretary of Technology</em></li>
            </ul>
          </div>
          <div class="col m4 l4 offset-m1 offset-l1">
            <span>Coursework</span>
            <ul>
              <li>Applications of Discrete Structures</li>
              <li>Computational Linear Algebra</li>
              <li>Computational Numerical Analysis</li>
              <li>Data Structures & Algorithms</li>
              <li>Digital Logic & Computer Systems</li>
              <li>Engineering Statistics</li>
              <li>Information & Database Systems 1</li>
              <li>Intro to Computer Organization</li>
              <li>Intro to Probability</li>
              <li>Intro to Software Engineering</li>
              <li>Professional Communication for Engineers</li>
              <li>Programming Fundamentals 1 (Java)</li>
              <li>Programming Fundamentals 2 (C++)</li>
              <li>Regression Analysis</li>
            </ul>
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
      <div class="education-mobile">
        <h3>Education</h3>
        <div class="divider header-divider"></div>
        <img class="materialboxed" src="../assets/ufenglogo.png" alt="">
        <div class="education-info">
          <ul id="mobile-degree">
            <li>Degree: B.S. Computer Science</li>
            <li>Minor: Statistics</li>
            <li>GPA: 3.38</li>
            <li>Expected Graduation: December 2020</li>
          </ul>
          <span>Leadership:</span>
          <ul id="mobile-lead">
            <li>Sigma Nu Fraternity, <em>L.E.A.D. Chairman</em></li>
            <li>Gator Innovators, <em>Director of Web Development</em></li>
            <li>Student Government, <em>Undersecretary of Technology</em></li>
          </ul>
          <span class="center">Coursework</span>
          <ul id="mobile-classes">
            <li>Applications of Discrete Structures</li>
            <li>Computational Linear Algebra</li>
            <li>Computational Numerical Analysis</li>
            <li>Data Structures & Algorithms</li>
            <li>Digital Logic & Computer Systems</li>
            <li>Engineering Statistics</li>
            <li>Information & Database Systems 1</li>
            <li>Intro to Computer Organization</li>
            <li>Intro to Probability</li>
            <li>Intro to Software Engineering</li>
            <li>Professional Communication for Engineers</li>
            <li>Programming Fundamentals 1 (Java)</li>
            <li>Programming Fundamentals 2 (C++)</li>
            <li>Regression Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Education',
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
  .header-divider {
    background-color: #804949;
    margin-left: 10%;
    margin-bottom: 3%;
    width: 80%;
    height: 2px;
  }
  .materialboxed {
    width: 75%;
    margin-left: 12.5%;
  }
  .m9 li {
    padding-top: 0%;
    text-align: left;
  }
  .m9 ul {
    padding-top: 0%;
  }
  .m9 {
    height: 100vh;
    overflow: auto;
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
  .education-info {
    padding: 0% 5%;
  }
  .education-mobile {
    margin: 0px;
  }
  #mobile-degree {
    margin-top: 0px;
  }
  #mobile-degree li {
    padding: 0;
    text-align: left
  }
  #mobile-lead {
    padding-top: 0px;
  }
  #mobile-lead li {
    padding: 0;
    text-align: left;
  }
  #mobile-classes {
    margin-top: 0px;
  }
  #mobile-classes li {
    padding: 0;
    text-align: left;
  }
</style>
