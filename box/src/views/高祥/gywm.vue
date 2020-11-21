<template>
  <div class="gywm">
      <div class="gx-top">
        <img src="../../assets/切图/logo.png" alt="">
          <p>关于我们</p>
        <div class="gx-right">
          <span><i class="iconfont icon-user"></i>我的</span>
          <span><i class="iconfont icon-nav"></i>导航</span>
        </div>
      </div>
      <div class="gx-center">
        <img src="../../assets/切图/process/process1.jpg" alt="">
        <van-divider>房先生简介</van-divider>
        <p>杭州瑞壹网络科技有限公司旗下“房先森”，专注于家庭装修服务，装饰立足刚需房,利用互联网将装修、供应链、进行融合，多维度实现用户对设计师、工长、工地、材料等的线上选择体验，房先森以自营的模式真正意义上过滤掉传统家装公司利润，将利润让给业主。杭州瑞壹网络科技有限公司成立了“房先森装修学院“”并以装修套餐 + 个性化定制的模式，提供创新型装修服务。</p>
        <van-divider>我们是谁，我们如何与众不同</van-divider>
        <img src="../../assets/切图/2.png" alt="">
        <div class="center-bottom">
          <p><i class="iconfont icon-hot-line"></i> 服务热线：404-9977-658</p>
          <p class="flex">
            <a href="/" class="green">触屏版</a>
            <a href="http://www.sirfang.com/">电脑版</a>
            <a href="/aboutus/">关于我们</a>
            <a href="/contact/">联系我们</a>
          </p>
        </div>
      </div>
      <div class="gx-bottom">
        <img src="../../assets/切图/loans/loans1.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.gywm{
  width: 100%;
  height: 100%;
  .gx-top{
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
    >img{
      width: 30%;
      height: 80%;
      margin-top: 5px;
    }
    p{
      line-height: 50px;
      margin-left: 15%;
    }
    .gx-right{
      width: 80px;
      position: absolute;
      display: flex;
      right: 0;
      top: 6px;
      span{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-left: 4px;
      }
    }
  }
  .gx-center{
    width: 100%;
    img{
      width: 100%;
      background: #ddd;
    }
    p{
      text-indent: 2em;
    }
    .center-bottom{
      width: 100%;
      height: 100px;
      p{
        text-align: center;
      }
      .flex{
        display: flex;
        margin-top: 30px;
      }
    }
  }
  .gx-bottom{
    width: 100%;
    height: 40px;
    background:#282828 ;
    img{
      width: 100px;
      height: 100%;
    }
  }
}
</style>