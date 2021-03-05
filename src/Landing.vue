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
import Blog from './components/Landing/Blog/Blog';

export default {
  name: "Landing",
  components: {
    FullHeader,
    Services: () => import('./components/Landing/Services/Services'),
    Posts: () => import('./components/Landing/Posts/Posts'),
    Blog,
    Businesses: () => import('./components/Landing/TopBusinesses/Businesses'),
    Footer
  },
};
</script>