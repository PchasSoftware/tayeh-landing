<template>
  <div class="full-screen">
    <Header />
    <HeaderView />
  </div>
</template>

<script>
import Header from "./Header.vue";
import HeaderView from "./HeaderView.vue";

export default {
  name: "FullHeader",
  components: {
    Header,
    HeaderView
  },
};
</script>

<style scoped>
.full-screen{
  background-image: linear-gradient(to bottom, #f9f9f9 30%, #ffffff);
}
</style>