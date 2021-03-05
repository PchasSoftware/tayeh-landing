<template>
  <div class="BlogPost">
    <div class="img-part"></div>
    <div class="px-2 mx-1 text-center">
      <h5 class="fs-14 fw-500 mb-0 mt-3">
        {{ title }}
      </h5>
      <p class="fs-12 fw-300 par">
        {{ explain }}
      </p>
    </div>
    <div class="details ty-flex ty-space-between mt-3 fs-10">
      <div class="date">{{ date }}</div>
      <button class="btn-more fs-10">مشاهده مطلب</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["title", "explain", "img", "date", "link"],
  data() {
    return {
      static_server:
        "https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/",
    };
  },
};
</script>

<style scoped>
.BlogPost {
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 15px;
  transition: 0.2s;
}
.BlogPost:hover {
  border: 1px solid #f2f2f2;
  box-shadow: 0 15px 100px 0 rgba(18, 19, 26, 0.05);
  transform: scale(1.02);
}
.BlogPost > .img-part {
  width: 100%;
  height: 140px;
  background: url("../../../assets/images/Screen1.jpg") no-repeat;
  background-size: cover;
}
.BlogPost .par {
  color: #aaaaaa;
  line-height: 24px;
}
.BlogPost .details {
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
}
.BlogPost:hover .details {
  visibility: visible;
  opacity: 1;
}
.BlogPost .date {
  color: #aaaaaa;
  padding-right: 19px;
  line-height: 20px;
  background: url("../../../assets/images/calendar.svg") no-repeat;
  background-position-x: 100%;
}
.BlogPost .btn-more {
  color: #0e7cd7;
  border: none;
  padding-left: 19px;
  background: url("../../../assets/images/more.svg") no-repeat;
  background-position: 0% 80%;
}
@media (max-width: 425px) {
  .BlogPost {
    width: 85%;
    margin: 0 auto;
    border: 1px solid #f2f2f2;
    box-shadow: 0 15px 100px 0 rgba(18, 19, 26, 0.05);
    transition: 0s;
    margin-top: 25px;
  }
  .BlogPost:hover {
    transform: scale(1);
  }
  .BlogPost .details {
    visibility: visible;
    opacity: 1;
    transition: 0s;
  }
}
</style>