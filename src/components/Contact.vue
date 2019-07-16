<template>
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
      </div>
      <div class="col m9 l9">
        <h3>Contact Me:</h3>
        <div class="divider title-divider"></div>
        <p>Email: aprascak@ufl.edu</p>
        <p>Phone: (219) 575-8105</p>
        <p>Connect with me on Linkedin</p>
        <a href="https://github.com/APrascak"><i class="fab fa-twitter the-icons" style="font-size:24px"></i></a>
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
</style>
