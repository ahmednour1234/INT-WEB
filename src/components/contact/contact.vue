<template>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div
    class="Frame88"
    style="
      justify-content: flex-start;
      align-items: center;
      gap: 120px;
      display: inline-flex;
    "
  >
    <div
      class="Frame78"
      style="
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
      "
    >
      <h2>Contact Info</h2>
      <div class="Frame77">
        <div
          class="Frame74"
          style="
            justify-content: center;
            align-items: center;
            gap: 0px;
            display: inline-flex;
          "
        >
          <div
            class="Frame"
            style="width: 50px; height: 50px; position: relative"
          >
            <div
              class="Vector"
              style="
                width: 50px;
                height: 50px;
                left: 0px;
                top: 0px;
                position: absolute;
              "
            ></div>
            <div
              class="Vector"
              style="
                width: 35.87px;
                height: 35.87px;
                left: 7.81px;
                top: 6.32px;
                position: absolute;
                border: 3px rgba(30, 30, 30, 0.85) solid;
              "
            ></div>
          </div>
          <a href="tel:+0201288817121"> +02 01288817121 </a>
        </div>
        <div
          class="Frame75"
          style="
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: inline-flex;
          "
        >
          <div
            class="Frame"
            style="width: 50px; height: 50px; position: relative"
          >
            <div
              class="Vector"
              style="
                width: 50px;
                height: 50px;
                left: 0px;
                top: 0px;
                position: absolute;
              "
            ></div>
            <div
              class="Vector"
              style="
                width: 37.5px;
                height: 34.38px;
                left: 6.25px;
                top: 6.25px;
                position: absolute;
                border: 3px rgba(30, 30, 30, 0.85) solid;
              "
            ></div>
            <div
              class="Vector"
              style="
                width: 37.5px;
                height: 10.94px;
                left: 6.25px;
                top: 18.75px;
                position: absolute;
                border: 3px rgba(30, 30, 30, 0.85) solid;
              "
            ></div>
          </div>
          <a href="mailto:ahmednour5999@gmail.com"> ahmednour5999@gmail.com </a>
        </div>
        <div
          class="Frame76"
          style="
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: inline-flex;
          "
        >
          <div
            class="Frame"
            style="width: 50px; height: 50px; position: relative"
          >
            <div
              class="Vector"
              style="
                width: 50px;
                height: 50px;
                left: 0px;
                top: 0px;
                position: absolute;
              "
            ></div>
            <div
              class="Vector"
              style="
                width: 28.12px;
                height: 0px;
                left: 10.94px;
                top: 45.31px;
                position: absolute;
                border: 3px rgba(30, 30, 30, 0.85) solid;
              "
            ></div>
            <div
              class="Vector"
              style="
                width: 12.5px;
                height: 12.5px;
                left: 18.75px;
                top: 14.06px;
                position: absolute;
                border: 3px rgba(30, 30, 30, 0.85) solid;
              "
            ></div>
            <div
              class="Vector"
              style="
                width: 31.25px;
                height: 40.62px;
                left: 9.38px;
                top: 4.69px;
                position: absolute;
                border: 3px rgba(30, 30, 30, 0.85) solid;
              "
            ></div>
          </div>
          <a> Saba Basha,under construction </a>
        </div>
      </div>
    </div>
  </div>
  <div class="Frame86">
    <h2>Send Your Message</h2>
    <div class="container">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
          required
        />
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Message"
          required
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
  <div
    class="Frame87"
    style="
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      display: flex;
    "
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.2108756094708!2d29.95898747267089!3d31.238068107483116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1688861006123!5m2!1sar!2seg"
      width="100%"
      height="100%"
      style="margin-top: 10px"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "contact-us",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_cichzhg",
          "template_sp6n496",
          this.$refs.form,
          "b9pN4QY6Ank9Qy6Pa"
        )
        .then(
          () => {
            alert("SUCCESS! Your message sent");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #1924b5;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
a {
  text-decoration: none;
}
input[type="submit"]:hover {
  background-color: #1924b5;
}
h2 {
  color: black;
  font-size: 36px;
  font-family: Inter;
  font-weight: 800;
  word-wrap: break-word;
}
.Frame88 {
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20%;
  display: inline-flex;
}
.Frame86 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: inline-flex;
}
.Frame77 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  display: flex;
}
a {
  color: rgba(30, 30, 30, 0.71);
  font-size: 36px;
  font-family: Inter;
  font-weight: 600;
  word-wrap: break-word;
}
@media (max-width: 641px) {
  * {
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    display: flex;
  }
  .container {
    width: auto;
  }
  .Vector {
    visibility: hidden;
  }
  h2 {
    color: black;
    font-size: 24px;
    font-family: Inter;
    font-weight: 800;
    word-wrap: break-word;
  }
  .Frame86 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }
  a {
    color: rgba(30, 30, 30, 0.71);
    font-size: 18px;
    word-wrap: break-word;
  }
  .Frame77 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }
}
</style>