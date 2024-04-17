<template>
    <div class="mobile-category">
      <MobileHeader />
     <MobileCategory />
    </div>
  </template>
  
  <script>
  
  import MobileHeader from "@/layout/mobileHeader.vue";
  import MobileCategory from '@/pages/mobileCategory/categoryPage'

  export default {
    name: 'mobile-category',
    components: {
      MobileHeader,
      MobileCategory
    },
    data() {
      return {
      
        msg: 'header',
  
        baseUrl: this.$baseUrl,
  
      }
    },
 
  }
  </script>
  
  <style lang="scss"  scoped>
  
  
  </style>