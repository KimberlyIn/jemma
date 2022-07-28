<template>
  <div class="footer d-flex flex-column justify-content-center">
    <div class="d-flex flex-column align-items-center">
      <!-- <nav>
        <div 
          v-for="(item,index) in title_list" 
          :key="item.id" 
          :value='item.title' 
          @click="jump(index)" 
          class="list1"
        >
          <ul class="navbar-nav">
            <li class="nav-item"> 
              {{item.title}}
            </li>
          </ul>
        </div>
        <ul class="d-flex">
          <li>
            <p @click="toguid('/about','about')">
              ABOUT
            </p>
          </li>
        </ul>
      </nav> -->
      <!-- <div>
        <ul class="d-flex icon-li">
          <li>
            <a href="#" class="icon">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#" class="icon">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div> -->
      <div class="copyright text-center">
        <small>2021 ©Jemma Liu</small>
      </div>
    </div>
  </div>
  <!-- <div class="copyright text-center">
    <small>2021 ©Jemma Liu</small>
  </div> -->
</template>

<!-- <script>
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
      var items = document.querySelectorAll(".scroll-item");
      for (var i = 0; i < items.length; i++) {
        if (index === i) {
          items[i].scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        }
      }
    },
  },
  mounted() {
  },
}
</script> -->