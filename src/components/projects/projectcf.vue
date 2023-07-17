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
          text-align: start;
        "
      >
        <p>
          1- A website that helps the café sell products and helps customers buy
          drinks, make orders and reserve tables.
        </p>
        <div
          class="ThisWillBeTheUserInterfaceItHasBehanceNetGallery164728255ELearningPlatform"
        >
          <p>2- This will be the user interface it has</p>
          <a href="https://www.behance.net/gallery/170701355/ecommerce-cafe">
            https://www.behance.net/gallery/170701355/ecommerce-cafe</a
          >
        </div>
        <p>3- This site helps to increase the number of sales of the café.</p>
        <p>
          4- This site makes making orders easier than contacting via delivery.
        </p>
      </div>
    </div>
    <div
      class="Frame9"
      style="
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        text-align: start;
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
        A website dedicated to cafes and restaurants, buying ready-made food and
        ready-made drinks via the website without the need to contact the
        restaurant or cafe, and the ease of reserving a table inside the
        restaurant and paying via visa when making an order or paying cash.
      </p>
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
          1- Integration with receiving orders by displaying them through the
          database.
        </p>
        <p>
          2- Integration with Paymob to pay for the order via API without seeing
          any details.
        </p>
        <p>
          3- Integration with product presentation and order request as the
          customer likes through additions added to the order.
        </p>
        <p>
          4- It has filtration systems for best-selling products that increase
          customer confidence in the product.
        </p>
      </div>
      <img src="@/assets/imgcf2.jpg" />
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
      <video src="@/assets/videocf.mp4" controls />
    </div>
  </div>
</template>
  <script>
export default {
  name: "project-cf",
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
a {
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