<template>
  <div>
    <div class="nav">
      <i class="iconfont icon-back"></i>
      <p>欧美文化的抽象美感</p>
      <i class="iconfont icon-nav">导航</i>
    </div>
    <div class="img">
      <img src="../../public/img/01.png" alt />
    </div>
    <div class="size">
      <p>
        房先森互联网家装有别于传统装修公司与其他装修中介平台，
        以自营模式整合设计师与项目经理，杜绝项目转包外包，
        利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
      </p>
    </div>
    <div class="footer">
      <p>服务热线：400-9977-658</p>
      <div class="flex">
        <p style="color:#38ca94">触屏版</p>
        <p>电脑版</p>
        <p>关于我们</p>
        <p>联系我们</p>
      </div>
    </div>
    <div class="fly">
      <div>
        <i class="iconfont icon-design"></i>
        <p>预约免费设计</p>
        <!-- <div class="clear"></div> -->
      </div>
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
.nav {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  .icon-back {
    font-size: 45px;
  }
  .icon-nav {
    width: 32px;
    text-align: center;
  }
}
.img {
  width: 100%;
  img {
    width: 100%;
    height: 450px;
  }
}
.size {
  p {
    text-indent: 2em;
    background: white;
  }
}
.footer {
  text-align: center;
  margin-top: 10px;
  background: white;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fly {
  width: 100%;
  height: 100px;
  background: #ff4351;
  position: absolute;
  bottom: 0px;
//   background: rgba(225,225,225,0.8);
opacity: 0.8;
  div {
    text-align: center;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-design {
      font-size: 56px;
      color: white;
      float: left;
    }
    p {
      color: white;
      font-size: 36px;
      float: left;
      
    }
    
  }
}
</style>
