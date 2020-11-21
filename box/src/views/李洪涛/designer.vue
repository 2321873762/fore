<template>
  <div class="box">
    <div class="header">
      <img src="../../public/img/logo.png" alt />
      <p>设计师</p>
      <div class="right">
        <i class="iconfont icon-user">&nbsp;我的</i>
        <i class="iconfont icon-nav">导航</i>
      </div>
    </div>
    <div class="nav">
      <p>
        筛选
        <i class="iconfont icon-down"></i>
      </p>
      <p>
        风格
        <i class="iconfont icon-down"></i>
      </p>
      <p>
        排序
        <i class="iconfont icon-down"></i>
      </p>
      <i class="iconfont icon-search"></i>
    </div>
    <div class="big">
      <p>级别</p>
      <div class="top">
        <p>不限</p>
        <p>总监</p>
        <p>主任</p>
        <p>优秀</p>
      </div>
      <p>收费</p>
      <div class="top">
        <p>不限</p>
        <p>0-50元/m</p>
        <p>50-100元/m</p>
        <p>100-150元/m</p>
        <p>200元/m以上</p>
      </div>
    </div>
    <button>确认</button>
    <div class="foot">

    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid #cccccc;

  img {
    width: 20%;
    height: 80%;
  }
  .right {
    display: flex;
    width: 20%;
    text-align: center;
    .iconfont {
      width: 32px;
      height: 100%;
      // font-size: 20px;
    }
  }
}
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  p {
    width: 25%;
    text-align: center;
  }
  .icon-search {
    width: 25%;
    text-align: center;
    color: #39c893;
    font-size: 26px;
  }
}
.big {
    background: #f4f4f4;
  .top {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    p{
        width: 30%;
        height: 58px;
        border: 1px solid #cccccc;
        text-align: center;
        line-height: 58px;
        margin: 0 5.7px ;
    }
  }
}
button{
    width: 100%;
    height: 70px;
    background: #39c893;
    color: white;
    text-align: center;
    line-height: 70px;
    font-size: 26px;
    margin-top: 10px;
    border: 1px solid #39c893;
}
// .box{
//     width: 100%;
//     height: 100%;
//     // background: rgba(0,0,0,0.7);
//     opacity: 0.8;
//     // background: black;
// }
.foot{
    width: 100%;
    height: 210px;
    opacity: 0.8;
}
</style>
