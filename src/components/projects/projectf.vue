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
      padding-left: 0px;
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
          1- A website to display matches and purchase products for Zamalek
          Club, and send messages of support to the player.
        </p>
        <div>
          <p>2- This will be the user interface it has</p>
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
            href="https://www.behance.net/gallery/163958023/Ui-Website-Football"
          >
            https://www.behance.net/gallery/163958023/Ui-Website-Football</a
          >
        </div>
        <p>2- This site is dedicated to Zamalek fans in the most.</p>
        <p>
          3- This website makes it easy for Zamalek fans to buy their club's
          products.
        </p>
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
        A website dedicated to buying Zamalek club products, following up the
        club's matches in various tournaments, and sending messages of support
        to the club's players in various games.
      </p>
      <img class="Image4" src="@/assets/imgf1.png" />
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
          justify-content: flex-start;
          align-items: flex-start;
          gap: 40px;
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
          <h3>Core Functionality</h3>
        </div>
        <p>
          1- Integration with verify that only the courses registered in it are
          shown to the user in the control panel by reviewing<br />the database.
        </p>
        <p>2- Integration with viewing matches via Abi Live.</p>
        <p>3- Helps Zamalek fans to easily buy club products.</p>
        <p>
          4- It helps Zamalek fans to follow all the team's sports and find out
          about the club's news.
        </p>
      </div>
      <img class="Image5" src="@/assets/imgf2.png" />
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
      <video class="Image6" src="@/assets/videof.mp4" controls />
    </div>
  </div>
</template>
<script>
export default {
  name: "project-f",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  color: black;
  font-size: 82px;
  font-family: Inter;
  font-style: italic;
  font-weight: 900;
  word-wrap: break-word;
}
span {
  color: #1924b5;
  font-size: 82px;
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
h3 {
  color: black;
  font-size: 40px;
  font-family: Inter;
  font-weight: 600;
  word-wrap: break-word;
}
p {
  color: rgba(30, 30, 30, 0.71);
  font-size: 24px;
  font-family: Inter;
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
  font-family: Inter;
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
    overflow: hidden;
    justify-content: center;
    display: flex;
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
    font-size: 18px;
  }
  h3 {
    color: black;
    font-size: 24px;
    font-family: Inter;
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
    font-family: Inter;
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