<template>
  <section class="projects-section">
    <div class="main-container">
      <h3 style="text-align: center">Some of my past projects</h3>

      <div class="post-wrapper">
        <div v-for="(project, index) in projects" :key="index">
          <div class="post">
            <img class="thumbnail" :src="project.image" />
            <div class="post-preview">
              <h6 class="post-title">{{ project.title }}</h6>
              <p class="post-intro">
                {{ project.description }}
              </p>
              <a :href="project.link">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Exalted Christ Church International",
          description:
            "Designed, Implemented and mantained a Church Website using Wordpress",
          image: require("../assets/img/ECCi Website.jpg"),
          link: "https://www.exaltedchristchurch.com/",
        },
        {
          title: "k2013 Logistic",
          description:
            "Designed and implemented a wordpress Website for a Logistics Company",
          image: require("../assets/img/k2013Logistic.jpg"),
          link: "https://k2013logistic.co.za",
        },
        {
          title: "Little Billy Goat",
          description:
            "Designed and Developed a wordpress website for a daycare and aftercare center based in Durban",
          image: require("../assets/img/little-billy-goat.jpg"),
          link: "https://www.littlebillygoat.co.za",
        },
        {
          title: "Chara the Journey",
          description:
            "Designed and Developed a blog website using 11ty, HTML, CSS and JavaScript",
          image: require("../assets/img/chara-the-journey.jpg"),
          link: "https://www.charathejourney.com",
        },
        {
          title: "Umkhathi Weather App",
          description:
            "Designed and implemented a simple weather App using Vue and an openweathermap API",
          image: require("../assets/img/weather.jpg"),
          link: "https://umkhathi.netlify.app/",
        },
        {
          title: "Game Library App",
          description:
            "Designed and implemented a Game Library app using a Vue Frontend and Flask backend",
          image: require("../assets/img/games-library.jpg"),
          link: "https://github.com/Barnabas02/Games-Library",
        },

        {
          title: "ECCi Launcher Chrome Extension",
          description:
            " Developed a Chrome Extension for easy access to Exalted Christ Church International media links.",
          image: require("../assets/img/ecci-launcher-extension.jpg"),
          link: "https://github.com/Barnabas02/ecci-launcher",
        },
      ],
    };
  },
};
</script>

<style></style>
