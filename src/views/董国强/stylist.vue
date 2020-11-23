<template>
  <div class="stylist">
    <nav>
      <div class="nav-header">
        <div class="navleft">
          <img src="../../../public/icon/qie/logo.png" alt="" />
        </div>
        <div>设计师</div>
        <div class="right">
          <div class="user">
            <i class="iconfont icon-user"></i>
            <span>我的</span>
          </div>
          <div class="usernav">
            <i class="iconfont icon-nav"></i>
            <span>导航</span>
          </div>
        </div>
      </div>
      <div class="nav-footer">
        <div>
          <p>筛选</p>
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          <p>风格</p>
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          <p>排序</p>
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          <i class="iconfont icon-search"></i>
        </div>
      </div>
    </nav>
    <div class="content">
      <dl v-for="(item, index) in list" :key="index">
        <dt><img :src="item.pic" alt="" /></dt>
        <dd>
          <p>
            <span>{{ item.username }}</span>
            <span>{{ item.title }}</span>
            <span>{{ item.people }}<span>人气</span></span>
          </p>
          <p>
            <span>作品</span>
            <span>{{ item.work }}个</span>
            <span>经验</span>
            <span>{{ item.sex }}年</span>
            <span>评价</span>
            <span>{{ item.info }}</span>
          </p>
          <p>
            <span>擅长风格:</span><span>{{ item.love | textfilter }}</span>
          </p>
        </dd>
      </dl>
      <div class="content-footer">
         <p>上一页</p>
         <p>1/30</p>
         <p>下一页</p>
      </div>
    </div>
    <footer>
       房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //组件名字
  name: "stylist",
  //存放数据
  data() {
    //组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。
    return {
      list: []
    }
  },
  props: {
    //props验证
  },
  components: {
    //挂载组件
  },
  created() {
    //组件将要加载
    axios.get("./json/cart.json").then((res) => {
      console.log(res);
      this.list = res.data.list;
    }).catch((error)=>{
      console.log(error)
    });
  },
  mounted() {
    //组件已挂载
  },
  methods: {
    //事件方法
  },
  computed: {
    //计算属性
  },
  watch: {
    //监听属性
  },
  filters: {
    //过滤器
    textfilter: function (val) {
      return val.join("/");
    },
  },
  directives: {
    //自定义事件
  },
};
</script>

<style lang="scss" scoped>
$textcoloreaeaea: #eaeaea;
$textcolorgary: #999;
$textcolorblack: #000;
$textcolorlightgreen: #39c894;
$textcolorgreen: #2bb281;
$textcolorwhite:#ffffff;
$textcoloryellow:#eed215;
div,
ul,
li,
p,
span,
img,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
  border: 0;
  text-decoration: none;
}
.stylist{
   background:$textcoloreaeaea;
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
.right {
  color: $textcolorgary;
  font-size: 16px;
  display: flex;
  .user {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      margin-top: 4px;
      font-size: 12px;
    }
  }
  .usernav {
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    text-align: center;
    span {
      margin-top: 4px;
      font-size: 12px;
    }
  }
  span {
    font-size: 14px;
  }
}
.nav-footer {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 1px solid $textcoloreaeaea;
  > div {
    display: flex;
    align-items: center;
    padding-right: 14px;
    border-right: 1px solid $textcoloreaeaea;
    display: flex;
    justify-content: space-around;
    p {
      margin: 0 6px;
      box-sizing: border-box;
    }
  }
  > div:nth-of-type(4) {
    border: none;
    i {
      color: $textcolorlightgreen;
      font-size: 24px;
    }
  }
  i {
    color: $textcolorgary;
    vertical-align: middle;
    padding-top: 4px;
    padding-left: 6px;
    text-align: center;
  }
}
.content {
   margin-top: 10px;
   padding-bottom: 14px;
   background: $textcolorwhite;
  dl {
    padding: 0 18px;
    border-bottom: 1px solid $textcoloreaeaea;
    display: flex;
    background: $textcolorwhite;
  }
  dt {
    padding: 18px 0;
    margin-right: 12px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  dd {
     width: 100%;
     p{
        margin-top: 6px;
     }
     >p:nth-of-type(1){
        width: 100%;
        >span:nth-of-type(1){
           font-size: 22px;
        }
        >span:nth-of-type(2){
           color:$textcolorwhite;
           background: $textcolorlightgreen;
           font-size: 12px;
           padding: 2px;
           border-radius: 2px;
           margin-left: 6px;
        }
        >span:nth-of-type(3){
           float: right;
           color: $textcoloryellow;
           span{
              color: $textcolorgary;
              margin-left: 4px;
           }
        }
      }
      >p:nth-of-type(2){
         >span:nth-child(2n){
            color:$textcolorgary;
            margin-right: 10px;
         }
     }
     >p:nth-of-type(3){
        >span:nth-of-type(2){
           color: $textcolorgary;
        }
     }
  }
}
.content-footer{
   margin: 14px 0 0 0;
   background: $textcolorwhite;
   display: flex;
   justify-content: space-between;
   border:1px solid $textcoloreaeaea;
   p{
      flex-grow: 3;
      color:$textcolorblack;
      padding: 14px 0;
      text-align: center; 
   }
   p:nth-of-type(1){
      background: $textcoloreaeaea;
   }
   p:nth-of-type(2){
      background: $textcolorwhite;
   }
   p:nth-of-type(3){
      background: $textcolorlightgreen;
      color: $textcolorwhite;
   }
}
footer{
   margin: 14px 0 0 0;
   text-indent:30px;
   padding:18px;
   background: $textcolorwhite;
   font-size: 14px;
   color: $textcolorgary;
}
</style>