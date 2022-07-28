<template>
  <Navbar/>
  <div class="header d-flex justify-content-center align-items-center text-center">
    <div>
      <h1>Hi,I'm Jemma</h1>
      <p>感謝您抽空進來參觀。</p>
    </div>
  </div>
  <div class="content home-container"> 
    <div class="container">
      <div class="row">
        <!-- <div id="box1" class="col-12"> -->
        <div class="col-12 scroll-item box1" id="works">
          <div class="title">
            <h2>WORKS</h2>
          </div>
          <div class="row home-col12-col6">
            <div class="col-6">
              <div class="home-col12-col6-img">
                <img src="@/assets/images/index-home-img-box.jpg" alt="">
              </div>
            </div>
            <div class="col-6 home-col6-l home-col6-flex">
              <div>
                <small>2022</small>
                <h2>THE NO9</h2>
                <p class="home-p-color home-p-m home-p-w-a">使用 Vue 框架、Bootstrap 完成的購物網站。</p>
              </div>
              <div>
                <router-link to="theno9">
                  <small>Read more  <i class="fas fa-angle-right mt-2 ms-2"></i></small>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="col-12 scroll-item box2" id="article">
          <h2>ARTICLES</h2>
          <div class="row home-col12-col6">
            <div class="col-6">
              <div>
                <div>
                  <i class="fab fa-js js-icon"></i>
                </div>
                <small>13th iThome Ironman 第 13 屆</small>
                <br/>
                <small>IT 邦鐵人賽</small>
                <h3 class="my-2">我的JavaScript日常</h3>
              </div>
            </div>
            <div class="col-6 home-col6-flex col-6-mt">
              <div class="home-col6-border">
                <div>
                  <small>2021</small>
                  <p class="home-p-color home-p-m">
                    2021 年 9 月，聽說有一場比賽，必須每天寫文章 30 天不中斷，於是我選擇了以 JavaScript 為主題的技術文章，希望能夠在尋找相關知識與整理資料的過程中，加強自己對 JavaScript 的觀念。
                  </p>
                </div>
                <div>
                  <a href="https://ithelp.ithome.com.tw/users/20138542/ironman/3906" target="_blank">
                    <small>Read more  <i class="fas fa-angle-right mt-2 ms-2"></i></small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';


export default {
  components: {
    Navbar,
  },
  created() {
    this.$nextTick(()=>{this.toLocal()})
  },
  mounted() {
    let _this=this;
    _this.$nextTick(function(){
        window.addEventListener('scroll',_this.handleScroll)
    })			
  },
  methods: {
    toLocal(){
      // 查找存儲的錨點 id
      let Id=localStorage.getItem('toId');
      let toElement=document.getElementById(Id);
      // 錨點存在跳轉
      if(Id){
        toElement.scrollIntoView();
      }
    },
  },
  // 用完後記得將存儲的錨點置空，否則會影響其他頁面跳轉到當前頁面
  destroyed() {
    localStorage.setItem('toId','');
  },
}
</script>
