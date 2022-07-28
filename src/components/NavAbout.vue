<template>
  <!-- <div v-for="(item,index) in title_list" :key="item.id" :value='item.title' @click="jump(index)" class="list1">
    {{item.title}}
  </div> -->
  <div class="sticky-top" style="z-index: 9;">
    <nav class="navbar navbar-expand-lg px-5 py-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Jemma</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div>
            <ul class="navbar-nav">
              <li class="nav-item"> 
                <p @click="toguid('/','works')">
                  WORKS
                </p>
              </li>
              <li class="nav-item"> 
                <p @click="toguid('/','article')">
                  ARTICLES
                </p>
              </li>
              <li class="nav-item"> 
                <p @click="toguid('/about','about')">
                  ABOUT
                </p>
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
    }
  },
  methods: {
    toguid(path,id){
      var path=path
      var Id=id;
      localStorage.setItem('toId',Id);
      this.$router.push(path);
    },
  },
  mounted() {
  },
}
</script>