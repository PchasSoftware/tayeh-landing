<template>
  <div class="Footer pb-3">
    <div class="container">
      <ul class="nav ty-flex ty-flex-wrap ty-space-between">
        <li class="nav-item" v-for="(it, index) in items" :key="index">
          {{ it }}
        </li>
      </ul>
      <div class="mt-4">
        <div class="pchas-part"></div>
        <div class="ty-flex fs-12 fw-300 last-line ty-justify-center mt-3">
          <span>طراحی شده با </span>
          <!-- <div class="heart"></div> -->
          <i class="ty-icon ty-icon-heart fs-10 ty-color-danger mx-2"/>
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
        "تعرفه ها",
        "برای توسعه دهندگان",
        "پشتیبانی",
        "مستندات",
        "درباره ما",
        "تماس با ما",
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
  padding: 15px 10px;
  border-top: 2px solid transparent;
  font-size: 14px;
  font-weight: 300px;
  transition: 0.5s;
}
.Footer > .container > .nav > .nav-item:hover {
  color: #0e7cd7;
  border-top: 2px solid #0e7cd7;
}
.Footer > .container .pchas-part {
  width: 185px;
  height: 54px;
  background: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/pchas.svg")
    no-repeat;
  background-size: cover;
  margin: 0 auto;
}
.Footer > .container .last-line {
  align-items: center;
  position: relative;
  right: 15px;
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
  .Footer{
    margin-top: 70px;
  }
  .Footer > .container {
    width: 90%;
  }
}
</style>