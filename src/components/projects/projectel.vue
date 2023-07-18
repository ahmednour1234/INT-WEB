<template>
  <div
    class="Frame5"
    style="
    width: 100%;
        height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
      display: inline-flex;
    "
  >
    <div
      class="WebDevelopExcellentProductsLetSDevelopOneForYou"
      style="text-align: center"
    >
      <h2>
        Web Develop Excellent<br />Products. <br />Let`s Develop One <br />
      </h2>
      <span>For You.</span>
    </div>
    <router-link to="/contact">
      <button type="submit">Start a Project</button>
    </router-link>
  </div>
  <div
    class="Frame13"
    style="
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 36px;
      display: inline-flex;
    "
  >
    <div
      class="Frame8"
      style="
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
        text-align: start;
        gap: 30px;
        display: flex;
      "
    >
      <div
        class="Frame6"
        style="
          justify-content: flex-start;
          align-items: center;
          display: inline-flex;
        "
      >
        <div class="Frame" style="width: 100px; height: 100px">
          <img
            class="Vector"
            style="width: 91.88px; height: 91.88px"
            src="@/assets/logo.png"
          />
        </div>
        <h3>Project background</h3>
      </div>
      <div
        class="Frame7"
        style="
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 45px;
          display: flex;
        "
      >
        <p>
          1- An educational platform that helps students study online without
          attending<br />
          and makes it easier for teachers to give courses, follow up students
          and determine their level.
        </p>
        <div>
          <p>This will be the user interface it has</p>
          <span
            style="
              color: rgba(30, 30, 30, 0.71);
              font-size: 24px;
              font-family: Inter;
              font-weight: 600;
              text-decoration: underline;
              word-wrap: break-word;
            "
          >
          </span
          ><a
            href="https://www.behance.net/gallery/164728255/E-learning-Platform"
          >
            https://www.behance.net/gallery/164728255/E-learning-Platform</a
          >
        </div>
        <p>3- It makes it easier for students to study.</p>
        <p
          style="
            color: rgba(30, 30, 30, 0.71);
            font-size: 24px;
            font-family: Inter;
            font-weight: 600;
            word-wrap: break-word;
          "
        >
          4- Reduces the cost of studying for students and saves teachers'
          effort.
        </p>
        <p>5- Helps you as a teacher to sell a lot of courses.</p>
      </div>
    </div>
    <div
      class="Frame9"
      style="
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        display: flex;
      "
    >
      <div
        class="Frame6"
        style="
          justify-content: flex-start;
          align-items: center;
          display: inline-flex;
        "
      >
        <div class="Frame" style="width: 100px; height: 100px">
          <img
            class="Vector"
            style="width: 91.88px; height: 91.88px"
            src="@/assets/logo.png"
          />
        </div>
        <h3>Project description</h3>
      </div>
      <p>
        An educational platform to give courses online and help students develop
        in the field <br />they want to develop in with the help of course
        nomination algorithms.
      </p>
      <img src="@/assets/imgel.png" />
    </div>
    <div
      class="Frame11"
      style="
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 60px;
        display: flex;
      "
    >
      <div
        class="Frame10"
        style="
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
          display: flex;
        "
      >
        <div class="Frame6" style="align-items: center; display: inline-flex">
          <div class="Frame" style="width: 100px; height: 100px">
            <img
              class="Vector"
              style="width: 91.88px; height: 91.88px"
              src="@/assets/logo.png"
            />
          </div>
          <h3>Core Functionality</h3>
        </div>
        <p>
          1- Integration with verification of the user's identity when entering
          the site by reviewing the database.
        </p>
        <p>
          2- Integration with verify that only the courses registered in it are
          shown to the user in the control panel by reviewing<br />the database.
        </p>
        <p>3- Integration with emails sent to and from students.</p>
        <p>
          4- Helping the user to monitor the courses in which he is registered
          through the control panel.
        </p>
        <p>
          5- Helping admins to delete and add courses and monitor the number of
          students registered in each course.
        </p>
      </div>
      <img src="@/assets/imgel2.png" />
    </div>
    <div
      class="Frame12"
      style="
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        display: flex;
      "
    >
      <div
        class="Frame6"
        style="
          justify-content: flex-start;
          align-items: center;
          display: inline-flex;
        "
      >
        <div class="Frame" style="width: 100px; height: 100px">
          <img
            class="Vector"
            style="width: 91.88px; height: 91.88px"
            src="@/assets/logo.png"
          />
        </div>
        <h3>Project Video</h3>
      </div>
      <video src="@/assets/videoel.mp4" controls />
    </div>
  </div>
</template>
  <script>
export default {
  name: "project-el",
};
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
h2 {
  color: black;
  font-size: 82px;
  font-style: italic;
  font-weight: 900;
  word-wrap: break-word;
}
span {
  color: #1924b5;
  font-size: 82px;
  font-style: italic;
  font-weight: 900;
  word-wrap: break-word;
}
button {
  color: white;
  font-size: 32px;

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
h3 {
  color: black;
  font-size: 40px;

  font-weight: 600;
  word-wrap: break-word;
}
p {
  color: rgba(30, 30, 30, 0.71);
  font-size: 24px;

  font-weight: 600;
  word-wrap: break-word;
  text-align: start;
}
video {
  width: 1000px;
  height: 800px;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
}
a {
  color: #1924b5;
  font-size: 24px;
  font-weight: 600;
  text-decoration: underline;
  word-wrap: break-word;
}
img {
  width: 1280px;
  height: 827px;
}
a{
  text-decoration: none;
}
@media (max-width: 641px) {
  * {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    display: flex;
    overflow: hidden;
    padding:5px;
  }
  h2 {
    font-size: 32px;
  }
  span {
    font-size: 32px;
  }
  button {
    font-size: 24px;
    width: auto;
  }
  p {
    color: rgba(30, 30, 30, 0.71);
    font-size: 15px;
  }
  h3 {
    color: black;
    font-size: 24px;

    font-weight: 600;
    word-wrap: break-word;
  }
  video {
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  }
  a {
    color: #1924b5;
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
    word-wrap: break-word;
  }
  img {
    width: 90%;
    height: 90%;
  }
}
</style>
