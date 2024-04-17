<template>
    <div class="mobile-checkout">
     
      <MobileHeader />
    
     <MobileCheckout />





    
    </div>
  </template>
  
  <script>
 
  import MobileCheckout from '@/pages/mobile/checkoutView';
  import MobileHeader from "@/layout/mobileHeader.vue";

  export default {
    name: 'mobile-checkout',
    components: {
      MobileHeader,
      MobileCheckout,
  
    },
    data() {
      return {
      
        msg: 'mobile-checkout',
  
      }
    },
   
  }
  </script>
  
  <style lang="scss"  scoped>
  
 

  </style>