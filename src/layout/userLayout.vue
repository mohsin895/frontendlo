<template>
  <div class="user-layout" ref="top">
    <header-page />
    <div class="user-pages">
      <div class="loyel-container ">
        <div class="loyel-container user-content-wrapper">
          <div class="user-left">
            <UserSidebar />
          </div>

          <div class="right-part">
            <router-view />
          </div>
        </div>
      </div>

    </div>
    <footer-page />
  </div>
</template>

<script>
import headerPage from '@/layout/headerComponentSecond'
import footerPage from '@/layout/footerComponent'
import UserSidebar from '@/layout/userSidebar'

export default {
  name: 'user-layout',
  components: {
    headerPage,
    footerPage,
    UserSidebar
  },
  data() {
    return {
      msg: 'appFile'
    }
  },
  mounted() {
    this.scrollToTop();
    this.$refs.top.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo(0, 0);
  },
  methods: {
    scrollToTop() {

      window.scrollTo(0, 0);
    },
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/normalize.css';
/* .user-content-wrapper{
    display: flex;
    padding:30px 0;
    grid-column-gap: 30px;
    align-items: center;
    max-width:1500px;
} */


@media (min-width: 1450px) {


  .user-content-wrapper {
    padding: 20px 0;
    flex-direction: row;
    align-items: stretch;
    display: flex;
    width: 1450px;
  }
}

@media (min-width: 1200px) and (max-width: 1449px) {


  .user-content-wrapper {
    padding: 20px;
    flex-direction: row;
    align-items: stretch;
    display: flex;
    width: 100%;
  }
}

@media (min-width: 1000px) and (max-width: 1199px) {


  .user-content-wrapper {
    padding: 20px;
    flex-direction: row;
    align-items: stretch;
    display: flex;
    width: 100%;
  }
}

@media (min-width: 800px) and (max-width: 999px) {

  .user-content-wrapper {
    padding: 20px;
    flex-direction: row;
    align-items: stretch;
    display: flex;
    width: 100%;
  }
}

@media (min-width: 600px) and (max-width: 799px) {


  .user-content-wrapper {
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
  }
}

@media (min-width: 400px) and (max-width: 599px) {


  .user-content-wrapper {
    padding: 20px 0;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;

  }
}

@media (min-width: 320px) and (max-width: 399px) {

  .user-content-wrapper {
    padding: 20px 0;
    align-items: center;
    display: flex;
  
    width: 100%;

  }
}

.user-left {
  max-width: 250px;

  margin-right: 20px;
}

.right-part {
  width: 100%;


}

/* @media (max-width: 800px) {
  .user-content-wrapper {
    flex-flow: row wrap;
  }
  .user-left {
    width:100%;
    margin: auto;
  }
} */

.user-layout {
  margin-top: 20px;
}
</style>
