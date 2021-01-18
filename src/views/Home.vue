<template>
  <div class="mt-5 home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span class="ty-flex ty-justify-center">
      <div>{{name}}</div>
      <div>فامیلی</div>
    </span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'سعید'
    }
  },
  methods: {

  },
  created() {

  },
}
</script>
<style scoped>

</style>