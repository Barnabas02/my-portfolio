<template>
  <div id="app">
    <!-- <Home /> -->
    <router-view />
    <AboutMe />
    <Projects />
    <Contact />    
  </div>
</template>

<script>
// import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default {
  name: "app",
  components: {
    // Home,
    AboutMe,
    Projects,
    Contact,
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "script.js"
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
