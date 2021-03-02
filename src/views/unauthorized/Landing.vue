<template>
  <div>
    <FullHeader />
    <Services />
    <Posts />
    <Businesses />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import FullHeader from "@/components/Landing/FullHeader/FullHeader";
import Services from "@/components/Landing/Services/Services";
import Posts from "@/components/Landing/Posts/Posts";
import Blog from "@/components/Landing/Blog/Blog";
import Businesses from "@/components/Landing/TopBusinesses/Businesses";
import Footer from "@/components/Landing/Footer";

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
};
</script>