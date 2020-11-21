<template>
  <div class="lxwm">
      <div class="gx-top">
        <img src="../../assets/切图/logo.png" alt="">
          <p>关于我们</p>
        <div class="gx-right">
          <span><i class="iconfont icon-user"></i>我的</span>
          <span><i class="iconfont icon-nav"></i>导航</span>
        </div>
      </div>
      <div class="gx-center">
        <img src="http://m.sirfang.com/assets/image/home/location.jpg" alt="">
        <img src="../../assets/day.jpg" alt="">
        <p>房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。</p>
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

<style lang="scss" scoped>
.lxwm{
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
    }
    >p{
      text-indent: 2em;
    }
        .center-bottom{
      width: 100%;
      height: 100px;
      p{
        text-align: center;
      }
      .flex{
        margin-top: 30px;
        a{
          margin-left: 10px;
        }
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