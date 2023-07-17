<template>
  <div
    style="
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:30px;
      display: inline-flex;
    "
  >
  <div style="text-align: center; margin-botoom:10px;">
      <h2
        >WEB APPS DEVELOPMENT <br />FOR YOUR <br /><span
        >BUSINESS</span
      >
      </h2
      >
    </div>
    <router-link to="/contact">
    <button
      type="submit"
    >
      Start a Project
    </button>
  </router-link>
  </div>
    <div
      class="Frame12"
      style="
      padding-top:10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 111px;
        display: inline-flex;
      "
    >
      <div
        class="Frame8"
        style="
          justify-content: center;
          align-items: center;
          gap: 168px;
          display: inline-flex;
        "
      >
        <div
          class="Frame6"
          style="
            padding-left: 39px;
            padding-right: 39px;
            border: 1.5px rgba(30, 30, 30, 0.32) solid;
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: flex;
          "
        >
          <div
            class="Frame7"
            style="
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 33px;
              display: inline-flex;
            "
          >
            <img
         
              src="@/assets/imgel2.png"
            />
            <h3
            >
              Platform E-learning
            </h3>
            <div
              class="AnOnlineEducationalPlatformWithoutTheNeedForStudentsToGoDownReadMore"
              style="width:auto; text-align: center"
            >
              <div class="desc"
                >An online educational platform without the need for students to
                go down. </div
              ><router-link to="/projectel"
              
                >Read More<br
              /></router-link>
            </div>
          </div>
        </div>
        <div
          class="Frame7"
          style="
            padding-left: 39px;
            padding-right: 39px;
            border: 1.5px rgba(30, 30, 30, 0.32) solid;
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: flex;
          "
        >
          <div
            class="Frame7"
            style="
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 33px;
              display: inline-flex;
            "
          >
            <img
         
              src="@/assets/imgf1.png"
            />
            <h3
            >
              Website Zamalek
            </h3>
            <div
              class="AWebsiteToWatchZamalekMatchesViaApiLiveReadMore"
              style="width:auto; text-align: center"
            >
              <div class="desc"
                >A website to watch Zamalek matches via API Live.<br /></div
              ><router-link to="/projectf"
                >Read More<br
              /></router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="Frame9"
        style="
          justify-content: center;
          align-items: center;
          gap: 168px;
          display: inline-flex;
        "
      >
        <div
          class="Frame6"
          style="
            padding-left: 39px;
            padding-right: 39px;
            border: 1.5px rgba(30, 30, 30, 0.32) solid;
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: flex;
          "
        >
          <div
            class="Frame7"
            style="
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 33px;
              display: inline-flex;
            "
          >
            <img
     
              src="@/assets/imgcf1.jpg"
            />
            <h3
            >
              Website Cafe
            </h3>
            <div
              class="AWebsiteToSellCafProductsAndToMakeOrdersOverTheInternetReadMore"
              style="width: auto; text-align: center"
            >
              <div class="desc"
                >A website to sell café products and to make orders over the
                Internet.<br /></div
              ><router-link to="/projectcf"
        
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="Frame7"
          style="
            padding-left: 39px;
            padding-right: 39px;
            border: 1.5px rgba(30, 30, 30, 0.32) solid;
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: flex;
          "
        >
          <div
            class="Frame7"
            style="
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 33px;
              display: inline-flex;
            "
          >
            <img
         
              src="@/assets/image4.png"
            />
            <h3
            >
              Platform E-learning
            </h3>
            <div
              class="AnOnlineEducationalPlatformWithoutTheNeedForStudentsWithWordpressReadMore"
              style="width:auto; text-align: center"
            >
              <div class="desc"
                >An online educational platform without the need for students
                with wordpress.<br /> </div
              ><router-link to="/projectwel"
                >Read More<br
              /></router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="Frame11"
        style="
          justify-content: center;
          align-items: center;
          gap: 168px;
          display: inline-flex;
        "
      >
        <div
          class="Frame6"
          style="
            padding-left: 39px;
            padding-right: 39px;
            border: 1.5px rgba(30, 30, 30, 0.32) solid;
            justify-content: center;
            align-items: center;
            gap: 10px;
            display: flex;
          "
        >
          <div
            class="Frame7"
            style="
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 33px;
              display: inline-flex;
            "
          >
            <img
              src="@/assets/image1.png"
            />
            <h3
            >
              E-commerce Online
            </h3>
            <div
              class="AWebsiteForTradeAndElectronicSaleForTradeAndTheWorkOfOrdersReadMore"
              style="width:auto; text-align: center"
            >
              <div class="desc"
                >A website for trade and electronic sale for trade and the work
                of orders.<br /></div
              ><router-link to="/projectwec"
                >Read More<br
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "career-er",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
  text-decoration: none;
}
    p{
      color: rgba(30, 30, 30, 0.71);
            font-size: 32px;
            word-wrap: break-word;
    }
    span{
      color: #1924b5;
          font-size: 96px;
          font-family: Inter;
          font-style: italic;
          font-weight: 900;
          word-wrap: break-word;
    }
    h2{
      color: black;
          font-size: 96px;
          font-family: Inter;
          font-style: italic;
          font-weight: 900;
          word-wrap: break-word;
    }
    .desc{
                  color: rgba(30, 30, 30, 0.71);
                  font-size: 32px;
          
    }
    h3{
      color: black;
                font-size: 36px;
                font-family: Inter;
                font-weight: 800;
                word-wrap: break-word;
    }
    a{
      color: #1924b5;
                  font-size: 32px;
                  font-family: Inter;
                  font-weight: 600;
                  word-wrap: break-word;
    }
    img{
      width: 400px; 
      height: 268px;
    }
    button{
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
@media (max-width:641px){
      *{
        flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    display: flex;
      }
      h2{
        font-size:48px ;
      }
    p{
      font-size: 24px;
    }
    span{
      font-size: 32px;
    }
    .desc{
      font-size: 18px;
    }
    h3{
      color: black;
                font-size: 24px;
                font-family: Inter;
                word-wrap: break-word;
    }
    a{
      color: #1924b5;
                  font-size: 20px;
                  font-family: Inter;
                  font-weight: 600;
                  word-wrap: break-word;
    }
    img{
      width:80%; height: 80%;
    }
    button{
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
    @media (max-width:300px){
      *{
        padding-left:10px ;
        flex-direction: column;
            align-items: center;
      }
      h3{
        font-size:48px;
      }
    p{
      font-size: 24px;
    }
    span{
      font-size: 48px;
    }
    .desc{
      font-size: 12px;
    }
    }
</style>