<template>
  <div class="header py-4">
    <div class="internal ty-flex ty-space-between">
      <div class="logo-part"></div>
      <div class="sign fs-18">
        <router-link to="#">ورود به پنل</router-link>
        <button class="btn-start mr-4 fs-18">رایگان شروع کنید</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header > .internal {
  width: 88%;
  margin: 0 auto;
  align-items: center;
}
.header > .internal > .logo-part {
  width: 64px;
  height: 64px;
  background: url("https://static.ty-sb1.tayeh.ir/tayeh-panel/assets/images/tayeh_logo.svg")
    no-repeat;
  background-size: cover;
  background-position: center;
}
.header > .internal > .sign > .btn-start {
  padding: 15px 20px;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  background-color: #0e7cd7;
  box-shadow: 0 3px 15px 0 rgba(67, 138, 254, 0.3);
}
@media (max-width: 768px) {
  .header > .internal > .logo-part {
    width: 45px;
    height: 45px;
  }
  .header > .internal > .sign {
    font-size: 14px;
  }
  .header > .internal > .sign > .btn-start {
    font-size: 14px;
  }
}
@media (max-width: 425px) {
  .header > .internal {
    width: 92%;
  }
  .header > .internal > .logo-part {
    width: 36px;
    height: 36px;
  }
  .header > .internal > .sign {
    font-size: 12px;
  }
  .header > .internal > .sign > .btn-start {
    font-size: 12px;
    margin-right: 12px !important;
  }
}
</style>