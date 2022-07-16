<template>
  <div class="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <title-component></title-component>
    <profile-component></profile-component>
    <education-component></education-component>
    <publication-component></publication-component>
    <work-exp-component></work-exp-component>
    <skills-component></skills-component>
    <footer-component></footer-component>
    <div >
    </div>
  </div>
</template>


<script>
import Title from './components/Title.vue'
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Publication from './components/Publication.vue'
import WorkExperience from './components/WorkExperience.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    "title-component": Title,
    "profile-component": Profile,
    "education-component": Education,
    "publication-component": Publication,
    "work-exp-component": WorkExperience,
    "skills-component": Skills,
    "footer-component": Footer,
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import "./styles/style.sass";
.app {
  font-family: 'Futura', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 10px;
  margin-right: 10px;
}
.normal-width {
  max-width: 600px;
}
.center {
  text-align: center;
}
.center {
  text-align: left;
}
.section-title {
  font-size: 30px;
  position: relative;
  text-align: left;
  margin-bottom: 4px;
}
.element {
  margin-bottom: 30px;
  .section-subtitle {
    font-size: 20px;
    position: relative;
    margin-bottom: 5px;
    margin-left: 20px;
    text-align: left;
  }
  .table-container {
    margin: 20px;
  }
  .item {
  }
}
.nowrap-table {
  @extend .table;
  white-space: nowrap;
}
</style>
