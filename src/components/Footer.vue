<template>
  <div class="footer d-flex flex-column justify-content-center">
    <div class="d-flex flex-column align-items-center">
      <nav>
        <ul class="d-flex">
          <li>
            <router-link to="/">
              WORKS
            </router-link>
          </li>
          <li>
            <router-link to="">
              ARTICLES
            </router-link>
          </li>
          <li>
            <router-link to="about">
              ABOUT
            </router-link>
          </li>
        </ul>
      </nav>
      <div>
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
      </div>
    </div>
  </div>
  <div class="copyright text-center">
    <small>2021 ©Jemma Liu</small>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>