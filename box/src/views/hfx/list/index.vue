<template>
  <div class="container">
    <header>
      <div class="log">
        <img src="../../../public/切图/logo.png" alt />
      </div>
      <div class="tit">
        <p>工地直播</p>
      </div>
      <div class="nav">
        <p>
          <i class="iconfont icon-user"></i>
          <span>我的</span>
        </p>
        <p>
          <i class="iconfont icon-nav"></i>
          <span>导航</span>
        </p>
      </div>
    </header>

    <div class="box">
      <div class="content">
        <div class="list">
          <p class="p1">
            观澜时代国际花园云邸5棟
            <span class="sp1">泥木工程</span>
          </p>
          <div class="p3">
            <div>
              户型：
              <span class="sp2">二室</span>
            </div>
            <div>
              面积：
              <span class="sp2">60-90m</span>
            </div>
            <div>
              装修预算：
              <span class="sp2">18万</span>
            </div>
          </div>
          <div class="p2">
              工地概况：<span class="span2">百万平米超级大盘，占据钱塘江北岸最美的江湾和湿地</span>
          </div>
          <div class="p4">
              <p style="color:#1b99f4">评论（10）</p>
              <p>预约参观工地</p>
              
          </div>
        </div>
        <div class="cont">
            <p>设计师：<span>吴飞柯</span>项目经理：<span>王永龙</span></p>
            <div style="margin-top:0.2rem;">
                <img src="../../../public/切图/01/00.png" alt="">
            </div>
            <div class="text">
                <p>
                    房先森互联网家装有别于传统装修公司于其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目传包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
                </p>
            </div>
        </div>

        <div class="copy">
          <p class="copy1">
            <i class="iconfont icon-hot-line" />服务热线：400-9977-658
          </p>
          <p class="copy2">
            <span style="color:#39cb95">触屏版</span>
            <span>电脑版</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </p>
          <p class="copy3">
            <i class="iconfont icon-location" />2016 sirfang.com 刚需房装修就找房先森
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
$aa: #39c894;
$bb: #666;
$cc: #999;
$dd: #2bb281;
$ee: #333;
$ff: #eaeaea;
.container {
  width: 7.5rem;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
}
header {
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  height: 1rem;
  div {
    width: 2.5rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .log {
    //   width: 0.33rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    img {
      width: 2rem;
      height: 0.78rem;
    }
  }
  .tit {
    font-size: 0.35rem;
  }
  .nav {
    width: 1.8rem;
    display: flex;
    flex-direction: row;
    p {
      display: flex;
      flex-direction: column;
      margin-left: 0.2rem;
      align-items: center;
      i {
        height: 0.56rem;
        line-height: 0.82rem;
        font-size: 0.32rem;
        color: $cc;
      }
      span {
        height: 0.44rem;
        line-height: 0.44rem;
        color: $cc;
        font-size: 0.32rem;
      }
    }
  }
}
.list {
  width: 7.5rem;
  height: 3.02rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .p1 {
    font-size: 0.28rem;
    text-indent: 0.4rem;
    .sp1 {
      margin-left: 0.36rem;
      font-size: 0.22rem;
      text-align: center;
      width: 1.12rem;
      height: 0.3rem;
      background: #39c893;
      color: #fff;
      border-radius: 0.08rem;
    }
  }
  .p3 {
    display: flex;
    justify-content: space-around;
    font-size: 0.26rem;
    span {
      color: #9a9a9a;
      font-size: 0.26rem;
    }
  }
  .p2{
      font-size: 0.26rem;
    text-indent: 0.4rem;

      span{
          color: #9a9a9a;
      font-size: 0.24rem;
      }
  }
  .p4{
      display: flex;
      justify-content: center;
      p{
          text-align: center;
          line-height: 0.68rem;
        font-size: 0.3rem;
      width: 3.58rem;
      height: 0.68rem;
      border: 1px solid #999;  
      color: #999;
      }
      
  }
}
.cont{
    background: #f4f4f4;
    padding: 0.2rem;
    p{
        font-size: 0.28rem;
        span{
            margin-right: 1.2rem;
            color: #c4e6d6;
        }
    }
    .text{
        background: #fff;
        height: 2.45rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
        
            text-indent: 0.4rem;
            line-height: 0.48rem;
        }
    }
}
.copy {
  width: 7.5rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.24rem;
  margin-top: 0.2rem;
  background: #fff;
  .copy1 {
    text-align: center;
  }
  .copy2 {
    display: flex;
    justify-content: space-around;
  }
  .copy3 {
    text-align: center;
    color: #999;
  }
}
.box {
  flex: 1;
  overflow: hidden;
}
.content {
  min-height: 101%;
  background: #eee;
}
</style>
