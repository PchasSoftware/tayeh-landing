<template>
  <div class="Businesses">
    <div class="top-section ty-flex ty-flex-wrap">
      <div class="right-side pt-4 text-left">
        <h3 class="post-head fs-22 fw-500 mb-0 mr-auto">
          کسب و کارهای برتر تایه
        </h3>
        <p class="fw-300 par mt-3 mr-auto">
          داستان کسب و کارهایی که از تایه استفاده کرده اند را میتوانید در این
          بخش بخوانید؛ جای شما در این بخش خالیست...
        </p>
      </div>
      <div class="left-side">
        <div class="outer-box">
          <div class="inter-box">
            <Slider :businesses="businesses" :right="right" />
          </div>
        </div>
        <div class="arrows ty-flex ty-gap-10">
          <ty-button
            class="right-icon arrow-ic"
            radius="10px"
            icon="ty-icon-arrow-right"
            @click="rightHandler"
          />
          <ty-button
            class="left-icon arrow-ic"
            radius="10px"
            icon="ty-icon-arrow-left"
            @click="leftHandler"
          />
        </div>
      </div>
    </div>
    <div class="bottom-section ty-flex">
      <div class="data-bound">
        <div class="jobs ty-flex ty-flex-wrap ty-space-between">
          <JobsState
            v-for="(item, index) in states"
            :key="index"
            :title="item.title"
            :value="item.value"
            :icon="item.icon"
            :span="item.span"
            :span_value="item.span_value"
          />
        </div>
        <p class="bottom-par fs-20 fw-500 text-center">
          همین حالا به این جمع بپیوندید و فروشگاه خود را حرفه ای مدیریت کنید
        </p>
        
        <div class="mt-5 text-center">
          <router-link to="/login">
          <button class="btn-start fs-18 fw-500">رایگان شروع کنید</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import JobsState from "./JobsState";
