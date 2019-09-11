<template>
  <div>
    <div  class="page-title section">
      <img src="@/assets/icon.png" height="100px" width="100px">
      <transition appear>
        <p v-cloak>OKURA Maiki's homepage</p>
      </transition>
    </div>
    <div class="container">
      <div class="logo-bar">
        <a target="_blank" href="https://github.com/sheepover96/" class="logo"><i class="fab fa-github fa-lg"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/%E7%9C%9F%E4%B8%80%E5%B8%8C-%E5%A4%A7%E5%80%89-a17397149/?locale=en_US" class="logo"><i class="fab fa-linkedin-in fa-lg"></i></a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100014972891268"  class="logo"><i class="fab fa-facebook fa-lg"></i></a>
        <a target="_blank" href="https://twitter.com/LovelyQuoteBot"  class="logo"><i class="fab fa-twitter fa-lg"></i></a>
        <a target="_blank" href="https://serenard.hatenablog.com/"  class="logo"><i class="fa fa-rss"></i></a>
        <a target="_blank" href="https://drive.google.com/open?id=11ixcpV4PIs-wwdbG0yKlvEVeE0yifK0-"  class="logo"><i class="fas fa-file"></i></a>
      </div>
      <div class="columns center navigation-bar">
        <div class="column">
          <a href="#" v-scroll-to="'#profile'">Profile</a>
        </div>
        <div class="column">
          <a href="#" v-scroll-to="'#education'">Education</a>
        </div>
        <div class="column">
          <a href="#" v-scroll-to="'#publication'">Publication</a>
        </div>
        <div class="column">
          <a href="#-exp" v-scroll-to="'#work-exp'">Work exp.</a>
        </div>
        <div class="column">
          <a  href="#" v-scroll-to="'#skills'">Skills</a>
        </div>
      </div>
    </div>
    <hr>
    <slot></slot>
  </div>
</template>
<style lang="scss">
.page-title {
  font-size: 30px;
  font-family: 'Futura', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-bar {
  a:visited, a:link {
    color: #2c3e50;
  }
  a:hover {
    color: #1e90ff;
  }
}
.logo {
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px;
  margin-right: 7px;
}
.navigation-bar {
  font-size: 20px;
  color: #2c3e50;
  margin-top: 0.75rem !important;
  margin-bottom: 0.5rem !important;
  a:visited, a:link {
    color: #2c3e50;
  }
  a:hover {
    color: #ffa500;
  }
}
</style>
