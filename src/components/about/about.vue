<template>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div
    style="
    width:100%;
    height:100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20%;
      display: inline-flex;
    "
  >
    <div style="text-align: center; margin-botoom:10px;">
      <h3>WEB APPS DEVELOPMENT <br />FOR YOUR <br /><span>BUSINESS</span></h3>
    </div>
    <router-link to="/contact">
      <button type="submit">Start a Project</button>
    </router-link>
  </div>
  <div
    style="
      flex-direction: column;
      align-items: flex-start;
      gap: 20%;
      display: inline-flex;
    "
  >
    <div
      class="Frame7"
      style="
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20%;
        display: inline-flex;
      "
    >
      <h2 class="AboutUs">About us</h2>
      <div
        class="Frame6"
        style="
          justify-content: center;
          align-items: flex-start;
          gap: 20%;
          display: inline-flex;
          text-align: start;
        "
      >
        <p>
          We are a web programming company The company was established in 2022
          We are a startup, but we have gone through many projects The founder
          of the company, Ahmed Nour, who is the owner and CEO of the company
          Our company is one of the few companies that use many programming
          languages and modern technology in order to implement projects.
        </p>
        <img class="Image1" src="@/assets/imgab1.png" />
      </div>
    </div>
    <div
      class="Frame8"
      style="
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20%;
        display: inline-flex;
      "
    >
      <h2>Web Development</h2>
      <div
        class="Frame6"
        style="
          justify-content: center;
          align-items: flex-start;
          gap: 20%;
          display: inline-flex;
          text-align: start;
        "
      >
        <p>
          We will create your website for you with the features that you request
          and specify and we will recommend some forms that will help you in
          choosing and there will be a follow-up to the site and we will help
          you solve the problems that you may face and we will use modern
          technologies to help us create a suitable site for the specifications
          that you specify at reasonable prices .
        </p>
        <img class="Image2" src="@/assets/imgab2.png" />
      </div>
    </div>
    <div
      class="Frame9"
      style="
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20%;
        display: inline-flex;
      "
    >
      <h2>Wordpress Customization</h2>
      <div
        class="Frame6"
        style="
          justify-content: center;
          align-items: flex-start;
          gap: 20%;
          display: inline-flex;
          text-align: start;
        "
      >
        <p>
          WordPress is a platform that will help us in making professional
          websites without writing any line of code because it contains
          ready-made templates, as it has many advantages within two companies,
          as it is cheaper than projects that contain pure code, so it can be
          used in projects that do not care about security.
        </p>
        <img class="Image2" src="@/assets/imgab1.png" />
      </div>
    </div>
    <div
      class="Frame10"
      style="
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20%;
        display: inline-flex;
      "
    >
      <div class="WhyChooseInt">
        <h2
          style="
            color: black;
            font-size: 40px;
            font-family: Inter;
            word-wrap: break-word;
          "
        >
          Why Choose
          <span
            style="
              color: #1924b5;
              font-size: 40px;
              font-family: Inter;
              word-wrap: break-word;
            "
            >INT?</span
          >
        </h2>
        <span
          style="
            color: black;
            font-size: 40px;
            font-family: Inter;
            word-wrap: break-word;
          "
        >
        </span>
      </div>
      <div
        class="Frame6"
        style="
          justify-content: center;
          align-items: flex-start;
          gap: 20%;
          display: inline-flex;
          text-align: start;
        "
      >
        <span
          style="
            color: #1924b5;
            font-size: 32px;
            font-family: Inter;
            word-wrap: break-word;
          "
          >INT
          <p>
            will help you create your site at the lowest prices and the best
            quality, and also will help you modify your site easily and will
            follow up with you for a period of time that may reach a year to
            make sure that the site works with high quality and to ensure that
            there are no malfunctions and periodic maintenance during the first
            year is free and will provide you with a free domain for 6 months to
            try your site for free and because int has not a little experience
            in the field of web programming.
          </p>
        </span>
        <img class="Image3" src="@/assets/imgab3.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about-us",
};
</script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
h2 {
  color: black;
  font-size: 40px;
  font-weight: 800;
  word-wrap: break-word;
}
p {
  color: rgba(30, 30, 30, 0.71);
  font-size: 32px;
  word-wrap: break-word;
}
h3 {
  color: black;
  font-size: 96px;
  font-family: Inter;
  font-style: italic;
  font-weight: 900;
  word-wrap: break-word;
}
span {
  color: #1924b5;
  font-size: 96px;
  font-family: Inter;
  font-style: italic;
  font-weight: 900;
  word-wrap: break-word;
}
button {
  color: white;
  font-size: 32px;
  font-family: Inter;
  font-weight: 500;
  word-wrap: break-word;
  background: #1924b5;
  border-radius: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  display: inline-flex;
}
a{
  text-decoration: none;
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
  h3 {
    font-size: 32px;
  }
  p {
      Padding:5px;
    font-size: 15px;
  }
  span {
    font-size: 24px;
  }
  h2 {
    font-size: 24px;
  }
  button {
    color: white;
    font-size: 24px;
    font-family: Inter;
    font-weight: 500;
    word-wrap: break-word;
    background: #1924b5;
    border-radius: 20px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: auto;
    display: inline-flex;
  }
}
@media (max-width: 300px) {
  * {
    padding-left: 10px;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 48px;
  }
  p {
    font-size: 24px;
  }
  span {
    font-size: 15px;
  }
  button {
    color: white;
    font-size: 24px;
    font-family: Inter;
    font-weight: 500;
    word-wrap: break-word;
    background: #1924b5;
    border-radius: 20px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: auto;
    display: inline-flex;
  }
}
</style>
