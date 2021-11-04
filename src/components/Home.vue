<template>
  <div>
    <section class="s1">
      <div class="main-container">
        <div class="greeting-wrapper">
          <h1>Hi, I'm Barnabas Tinarwo</h1>
        </div>
        <div class="intro-wrapper">
          <div class="nav-wrapper">
            <div class="dots-wrapper">
              <div id="dot-red" class="browser-dot"></div>
              <div id="dot-yellow" class="browser-dot"></div>
              <div id="dot-green" class="browser-dot"></div>
            </div>
            <ul id="navigation">
              <li>
                <a href="#contact" @click="scrollTo('#contact')">Contact</a>
              </li>
            </ul>
          </div>
          <div class="left-column">
            <img id="profile_pic" src="../assets/img/profile.jpg" />
            <h5 style="text-align: center; line-height: 0">
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" class="theme-dot"></div>
              <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
              <div data-mode="green" id="green-mode" class="theme-dot"></div>
              <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
            </div>

            <p id="settings-note">
              *Theme settings will be saved for<br />your next visit
            </p>
          </div>
          <div class="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-top-left" class="corner"></div>
                <div id="corner-top-right" class="corner"></div>
                <h3>What I Do</h3>
                <p>I design and implement software solutions</p>
                <div id="corner-bottom-left" class="corner"></div>
                <div id="corner-bottom-right" class="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
