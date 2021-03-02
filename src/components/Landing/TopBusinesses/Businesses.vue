<template>
  <div class="Businesses">
    <div class="top-section ty-flex">
      <div class="right-side pt-4">
        <h3 class="post-head fs-22 fw-500 mb-0">کسب و کارهای برتر تایه</h3>
        <p class="fw-300 par mt-3">
          داستان کسب و کارهایی که از تایه استفاده کرده اند را میتوانید در این
          بخش بخوانید؛ جای شما در این بخش خالیست
        </p>
      </div>
      <div class="left-side">
        <div class="outer-box">
          <div class="inter-box">
            <Slider :businesses="businesses" :right="right" />
          </div>
        </div>
        <div class="arrows ty-flex">
          <div class="right-icon arrow-ic" @click="rightHandler"></div>
          <div class="left-icon arrow-ic" @click="leftHandler"></div>
        </div>
      </div>
    </div>
    <div class="bottom-section ty-flex">
      <div class="data-bound">
        <div class="ty-flex ty-flex-wrap ty-space-between">
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
          <button class="btn-start fs-18 fw-500">رایگان شروع کنید</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import JobsState from "./JobsState";
export default {
  name: "Businesses",
  components: {
    Slider,
    JobsState,
  },
  data() {
    return {
      right: 0,
      businesses: [
        {
          name: "فروشگاه مرسی لیدی",
          website_name: "www.mersilady.ir",
          website_link: "#",
          avatar: "../../../assets/images/Screen2.png",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
        },
        {
          name: "فروشگاه مرسی لیدی",
          website_name: "www.mersilady.ir",
          website_link: "#",
          avatar: "../../../assets/images/Screen2.png",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
        },
        {
          name: "فروشگاه مرسی لیدی",
          website_name: "www.mersilady.ir",
          website_link: "#",
          avatar: "../../../assets/images/Screen2.png",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
        },
        {
          name: "فروشگاه مرسی لیدی",
          website_name: "www.mersilady.ir",
          website_link: "#",
          avatar: "../../../assets/images/Screen2.png",
          explain:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
        },
      ],
      states: [
        {
          title: "تعداد کسب و کارها",
          value: "21",
          icon: "landing_work.svg",
        },
        {
          title: "تعداد فروش",
          value: "1350",
          icon: "landing_buy.svg",
        },
        {
          title: "تعداد خرید",
          value: "1126",
          icon: "landing_bag.svg",
        },
        {
          title: "مجموع سود فروشگاه ها",
          value: "67،350،000",
          icon: "landing_discount.svg",
          span: "true",
          span_value: "تومان",
        },
      ],
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
  direction: ltr;
  /* border: 1px solid #ccc; */
}
.Businesses > .top-section > .left-side {
  width: 57%;
  padding: 0 25px;
  /* border: 1px solid #ccc; */
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
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  opacity: 0.6;
  background-size: 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.2s;
}
.Businesses > .top-section > .left-side > .arrows > .arrow-ic:hover {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}
.Businesses > .top-section > .left-side > .arrows > .arrow-ic.right-icon {
  background-image: url("../../../assets/images/arrow_forward_ios.svg");
  background-position: 55% 50%;
}
.Businesses > .top-section > .left-side > .arrows > .arrow-ic.left-icon {
  background-image: url("../../../assets/images/arrow_back_ios.svg");
  margin-right: 17px;
  background-position: 45% 50%;
}
.Businesses > .bottom-section {
  height: 530px;
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
  /* border-radius: 10px; */
  padding: 17px 27px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid;
   border-image-source: linear-gradient(to right, #ffffff, rgba(133, 198, 255, 0), rgba(255, 255, 255, 0.86));
  border-image-slice: 1;
  margin-bottom: 60px;
}
</style>