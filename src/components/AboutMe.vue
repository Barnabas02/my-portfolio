<template>
  <section class="s2">
    <div class="main-container">
      <div class="about-wrapper">
        <div class="about-me">
          <h4>More about me</h4>

          <p>
            I'm a Computer Engineer by Qualification and a qualified AWS Certified Cloud practitioner.
            I have worked on various projects using multiple programming
            languages including C, C++, Java, Python and MATLAB among others. I
            am passionate about technology and willing to solve any task
            presented to me.
          </p>

          <hr />

          <h4>TOP EXPERTISE</h4>

          <p>
            Software and Web Development.
            <a target="_blank" title="Barnabas Tinarwo Resume" href="Barnabas-Tinarwo-CV.pdf"
              >Check out my Resume</a
            >
          </p>

          <div id="skills">
            <ul>
              <li>Webflow</li>
              <li>Django</li>
              <li>Python</li>
              <li>WordPress</li>
              <li>Figma</li>
              <li>Vue.JS</li>    
              <li>HTML/CSS</li>                       
            </ul>

            <ul>
              <li>C</li>     
              <li>C++</li>              
              <li>MATLAB</li>
              <li>Oracle PL/SQL</li>
              <li>Oracle Forms</li>
              <li>SQL</li>
              <li>Bash Scripting</li>              
            </ul>
          </div>
        </div>

        <div class="social-links">
          <img id="social_img" src="../assets/img/follow.jpg" />
          <h3>Follow me on Social Media</h3>

          <a
            target="_blank"
            title="LinkedIn"
            href="https://www.linkedin.com/in/barnabas-tinarwo"
          >
            <i class="fab fa-linkedin-in"></i
          ></a>
          <br>
          <a target="_blank" title="GitHb" href="https://github.com/Barnabas02"
            ><i class="fab fa-github"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.contact-icon {
  height: 15px;
}
.social-links a{
  font-size: 30px;
}
</style>
