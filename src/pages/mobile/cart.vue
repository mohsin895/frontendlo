<template>
    <div class="mobile-cart" >
     
     <MobileHeader />
    
     <MobileCart />
    
    </div>
  </template>
  
  <script>
  
  import MobileCart from '@/pages/mobile/cartView';
  import MobileHeader from "@/layout/mobileHeader.vue";

  export default {
    name: 'mobile-cart',
    components: {
      MobileHeader,
  
      MobileCart
    },
    data() {
      return {
   
        msg: 'mobile-cart',
        baseUrl: this.$baseUrl,
  
      }
    },
    mounted() {
      
      this.customerAuthCheck();
     
    
    
  },
  methods: {


customerAuthCheck() {
    if (this.$store.state.customerInfo == null) {
        this.$router.push({ name: 'signinfor.checkout' });
    }
},



}
  }
  </script>
  
  <style lang="scss"  scoped>
  
  
  </style>