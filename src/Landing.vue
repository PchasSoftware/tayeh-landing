<template>
  <div>
    <FullHeader v-once/>
    <Services/>
    <Posts/>
    <Businesses/>
    <Blog/>
    <Footer v-once/>
  </div>
</template>

<script>
import FullHeader from "./components/Landing/FullHeader/FullHeader";
import Footer from "./components/Landing/Footer";

export default {
  name: "Landing",
  components: {
    FullHeader,
    Services: () => import('./components/Landing/Services/Services'),
    Posts: () => import('./components/Landing/Posts/Posts'),
    Blog: () => import('./components/Landing/Blog/Blog'),
    Businesses: () => import('./components/Landing/TopBusinesses/Businesses'),
    Footer
  },
};
</script>