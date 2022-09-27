<template>
  <NavAbout/>
  <div class="theNo9">
    <div class="header d-flex flex-column align-items-center justify-content-end">
      <div class="text-center">
        <small>2022</small>
        <h1>THE NO9</h1>
      </div>
      <div class="mb-4">
        <router-link class="link-item" to="/">
          <i class="fas fa-angle-left"></i> 回到上一頁
        </router-link>
      </div>
    </div>
    <div class="img-bg d-flex justify-content-center">
      <div class="img-box">
        <img src="@/assets/images/index-home-all-2.jpg" alt="">
      </div>
    </div>
    <div class="container my-5">
      <!-- Shopping Websites -->
      <div class="row box-height">
        <div class="col-6">
          <h2>Shopping Websites</h2>
          <p class="shop-web-p p-line-h">
            THE NO9 是一個以 Vue 為框架的 SSR 購物網站，編寫的語法包含 Vue、SASS、JavaScript、Bootstrap...等。在編寫的同時，盡量添加了大部分網站所需的互動功能，目的是希望自己能夠在嘗試的過程中，加速了解這些功能如何運作。
          </p>
        </div>
        <div class="col-6 col-6-rwd">
          <ul>
            <li>
              <h4>Technologies</h4>
              <p>Vue.js</p>
              <p>Adobe XD</p>
            </li>
            <li>
              <h4>My role</h4>
              <p>前端開發</p>
              <p>UI/UX 設計</p>
            </li>
            <li>
              <div>
                <h4>URL</h4>
                <a href="https://nine-2018.github.io/the-no9/dist/#/" target="_blank">https://nine-2018.github.io/the-no9/dist/#/</a>
              </div>
            </li>
            <li>
              <div>
                <h4>Source code</h4>
                <div>
                  <a href="https://github.com/nine-2018" target="_blank" class="icon">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <!-- Web display -->
      <div class="box-height d-flex justify-content-center">
        <router-link class="link-item" to="/">
          <i class="fas fa-angle-left"></i> 回到上一頁
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavAbout from '@/components/NavAbout.vue';

export default {
    components: {
      NavAbout,
    },
    created() {
        this.$nextTick(() => { this.toLocal(); });
    },
    mounted() {
        let _this = this;
        _this.$nextTick(function () {
            window.addEventListener("scroll", _this.handleScroll);
        });
    },
    methods: {
        toLocal() {
            let Id = localStorage.getItem("toId");
            let toElement = document.getElementById(Id);
            if (Id) {
                toElement.scrollIntoView();
            }
        }
    },
    destroyed() {
        localStorage.setItem("toId", "");
    },
    components: { NavAbout }
}
</script>