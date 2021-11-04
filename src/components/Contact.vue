<template>
  <div class="contact">
    <section class="s2">
      <div class="main-container">
        <a href=""></a>
        <h3 style="text-align: center">Get In Touch</h3>

        <form ref="form" id="contact-form" @submit.prevent="sendEmail">
          <!-- <a name="contact"></a> -->

          <label>Name</label>
          <input class="input-field" type="text" name="sender" />

          <label>Subject</label>
          <input class="input-field" type="text" name="subject" />

          <label>Email</label>
          <input class="input-field" type="text" name="email" />

          <label>Message</label>
          <textarea class="input-field" name="message"></textarea>

          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "Contact",
  methods: {
    sendEmail() {
      emailjs.sendForm('service_ltpiqkv', 'template_f67hrz9', this.$refs.form, 'user_9JZ1CCmPE0MfzHCdZUSgE')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
      this.$refs.form.reset(); 
    }
  }
};
</script>

<style></style>
