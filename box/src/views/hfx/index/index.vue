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
    <nav>
      <p>
        筛选
        <i class="iconfont icon-down"></i>
      </p>
      <p>
        筛选
        <i class="iconfont icon-down"></i>
      </p>
      <p>
        筛选
        <i class="iconfont icon-down"></i>
      </p>
      <p>
        <i style="font-size:50px;color:#42cb9a;padding-left:0" class="iconfont icon-search"></i>
      </p>
    </nav>
    <div class="box">
      <div class="content">
          <div class="cont" v-for="(item,index) in list" :key="index">
              <img :src="require(`../../../public/切图/01/${item.url}`)" alt="">
              
              <div class="text">
                  <p class="p1">
                      {{item.text1}}
                  </p>
                  <p class="p2">
                      {{item.text2}}
                      
                  </p>
                  <p class="p3">
                      <span class="sp1">{{item.text3}}</span>
                      <span class="sp1">{{item.text4}}</span>
                      <span class="sp1"><i class="iconfont icon-location"></i>{{item.text5}}</span>
                  </p>
                  
              </div>

          </div>
          <div class="page">
            <p class="page1">上一页</p>
            <p class="page2">2/30</p>
            <p class="page1">下一页</p>
          </div>
          <div class="copy">
            <p class="copy1"><i class="iconfont icon-hot-line"/>服务热线：400-9977-658</p>
             <p class="copy2">
              <span style="color:#39cb95">触屏版</span>
              <span>电脑版</span>
              <span>关于我们</span>
              <span>联系我们</span> 
            </p>
            <p class="copy3"><i class="iconfont icon-location"/>2016 sirfang.com 刚需房装修就找房先森</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
            {url:'01.png',text1:'戈雅公寓24棟',text2:'泥木工程',text3:'三室',text4:'60-90m',text5:'10Km'},
            {url:'04.png',text1:'观澜时代国际花园云邸5棟',text2:'泥木工程',text3:'三室',text4:'60-90m',text5:'20Km'},
            {url:'02.png',text1:'中泰阳光城5棟',text2:'水电工程',text3:'三室',text4:'60-90m',text5:'未定位'},
            {url:'03.png',text1:'重汽嘉泽苑7棟',text2:'泥木工程',text3:'三室',text4:'60-90m',text5:'20Km'},
            {url:'01.png',text1:'戈雅公寓24棟',text2:'泥木工程',text3:'三室',text4:'60-90m',text5:'10Km'},
            {url:'04.png',text1:'观澜时代国际花园云邸5棟',text2:'泥木工程',text3:'三室',text4:'60-90m',text5:'20Km'},
            {url:'02.png',text1:'中泰阳光城5棟',text2:'水电工程',text3:'三室',text4:'60-90m',text5:'未定位'},
            {url:'03.png',text1:'重汽嘉泽苑7棟',text2:'泥木工程',text3:'三室',text4:'60-90m',text5:'20Km'},
        ]
    };
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
nav {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  p {
    width: 1.8rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.36rem;
    i {
      padding-left: 0.2rem;
      color: #9d9d9d;
    }
  }
}
.cont{
    width: 7.5rem;
    height: 2.65re;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.16rem;
    img{
        width: 2.8rem;
        height: 1.9rem;
    }
    .text{
        width: 4.18rem;
        height: 2.32rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .p1{
            font-size: 0.32rem;
            text-indent: 0.34rem;
        }
        .p2{
            margin-left: 0.36rem;
            font-size: 0.22rem;
            text-align: center;
            width: 1.12rem;
            height: 0.3rem;
            background: #39c893;
            color: #fff;
            border-radius: 0.08rem;
        }
        .p3{
            display: flex;
            justify-content: space-around;
            color: #9a9a9a;
            font-size: 0.26rem
        }
    }
}
.page{
  width: 7.5rem;
  height: 0.82rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
  .page1{
    width: 2.5rem;
    height: 0.82rem;
    background: #39c893;
    text-align: center;
    line-height: 0.82rem;
    color: #fff;
  }.page2{
    width: 2.5rem;
    height: 0.82rem;
    background: #fff;
    text-align: center;
    line-height: 0.82rem;
  }
}
.copy{
  width: 7.5rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.24rem;
  margin-top: 0.2rem;
  background: #fff;
  .copy1{
    text-align: center;
  }
  .copy2{
    display: flex;
    justify-content: space-around;
  }
  .copy3{
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
