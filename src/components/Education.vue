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
        </ul>
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
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Education',
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
</style>
