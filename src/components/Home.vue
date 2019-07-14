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
          <li><router-link class="white-text" :to="{ name: 'About'}">Contact Me</router-link></li>
        </ul>
      </div>
      <div class="col m9 l9">
        <div class="row top-row">
          <div class="col m4 l4 offset-m1 offset-l1">
            <div class="card-panel black tleft z-depth-2 valign-wrapper center">
              <h4 class="white-text right">About Me</h4>
            </div>
          </div>
          <div class="col m4 l4 offset-m1 offset-l1">
            <div class="card-panel tright z-depth-2 valign-wrapper">
              <h4 class="white-text center">Personal Projects</h4>
            </div>
          </div>
        </div>
        <div class="row top-row">
          <div class="col m4 l4 offset-m1 offset-l1">
            <div class="card-panel bleft z-depth-2 valign-wrapper">
              <h4 class="white-text">Education</h4>
            </div>
          </div>
          <div class="col m4 l4 offset-m1 offset-l1">
            <div class="card-panel black bright z-depth-2 valign-wrapper">
              <h4 class="white-text">Contact Me</h4>
            </div>
          </div>
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
  .card-panel h4 {
    padding: 0%;
    text-align: center;
  }
</style>