import BusinessesObject from "../../../assets/jsons/Businesses.json";
export default {
  name: "Businesses",
  components: {
    Slider,
    JobsState,
  },
  data() {
    return {
      right: 0,
      businesses: [],
      states: [],
    };
  },
  methods: {
    leftHandler() {
      if (this.right === (this.businesses.length - 1) * -100) {
        this.right = 0;
      } else {
        this.right = this.right - 100;
      }
    },

    rightHandler() {
      if (this.right === 0) {
        this.right = (this.businesses.length - 1) * -100;
      } else {
        this.right = this.right + 100;
      }
    },
    getBusinesses() {
      this.businesses = BusinessesObject.businesses;
    },
    getStates() {
      this.states = BusinessesObject.states;
    },
  },
  mounted() {
    this.getBusinesses();
    this.getStates();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Businesses {
  padding-top: 20px;
}
.Businesses > .top-section {
  position: relative;
  top: 80px;
}
.Businesses > .top-section > .right-side {
  width: 43%;
  padding: 0 25px;
}
.Businesses > .top-section > .left-side {
  width: 57%;
  padding: 0 25px;
  position: relative;
}
.Businesses > .top-section > .right-side > .post-head {
  max-width: 400px;
  background-image: linear-gradient(180deg, #409eff, #004e8f);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.Businesses > .top-section > .right-side > .par {
  max-width: 395px;
  line-height: 30px;
}
.Businesses > .top-section > .left-side > .outer-box {
  width: 570px;
  height: 290px;
  box-shadow: 0 15px 100px 0 rgba(18, 19, 26, 0.05);
  border-radius: 10px;
  margin-right: 32px;
  background-color: #ffffff;
}
.Businesses > .top-section > .left-side > .outer-box > .inter-box {
  width: 570px;
  height: 290px;
  box-shadow: 0 15px 100px 0 rgba(18, 19, 26, 0.05);
  border-radius: 10px;
  background-color: #ffffff;
  position: relative;
  top: 35px;
  right: -32px;
}
.Businesses > .top-section > .left-side > .arrows {
  position: absolute;
  bottom: 0px;
  right: -25px;
  transform: translateX(100%);
}
.Businesses > .top-section > .left-side > .arrows > .arrow-ic {
  background-color: rgba(255, 255, 255, 0.1);
  opacity: 0.6;
}
.Businesses > .top-section > .left-side > .arrows > .arrow-ic:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}
.Businesses > .bottom-section {
  height: 530px;
  background-color: #3181d2;
  background: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/landing_blue_bg.jpg")
    no-repeat;
  background-size: cover;
  align-items: flex-end;
}
.Businesses > .bottom-section > .data-bound {
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid #ccc; */
}
.Businesses > .bottom-section .bottom-par {
  color: #ffffff;
  margin-top: 70px;
}
.Businesses > .bottom-section .btn-start {
  color: #ffffff;
  border-radius: 10px;
  padding: 17px 27px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #ffffff;
  margin-bottom: 60px;
  cursor: pointer;
}
@media (max-width: 1100px) {
  .Businesses > .top-section > .left-side > .outer-box {
    width: 95%;
  }
  .Businesses > .top-section > .left-side > .outer-box > .inter-box {
    width: 100%;
  }
}
@media (max-width: 1024px) {
  .Businesses > .top-section {
    top: 60px;
  }
  .Businesses > .top-section > .right-side {
    width: 35%;
    padding: 0 15px;
  }
  .Businesses > .top-section > .left-side {
    width: 65%;
    padding: 0 15px;
  }
  .Businesses > .top-section > .left-side > .outer-box {
    height: 310px;
  }
  .Businesses > .top-section > .left-side > .outer-box > .inter-box {
    height: 310px;
  }
  .Businesses > .bottom-section .jobs {
    justify-content: flex-start;
  }
  .Businesses > .bottom-section .bottom-par {
    margin-top: 50px;
  }
  .Businesses > .bottom-section .btn-start {
    margin-bottom: 40px;
  }
}
@media (max-width: 768px) {
  .Businesses > .top-section {
    display: block;
    width: 92%;
    margin: 0 auto;
    top: 0;
    padding: 40px 0;
  }
  .Businesses > .top-section > .right-side {
    width: 100%;
    direction: rtl;
    text-align: center !important;
    padding: 0;
  }
  .Businesses > .top-section > .left-side {
    width: 100%;
    padding: 0;
  }
  .Businesses > .top-section > .right-side > .post-head {
    max-width: 100%;
    font-size: 18px;
  }
  .Businesses > .top-section > .right-side > .par {
    max-width: 100%;
    font-size: 14px;
  }
  .Businesses > .top-section > .left-side > .outer-box {
    width: 100%;
    height: auto;
    box-shadow: none;
    border-radius: none;
    margin-right: 0;
  }
  .Businesses > .top-section > .left-side > .outer-box > .inter-box {
    width: 100%;
    height: auto;
    box-shadow: none;
    border-radius: none;
    top: 0;
    right: 0;
  }
  .Businesses > .top-section > .left-side > .arrows {
    position: static;
    transform: translateX(0);
    justify-content: center;
    margin-top: 15px;
  }
  .Businesses > .top-section > .left-side > .arrows > .arrow-ic {
    background-color: #ebeff8;
    opacity: 0.5;
  }
  .Businesses > .top-section > .left-side > .arrows > .arrow-ic:hover {
    background-color: #ebeff8;
    opacity: 1;
  }
  .Businesses > .top-section > .left-side > .arrows > .arrow-ic {
    color: #409eff;
  }
  .Businesses > .bottom-section {
    height: 490px;
  }
  .Businesses > .bottom-section .bottom-par {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    .Businesses > .bottom-section {
      display: block;
      height: 1030px;
      background: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/landing_blue_bg_mobile.jpg")
        no-repeat;
      background-size: cover;
    }
    .Businesses > .bottom-section .jobs {
      display: block;
      padding-top: 45px;
    }
    .Businesses > .top-section > .right-side > .par {
      margin-top: 7px !important;
      line-height: 24px;
    }
  }
}
</style>