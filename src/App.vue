<template>
  <header class="header scroll-header" id="header">
    <nav class="nav container">
      <div class="hide">
        <div class="logoimg">
          <img src="@/assets/logo.png" />
          <h1>INT</h1>
        </div>
        <div class="nav_toggle" id="nav-toggle">
          <i class="bx bx-menu" @click="openMenu"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              /></svg
          ></i>
        </div>
      </div>
      <div class="nav_menu" id="nav-menu">
        <router-link
          to="/"
          style="
            color: black;
            text-decoration: none;
            font-size: 24px;
            font-family: Inter;
            font-weight: 700;
            word-wrap: break-word;
          "
          >Services</router-link
        >
        <router-link
          to="/about"
          style="
            color: black;
            text-decoration: none;
            font-size: 24px;
            font-family: Inter;
            font-weight: 700;
            word-wrap: break-word;
          "
          >About Us</router-link
        >
        <router-link
          to="/career"
          style="
            color: black;
            text-decoration: none;
            font-size: 24px;
            font-family: Inter;
            font-weight: 700;
            word-wrap: break-word;
          "
          >Career</router-link
        >
        <router-link
          to="/contact"
          style="
            color: black;
            text-decoration: none;
            font-size: 24px;
            font-family: Inter;
            font-weight: 700;
            word-wrap: break-word;
          "
          >Contact Us</router-link
        >
      </div>
      <router-link to="/contact">
        <button
          type="submit"
          style="
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
          "
        >
          Start a Project
        </button>
      </router-link>
    </nav>
  </header>
  <router-view />
</template>
<script>
export default {
   head: {
       link: [
             {
                 rel: "icon",
                 href: require("./assets/logo.png")
             },
          ]
       }
   },
  name: "HelloWorld",
  methods: {
    openMenu() {
      const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

        if (toggle && nav) {
          nav.classList.toggle("show-menu");
        }
      };
      showMenu("nav-toggle", "nav-menu");

      const sections = document.querySelectorAll("section[id]");
      function scrollActive() {
        const scrollY = window.pageYOffset;
        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionId = current.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector(".nav_menu a[href*=" + sectionId + "]")
              .classList.add("active-link");
          } else {
            document
              .querySelector(".nav_menu a[href*=" + sectionId + "]")
              .classList.remove("active-link");
          }
        });
      }
      window.addEventListener("scroll", scrollActive);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  align-items: center;
  gap: 30px;
  display: inline-flex;
  padding-left: 10%;
  padding-top: 5px;
}
h1 {
  color: #1924b5;
  font-size: 64px;
  font-family: Inter;
  font-weight: 900;
  word-wrap: break-word;
}
.nav_menu {
  justify-content: center;
  align-items: center;
  gap: 60px;
  display: flex;
}
img {
  width: 91.88px;
  height: 91.88px;
}
i {
  visibility: hidden;
}
.logoimg {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
}
.hide {
  justify-content: center;
  align-items: center;
  display: flex;
}
a {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  * {
    align-items: center;
    overflow: hidden;
    justify-content: center;
    display: flex;
  }
  i {
    visibility: visible;
  }
  nav {
    gap: 0px;
    display: inline-flex;
    padding-top: 0px;
    padding-left: 10px;
    height:100px;
  }
  .hide {
    gap: 150px;
  }
  h1 {
    font-size: 32px;
    font-weight: 900;
    word-wrap: normal;
  }
  button {
    visibility: hidden;
  }
  .nav_menu {
    background: white;
    position: fixed;
    /* top: var(--header-height); */
    top: -200%;
    right: 0%;
    width: 50%;
    height: auto;
    margin-top: 70%;
    margin-right: 0%;
    transition: 0.7s;
    text-align: start;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    gap: 20px;
    flex-direction: column;
  }
  .nav_toggle {
    font-size: 1rem;
    flex-direction: column;
  }
  .show-menu {
    top: var(--header-height);
  }
  .active-link {
    color: var(--first-color);
  }
  .scroll-header {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
