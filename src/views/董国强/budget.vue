<template>
  <div class="budget">
      <nav>      
        <div class="nav-header">
            <div class="navleft">
            <img src="../../../public/icon/qie/logo.png" alt="" />
            </div>
            <div>装修预算</div>
            <div class="right">
            <div class="usernav">
                <i class="iconfont icon-nav"></i>
                <span>导航</span>
            </div>
            </div>
        </div>
      </nav>
      <div class="content">
          <div class="swiper"><img src="../../../public/icon/qie/banner.jpg" alt=""></div>
          <p class="detail">房先森/装修攻略/装修预算/正文</p>
          <div class="zhu">
             <p>装修预算注意事项</p>
             <ul>
                <li>客厅装修隔断</li>
                <li>客厅装修图</li>
                <li>客厅装修效果</li>
                <li>客厅装修隔断</li>
                <li>客厅装修图</li>
                <li>客厅装修效果</li>
             </ul>
             <p>导语：在装修时如果没有提前做好装修预算，很容易造成最后开支太大，添置很多没必要的增项，那么在做预算的时候又有什么需要注意的地方呢</p>
             <div class="img"><img src="../../../public/icon/qie/case/case.jpg" alt=""></div>
             <button>进入装修预算</button>
          </div>
      </div>
      <menu>
         <h3>猜你喜欢</h3>
         <dl v-for="(item,index) in list" :key="index">
            <dt><img :src="item.pic" alt=""></dt>
            <dd><p>{{item.text}}</p></dd>
         </dl>
      </menu>
      <footer>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务
      </footer>
  </div>    
</template>

<script>
import axios from "axios";
export default {
     //组件名字
  name: '',
     //存放数据
  data() { 
     //组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。
    return {
      list:[]
    }
  },
  props: {
     //props验证
  },
  components:{
     //挂载组件
  },
  created() {
     //组件将要加载
     axios.get("./json/cart.json").then((res)=>{
        console.log(res.data.cart)
        this.list=res.data.cart
     })
  },
  mounted() {
     //组件已挂载
  },
  methods:{
     //事件方法
  },
  computed:{
     //计算属性
  },
   watch:{
     //监听属性
  },
   filters:{
     //过滤器
  },
   directives:{
     //自定义事件
  }
 }
</script>

<style lang="scss" scoped>
$textcoloreaeaea: #eaeaea;
$textcolorgary: #999;
$textcolorblack: #000;
$textcolorlightgreen: #39c894;
$textcolorgreen: #2bb281;
$textcolorwhite:#ffffff;
$textcoloryellow:#eed215;
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.budget{
   background: $textcoloreaeaea;
}
footer{
   margin: 14px 0 0 0;
   text-indent:30px;
   padding:18px;
   background: $textcolorwhite;
   font-size: 14px;
   color: $textcolorgary;
}
nav {
  width: 100%;
  background: $textcolorwhite;
}
.nav-header {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $textcoloreaeaea;
  font-size: 18px;
  color: $textcolorblack;
  .navleft {
    display: flex;
    align-items: center;
  }
  img {
    width: 90px;
  }
}
.usernav {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    text-align: center;
    color: $textcolorgary;
    span {
      margin-top: 4px;
      font-size: 12px;
    }
}
.content{
   background: $textcolorwhite;
}
.swiper{
   width: 100%;
   img{
      width: 100%;
   }
}
.detail{
   margin-top: 10px;
   background: $textcoloreaeaea;
   font-size: 12px;
   padding: 2px 6px;
   border-radius: 4px;
   margin: 10px 18px;
   color: $textcolorgary;
}
.zhu{
   background: $textcolorwhite;
   padding: 0 18px;
   >p:nth-of-type(1){
      font-size: 20px;
      text-align: center;
      padding-bottom: 10px;
      border-bottom:1px solid $textcoloreaeaea;
   }
   button{
      margin-top: 14px;
      width: 100%;
      font-size: 18px;
      color: $textcolorgreen;
      border: 1px solid $textcolorgreen;
      border-radius: 4px;
      background: $textcolorwhite;
      padding: 10px;
      margin-bottom: 14px;
   }
   >ul{
      display: flex;
      flex-wrap:wrap;
      li{
         font-size: 12px;
         color: $textcolorgary;
         padding: 2px;
         border:1px solid $textcolorgary;
         border-radius: 4px;
         margin-right:4px;
         margin-bottom: 4px;
      }
   }
   >p:nth-of-type(2){
      padding: 10px 0 0 0;
      text-indent:30px;
      font-size: 14px;
      color: $textcolorgary;
   }
}
.img{
   width: 100%;
   text-align: center;
   margin-top: 14px;
   img{
      width: 80%;
      height: 126px;
   }
}
dl{
   display: flex;
   dt{
      width: 30%;
      img{
         width: 100%;
      }
   }
   dd{
      padding:20px 10px;
   }
}
menu{
   background: $textcolorwhite;
   padding: 0 18px;
   margin-top: 14px;
   h3{
      border-left: 4px solid $textcolorgreen;
      padding-left: 4px;
   }
}
</style>