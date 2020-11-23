<template>
  <div class="container">
    <header>
      <img src="../../../public/img/logo.png" alt />
      <p class="zhi">装修方案</p>
      <ul>
        <li>
          <i class="iconfont icon-user"></i>
          <p>我的</p>
        </li>
        <li>
          <i class="iconfont icon-nav"></i>
          <p>我的</p>
        </li>
      </ul>
    </header>
    <div class="box">
      <div class="box1">
        <div class="nav">
          <img src="../../../public/img/loans.jpg" alt />
        </div>

        <div class="nav_body">
          <p>
            申请房先森装修贷
            <van-divider>
              <img src="../../../public/img/icon_title.png" alt />
            </van-divider>
          </p>
        </div>

        <div class="nav_input">
          <input type="text" placeholder="电话" />
          <input type="text" placeholder="小区名" />
          <input type="text" placeholder="建筑面积" />
          <button>立即申请</button>
        </div>

        <div class="nav_zhi">
          <p>
            装修贷款是无担保个人信用贷款,是房先森装修和建行共同为准备装修的工薪人士发放的个人信用贷款,
            用于房屋装修相关的支出。
            <span>无需担保,无需抵押,</span>以个人信誉度作为判断依据,
            <span>最高可贷50万。</span>
          </p>
        </div>

        <div class="nav_body">
          <p>
            申请流程
            <van-divider>
              <img src="../../../public/img/icon_title.png" alt />
            </van-divider>
          </p>
        </div>

        <div class="nav_body1">
          <img src="../../../public/img/切图1.png" alt="">
        </div>
      </div>
    </div>
    <footer></footer>
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

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.1rem;
    box-sizing: border-box;
    img {
      width: 120px;
      height: 40px;
      padding: 5px;
    }
    .zhi {
      text-align: center;
      margin-top: 10px;
      font-size: 18px;
      color: #000;
    }
    ul {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 0.1rem;
      box-sizing: border-box;
      li {
        height: 50px;
        margin-top: 15px;
        margin-right: 10px;
        text-align: center;
        i {
          color: #999;
          font-size: 23px;
          margin-bottom: 0px;
        }
        p {
          margin: 0px;
          padding: 0px;
          color: #999;
          font-size: 13px;
        }
      }
    }
  }

  .box {
    flex: 1;
    overflow: auto;
    .box1 {
      min-height: 101%;
      display: flex;
      flex-direction: column;
      .nav {
        width: 100%;
        height: 200px;
        img {
          width: 100%;
          height: 200px;
        }
      }

      .nav_body {
        height: 60px;
        p {
          text-align: center;
          line-height: 60px;
        }
        .van-divider {
          padding: 0;
          margin: 0;
          height: 20px;
          padding: 0rem 0.5rem;
          margin-bottom: 10px;
          img {
            width: 60px;
            height: 20px;
          }
        }
      }

      .nav_input {
        
        padding: 0.5rem 0.5rem;
        display: flex;
        flex-direction: column;
        input {
          height: 35px;
          margin-bottom: 30px;
          border-radius: 5px;
          border: 1px solid #eaeaea;
        }

        input::placeholder {
          text-indent: 5px;
          color: #eaeaea;
        }

        button {
          height: 40px;
          background: #feb505;
          color: #fff;
          font-size: 20px;
          line-height: 40px;
          border: none;
          border-radius: 5px;
        }
      }

      .nav_zhi {
        height: 150px;
        border: 1px dashed #39c894;
        display: flex;
        flex-direction: column;
        p {
          font-size: 17px;
          margin-top: 10px;
          text-indent: 30px;
          flex-direction: column;
          padding: 0rem 0.5rem;
          color: #000;
        }
        span {
          font-size: 17px;
          color: #39c894;
          flex-direction: column;
        }
      }

      .nav_body1{
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          img{
              width: 100%;
            display: flex;
          flex-direction: column; 
          }
      }
    }
  }

  footer {
    height: 50px;
    background: blue;
  }
}
</style>
