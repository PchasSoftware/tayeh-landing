<template>
  <div class="Footer pb-3">
    <div class="container">
      <ul class="nav ty-flex ty-flex-wrap ty-space-between">
        <router-link
          class="nav-item"
          v-for="(it, index) in items"
          :to="it.link"
          :key="index"
        >
          {{ it.label }}
        </router-link>
      </ul>
      <div class="mt-4 text-center">
        <a href="https://pchas.ir" target="_blank">
          <img
            alt="پیچاز"
            width="185"
            src="https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/pchas.svg"
          />
        </a>
        <div class="fs-12 fw-300 mt-3">
          <span>طراحی شده با</span>
          <i class="ty-icon ty-icon-heart fs-10 ty-color-danger mx-2" />
          <span>در استودیو پیچاز</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      items: [
        { label: "تعرفه ها", link: "/prices" },
        { label: "برای توسعه دهندگان", link: "/login?next=/developers" },
        { label: "پشتیبانی", link: "/support" },
        { label: "مستندات", link: "/docs" },
        { label: "درباره ما", link: "/about-us" },
        // {label: "تماس با ما", link: "/contact-us"},
      ],
    };
  },
};
</script>

<style scoped>
.Footer {
  margin-top: 100px;
  background-color: #f8f8f8;
}
.Footer > .container {
  width: 45%;
  margin: 0 auto;
}
.Footer > .container > .nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.Footer > .container > .nav > .nav-item {
  text-decoration: none;
  padding: 15px 10px;
  border-top: 2px solid transparent;
  font-size: 14px;
  font-weight: 300px;
  transition: 0.5s;
}
.nav-item a:hover {
  text-decoration: none;
}
.Footer > .container > .nav > .nav-item:hover {
  color: #0e7cd7;
  border-top: 2px solid #0e7cd7;
}
@media (max-width: 1024px) {
  .Footer > .container {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .Footer > .container {
    width: 80%;
  }
  .Footer > .container > .nav {
    justify-content: space-around;
  }
}
@media (max-width: 425px) {
  .Footer {
    margin-top: 70px;
  }
  .Footer > .container {
    width: 90%;
  }
}
</style>