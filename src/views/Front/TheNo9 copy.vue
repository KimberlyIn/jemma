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
      <!-- 首頁互動 -->
      <div class="box-height">
        <h2 class="theno9-mb-a">Web display</h2>
        <div>
          <img src="@/assets/images/index-home.gif" alt="">
        </div>
        <div class="box-height">
          <h3 class="theno9-text-bold-a theno9-mb-b">特徵</h3>
          <h5>首頁互動</h5>
          <p>・ 首頁 Swiper 自動輪播也可自行滑動圖片。</p>
          <p>・ 全頁都有 go top 置頂。</p>
          <p>・ 提供訂閱。</p>
        </div>
      </div>
      <!-- 商品頁面互動 -->
      <div>
        <div>
          <div class="row">
            <div class="col-12">
              <div>
                <img src="@/assets/images/product.gif" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/product-category.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/product-search.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="box-height">
          <h5>商品頁面互動</h5>
          <p>・ 商品頁面做出細項分類、也可直接加入購物車。</p>
          <p>・ 特價商品會標示「on sale」。</p>
          <p>・ 可以搜尋商品。</p>
          <p>・ 提示已加入購物車。</p>
          <p>・ 商品獨立頁可直接進行商品頁面切換，也可決定數量與加入購物車。</p>
          <p>・ 底下提供其他商品推薦。</p>
        </div>
      </div>
      <!-- 購物車、結帳頁面互動 -->
      <div>
        <div>
          <div class="row">
            <div class="col-6">
              <div>
                <img src="@/assets/images/cart-a.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/cart-b.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/cart-c.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/cart-d.png" alt="">
              </div>
            </div>
            <div class="col-12">
              <div>
                <img src="@/assets/images/cart-e.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="box-height">
          <h5>購物車、結帳頁面互動</h5>
          <p>・ 加入優惠券系統。</p>
          <p>・ 購物車可增加、刪減商品及修改數量。</p>
          <p>・ 訂單頁面加入表單驗證。</p>
        </div>
        <div>
          <div class="row">
            <div class="col-12">
              <div>
                <img src="@/assets/images/backstage-a.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/backstage-b.png" alt="">
              </div>
            </div>
            <div class="col-6">
              <div>
                <img src="@/assets/images/backstage-c.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="box-height">
          <p>・ 具有身份驗證登入及登出功能。</p>
          <p>・ 具有管理商品、優惠券、客戶訂單及部落格編輯、刪除的功能。</p>
        </div>
      </div>
      <!-- Responsive -->
      <div class="box-height">
        <h3 class="theno9-text-bold-a theno9-mb-b">Responsive</h3>
        <div>
          <div class="row">
            <div class="col-4">
              <div>
                <img src="@/assets/images/rwd-a.png" alt="">
              </div>
            </div>
            <div class="col-4">
              <div>
                <img src="@/assets/images/rwd-b.png" alt="">
              </div>
            </div>
            <div class="col-4">
              <div>
                <img src="@/assets/images/rwd-c.png" alt="">
              </div>
            </div>
            <div class="col-4">
              <div>
                <img src="@/assets/images/rwd-d.png" alt="">
              </div>
            </div>
            <div class="col-4">
              <div>
                <img src="@/assets/images/rwd-e.png" alt="">
              </div>
            </div>
            <div class="col-4">
              <div>
                <img src="@/assets/images/rwd-f.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="box-height d-flex flex-column align-items-center">
          <h3 class="theno9-text-bold-a theno9-mb-b">總結</h3>
          <p class="p-line-h p-w">
            在建構這個網站前，我曾參考了各大購物網站可能會有的基本功能，最初其實是覺得相當的困難，在寫的過程中也遭遇了不少挫折，但也因為堅持完成而得到了不少的收穫，這個網站仍然有許多不完美的地方，但希望自己可以在日後的研究與摸索，漸漸的將網站做到最好。
          </p>
        </div>
      </div>
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