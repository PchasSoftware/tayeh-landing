<template>
  <div class="Services" id="Services">
    <div class="text-center mb-5">
      <h2 class="fw-500 my-0">خدمات ما</h2>
      <p class="fw-300 mt-2">
        با ثبت نام در تایه به تمامی امکانات زیر در پنل کاربری خود دسترسی دارید
      </p>
    </div>
    <ty-row :gutter="10">
      <ty-col
        :xs="24"
        :sm="12"
        :md="6"
        :lg="6"
        :xl="6"
        v-for="(item, index) in services"
        :key="index"
      >
        <Service :title="item.title" :explain="item.explain" :img="item.img" />
      </ty-col>
    </ty-row>
  </div>
</template>

<script>
import Service from "./Service";
import ServicesObject from "../../../assets/jsons/Services.json";
export default {
  name: "FullHeader",
  components: {
    Service,
  },
  data() {
    return {
      services: [],
    };
  },
  methods: {
    getServices() {
      this.services = ServicesObject;
    }
  },
  mounted() {
    this.getServices()
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Services {
  width: 85%;
  margin: 0 auto;
  padding-top: 80px;
}
@media (max-width: 425px) {
  .Services {
    width: 85%;
    margin: 0 auto;
    padding-top: 0px;
  }
}
</style>