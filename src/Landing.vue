<template>
  <div>
    <FullHeader/>
    <Services v-if="!loading"/>
    <Posts v-if="!loading"/>
    <Businesses v-if="!loading"/>
    <Blog v-if="!loading"/>
    <Footer/>
  </div>
</template>

<script>
import FullHeader from "./components/Landing/FullHeader/FullHeader";
import Footer from "./components/Landing/Footer";
import Blog from './components/Landing/Blog/Blog';
import Posts from './components/Landing/Posts/Posts';
import Services from './components/Landing/Services/Services';
import Businesses from './components/Landing/TopBusinesses/Businesses';

export default {
  name: "Landing",
  components: {
    FullHeader,
    Services,
    Posts,
    Blog,
    Businesses,
    Footer
  },
  data () {
    return {
      loading: true
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.loading = false;
      }
    }
  }
};
</script>