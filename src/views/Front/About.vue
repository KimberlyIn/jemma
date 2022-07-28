<template>
  <div id="about" class="about">
    <div class="container">
      <h1>About Me</h1>
      <div class="pic-box">
        <img src="@/assets/images/me.jpg" alt="">
      </div>
      <div class="about-item-a">
        <h3>你好，我是 Jemma <i class="fas fa-smile"></i></h3>
        <p class="p-line-h p-color-a">
          畢業於設計系所，原來一直都是從事設計業，在作為設計師的那段時間，我通常有著較敏銳的觀察力，以及比較執著於畫面的呈現；因緣際會下，我的工作也開始涉及到網頁的領域，與當時的前端工程師頻繁的往來與合作之下，我也漸漸的開始希望能夠自己寫出畫面，因此便決定投入前端工程師的領域。
        </p>
      </div>
      <div class="about-item-b">
        <div class="about-m-a">
          <h4>技能</h4>
          <p class="p-color-a">JavaScript（加強熟悉中）、Vue（加強熟悉中）、SCSS、CSS、HTML、Git</p>
        </div>
        <div class="about-m-a">
          <h4>經驗</h4>
          <div>
            <ul>
              <li>
                <p class="about-p-bold-a">・2020/12－即日起</p>
                <p class="about-p-m-l p-color-a">前端開發學習與實習</p>
              </li>
              <li>
                <p class="about-p-bold-a">・2015/7-2020/12</p>
                <p class="about-p-m-l p-color-a">網頁設計師</p>
              </li>
              <li>
                <p class="about-p-bold-a">・2013/3-2015/3</p>
                <p class="about-p-m-l p-color-a">網頁設計師</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="about-m-a">
          <h4>與我聯繫</h4>
          <div>
            <ul>
              <li>
                <a href="mailto:miss.liu.2018@gmail.com" class="">
                  <i class="fas fa-envelope p-color-a"></i>
                  <span class="about-p-m-l" _msthash="2466178" _msttexthash="462813">miss.liu.2018@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github p-color-a"></i>
                  <span class="about-p-m-l">https://github.com/nine-2018</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      let Id=localStorage.getItem('toId');
      let toElement=document.getElementById(Id);
      if(Id){
        toElement.scrollIntoView()
      }
    }
  },
  destroyed() {
    localStorage.setItem('toId','');
  },
			

}
</script>