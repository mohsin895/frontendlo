<template>
    <div class="vendor">
        <div class="slider-heading">
            <div class="caption pointer">
                FEATURED VENDOR
            </div>
            <div class="seeall-btn pointer">
                <router-link to="/all-vandor"> SEE ALL</router-link>
                <span class="see-all-span"> 
                    <img src="@/assets/images/arrow.png" alt="">
                </span>
            </div>
        </div>
        <hooper  :settings="hooperSettings" :play-speed="5000">
            <slide v-for="(shopInfo,shopIndex) in shopList" :key="shopIndex">
                <!-- <pre>{{shopInfo}}</pre> -->
                <div class="vendor-card-import">
                    <VendorCard
                    :imageName="baseUrl + shopInfo.shop_banner"
                    :shortTitle="shopInfo.shop_name"
                    :shopDetails="shopInfo"
                    />
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <!-- <hooper-pagination slot="hooper-addons"></hooper-pagination> -->
        </hooper>
    </div>
</template>

<script>
import { 
    Hooper,
    Slide, 
    Navigation as HooperNavigation,
    // Pagination as HooperPagination
} from 'hooper';
import 'hooper/dist/hooper.css';
import VendorCard from '@/components/slider/vendorCard'
export default {
    name:'vendor',
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        // HooperPagination,
        VendorCard
    },
    data() {
        return {
            shopList:[],
            msg:'vendor',
            baseUrl:this.$baseUrl,
            hooperSettings: {
                itemsToShow: 6,
                itemsToSlide:1,
                infiniteScroll: true,
                centerMode: true,
                // pagination: 'fraction',
                wheelControl: false,
                autoPlay: true,
                keysControl: false,
                breakpoints: {
                    380: {
                        itemsToShow: 2,
                        centerMode: false,
                    },
                    650: {
                        itemsToShow: 4,
                        centerMode: false,
                    },
                    768: {
                        itemsToShow: 5
                    },
                    1200: {
                        itemsToShow: 6
                    }
                }
            }
        }
    },
    beforeMount(){
        this.getShopList();
    },
    methods:{
        getShopList(){
           this.$http.get("get/random/shop/list")
           .then(response=>{ 
                this.shopList=response.data;
           })
           .catch(error=>{console.dir(error)})
           .finally();
        }
    }
}
</script>


<style scoped>
.hooper{
    height:auto;
    width: 1500px;
    margin:auto;
}
.vendor-card-import{
    width:275px;
    height:135spx;
    background:white;
}
.see-all-span{
    margin-left:10px;
}
.see-all-span img{
    margin-top:-4px;
}

/* slider header style  start */
.slider-heading{
    height:40px;
    max-width:1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    border:1px solid rgb(167, 165, 165);
    margin-bottom:10px;
    padding:0 10px;
    background: white;
}
.caption{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #000000;
}
.seeall-btn:hover{
    color: var(--see-all-color);
}

.seeall-btn{
    font-family: OpenSans,Roboto,Helvetica Neue,Helvetica,Arial,Microsoft YaHei;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  
}
/* slider header style end  */
</style>