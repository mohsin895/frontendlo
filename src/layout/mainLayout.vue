<template>
  <div class="layout" >
    <header-page/>
      <div class="all-pages"  >
        <router-view/>
      </div>
    <footer-page/>
  </div>
</template>

<script>
import headerPage from '@/layout/headerComponent'
import footerPage from '@/layout/footerComponent'
export default {
  name: 'App',
  components:{
    headerPage,
    footerPage
  },
  data() {
    return {
      msg:'appFile',
     
    }
  },
 
  methods: {
    
  }

 
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/normalize.css';


 

@media (max-width: 1449px) {
 .all-pages{
  margin-left:20px;
  margin-right:20px;
  margin-bottom:20px;
}

} 

@media (max-width: 767px) {
  .all-pages{
  margin-top: -25px;
}

}

</style>
