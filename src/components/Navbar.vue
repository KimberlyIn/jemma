<template>
  <div class="sticky-top" style="z-index: 9;">
    <nav class="navbar navbar-expand-lg px-5 py-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Jemma</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div 
            v-for="(item,index) in title_list" 
            :key="item.id" 
            :value='item.title' 
            @click="jump(index)" 
            class="list1"
          >
            <ul class="navbar-nav">
              <li class="nav-item"> 
                <a>{{item.title}}</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item"> 
                <a @click="toguid('/about','about')">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  data () {
    return {
      title_list: [
        { title: 'WORKS', active: true },
        { title: 'ARTICLES', active: false },
      ],
    }
  },
  methods: {
    toguid(path,id){
      var path=path
      var Id=id;
      localStorage.setItem('toId',Id);
      this.$router.push(path);
    },
    jump (index) {
      var items = document.querySelectorAll(".scroll-item"); // 給每個組件最外層加個 class 名字 scroll-item
      for (var i = 0; i < items.length; i++) {
        if (index === i) {
          items[i].scrollIntoView({
            block: "start",// 默認跳轉到頂部
            behavior: "smooth"// 滾動的速度
          });
        }
      }
    },
  },
  mounted() {
  },
}
</script>