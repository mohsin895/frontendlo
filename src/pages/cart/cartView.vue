<template>
    <div class="cart" ref="top">
        <div class="loyel-container">
          
            <div class="loyel-container cart-store-tab-body">
                <Cart/>
              
            </div>
        </div>
        
    </div>
</template>

<script>
import Cart from '@/components/cart/cart'
// import FollowedStore from '@/components/cart/followedStore'
export default {
    name:'cart',
    components: {
        Cart,
        // FollowedStore
    },
    data() {
        return {
            msg: 'cart',
            baseUrl: this.$baseUrl,
      
        }
    },
    mounted() {
      
        this.customerAuthCheck();
       
        this.scrollToTop();
     this.$refs.top.scrollIntoView({ behavior: 'smooth', block: 'start' });
     window.scrollTo(0, 0);
      
    },
    methods: {

        scrollToTop() {
    
    window.scrollTo(0, 0);
  },

     
        customerAuthCheck() {
            if (this.$store.state.customerInfo == null) {
                this.$router.push({ name: 'signinfor.checkout' });
            }
        },
      
      
      scrollToTop() {
        window.scrollTo(0, 0);
      },
  
    }
}
</script>


<style scoped>

@media (min-width: 1450px){
.loyel-container {
    max-width: 1450px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 20px;
    margin: auto;
}

}

@media (min-width: 768px) and (max-width: 1499px){
.loyel-container {
    max-width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 20px;
    margin: auto;
}

}

@media (min-width: 1540px) {
   
   .cart-store-tab-body {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:1450px;
}
}

@media (min-width: 1200px) and (max-width: 1549px) {
  .cart-store-tab-body {
  display: flex;

  flex-direction: row;
  align-items: center;
  max-width:100%;
}

}

.cart-store-tabs ul{
    display: flex;
    list-style: none;
    padding: 0;
    grid-column-gap: 15px;
    border-bottom: 1px solid #afacac;
}
.cart-store-tabs ul li {
    padding-bottom: 8px;
    cursor: pointer;
}
.active-li {
    border-bottom: 1px solid black;
}


.cart-store-tab-body {
    margin-top: 35px;
}

@media (min-width: 1450px){
.cart-store-tab-body {
 
    display: flex;
   
    flex-flow: row wrap;
 
    justify-content: space-between;
  
    align-items: center;
    max-width: 1450px;
    /* background: #fff; */
}

}

@media (min-width: 1400px) and (max-width: 1449px){
.cart-store-tab-body {
   
    display: flex;
   
    flex-flow: row wrap;
 
    justify-content: space-between;
  
    align-items: center;
    max-width: 100%;
}

}

@media (min-width: 1200px) and (max-width: 1399px){
.cart-store-tab-body {

    display: flex;
   
    flex-flow: row wrap;
 
    justify-content: space-between;
  
    align-items: center;
    max-width: 100%;
}

}

@media (min-width: 1000px) and (max-width: 1199px){
.cart-store-tab-body {

    display: flex;
   
    flex-flow: row wrap;
 
    justify-content: space-between;
  
    align-items: center;
    max-width: 100%;
}

}

@media (min-width: 1px) and (max-width: 999px){
.cart-store-tab-body {
 
    justify-content: space-between;
    max-width: 100%;
}

}
.cart-store-tab-body{
    margin-block: 20px;
    margin-top: 0px;
}
</style>