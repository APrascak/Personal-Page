<template>
  <div class="">
    <div class="row the-row">
      <div class="col m3 l3 personal-nav z-depth-1">
        <h4><router-link class="white-text" :to="{ name: 'Home' }">Alex Prascak</router-link></h4>
        <div class="divider nav-divider"></div>
        <ul class="white-text">
          <li><router-link class="black-text" :to="{ name: 'About' }">About</router-link></li>
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
        <h3>About</h3>
        <div class="divider about-divider"></div>
        <div class="row">
          <div class="col m4 l4">
            <img class="materialboxed z-depth-2" src="../assets/headshot.jpeg" alt="">
            <div class="row">
              <a href="https://www.linkedin.com/in/aprascak/" class="the-icons"><i class="fab fa-linkedin-in the-icons" style="font-size:24px"></i></a>
              <a href="https://github.com/APrascak"><i class="fab fa-github the-icons" style="font-size:24px"></i></a>
            </div>
          </div>
          <div class="col m8 l8 description">
            <p>I am an aspiring Software Engineer heading into my fourth year of Computer Science at the University of Florida.</p>
            <p>Apart from my coursework, I actively participate in various campus organizations like Gator Innovators, Student Government, and Sigma Nu Fraternity.
              I have held a multitude of leadership positions and remain focused on advancing the operations, campus awareness, and development of these groups.
            </p>
            <p>I believe that personal development should be an essential focus point for any young professional.
            A lot of my free-time is spent learning on courses from these websites:</p>
            <ul>
              <li>LinkedIn Learning</li>
              <li>Udemy</li>
              <li>YouTube</li>
            </ul>
            <p>My professional interests involve Agile Development, Big Data, Web Development, Cloud Computing, and Statistics.
            To help better develop my skills I focus on learning and working with these languages:</p>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>R</li>
              <li>VueJS</li>
            </ul>
            <p>I am actively looking for internships, co-ops, and experiences that pertain to software engineering.
            If you feel that I could contribute to your business, feel free to look at more of my work or reach out to me.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted() {
    M.AutoInit()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .about-divider {
    background-color: #804949;
    margin-left: 10%;
    margin-bottom: 10px;
    width: 80%;
    height: 2px;
  }
  .materialboxed {
    width: 75%;
    margin-left: 12.5%;
  }
  img {
    margin-top: 7.5%;
  }
  p {
    text-align: left;
    margin: 7px 0px;
    font-size: 13px;
  }
  m8, l8 {
    overflow: auto;
  }
  .m8 li {
    padding-top: 0%;
    text-align: left;
    font-size: 13px;
  }
  .m8 ul {
    padding-top: 1%;
  }
  .m9 i {
    padding: 5% 2%;
    color: black;
  }
  .description {
    padding-right: 5%;
  }
  .the-icons {
    color: white;
    margin-left: 2%;
  }
  .nav-icons {
    margin-top: 4%;
  }


</style>
